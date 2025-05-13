import React from "react";
import { Modal, Table, Tag, Image } from "antd"; // Added Image for event images

interface JoinedEventsModalProps {
	visible: boolean;
	onClose: () => void;
	tenantRecord: any; // The tenant object, which contains joined_events (array of Application objects)
}

// Helper function for status tags (can be shared or defined locally if not already in a common place)
const getApplicationStatusTag = (status: string) => {
	switch (status?.toUpperCase()) {
		case "PAID":
			return <Tag color="green">Accepted & Paid</Tag>;
		case "REFUNDED":
			return <Tag color="purple">Refunded</Tag>;
		case "DENIED":
			return <Tag color="red">Denied</Tag>;
		case "WAITING":
			return <Tag color="orange">Pending Organizer Decision</Tag>;
		case "ACCEPT":
			return <Tag color="blue">Accepted & Unpaid</Tag>;
		case "CANCELLED":
			return <Tag color="default">Cancelled</Tag>;
		default:
			return <Tag>{status || "N/A"}</Tag>;
	}
};

const JoinedEventsModal: React.FC<JoinedEventsModalProps> = ({ visible, onClose, tenantRecord }) => {
	const applicationEventColumns = [
		{
			title: "Event Name",
			dataIndex: ["event_id", "name"], // Access nested event name
			key: "eventName",
			sorter: (a: any, b: any) => (a.event_id?.name || "").localeCompare(b.event_id?.name || ""),
			ellipsis: true,
		},
		{
			title: "Event Venue",
			dataIndex: ["event_id", "location", "venue"],
			key: "eventVenue",
			ellipsis: true,
		},
		{
			title: "Application Date",
			dataIndex: "createdAt", // Application creation date
			key: "applicationDate",
			render: (text: string) => new Date(text).toLocaleDateString(),
			sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		},
		{
			title: "Stall Payment Status",
			dataIndex: "stall_payment_status", // Status from the Application
			key: "stallPaymentStatus",
			render: (status: string) => getApplicationStatusTag(status),
			align: "center" as const,
			sorter: (a: any, b: any) => (a.stall_payment_status || "").localeCompare(b.stall_payment_status || ""),
		},
		{
			title: "Organizer",
			dataIndex: ["event_id", "creator_details", "name"],
			key: "organizer",
			ellipsis: true,
		},
	];

	const applicationsData = tenantRecord?.joined_events || [];

	React.useEffect(() => {
		if (visible && applicationsData.length > 0) {
			console.log("JoinedEventsModal Data (Applications):", applicationsData);
		}
	}, [visible, applicationsData]);

	const expandedApplicationRowRender = (application: any) => {
		const { event_id, ticket_type, add_ons, remark, _id: applicationId } = application;
		const event = event_id; // for clarity

		// Calculate total add-on amount
		let totalAddonAmount = 0;
		if (add_ons && add_ons.length > 0) {
			totalAddonAmount = add_ons.reduce((sum: number, addon: any) => {
				return sum + (Number(addon.amount) * Number(addon.quantity) || 0);
			}, 0);
		}

		// Calculate actual ticket price
		const actualTicketPrice = (Number(ticket_type?.amount) || 0) - totalAddonAmount;

		return (
			<div style={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
				<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
					<div>
						<h4>Application Details:</h4>
						<p>
							<strong>Application ID:</strong> {applicationId}
						</p>
						<p>
							<strong>Application Status:</strong>{" "}
							{getApplicationStatusTag(application.stall_payment_status)}
						</p>
						<p>
							<strong>Applied Ticket:</strong> {ticket_type?.ticket_type || "N/A"} ($
							{actualTicketPrice.toFixed(2)})
						</p>
						<div>
							<strong>Applied Add-ons:</strong>
							{add_ons && add_ons.length > 0 ? (
								<ul style={{ listStyleType: "none", paddingLeft: "15px", margin: 0 }}>
									{add_ons.map((addon: any, index: number) => (
										<li key={index}>
											- {addon.add_on_type} (Qty: {addon.quantity}) - $
											{Number(addon.amount).toFixed(2)} each
										</li>
									))}
								</ul>
							) : (
								<span style={{ marginLeft: "5px" }}>No add-ons applied.</span>
							)}
						</div>
						<p>
							<strong>Total:</strong> ${ticket_type?.amount.toFixed(2)}
						</p>
					</div>
					<div>
						<h4>Event Details:</h4>
						<p>
							<strong>Event Name:</strong> {event?.name}
						</p>
						<p>
							<strong>Organizer:</strong> {event?.creator_details?.name || "N/A"}
						</p>
						<div>
							<strong>Full Schedule:</strong>
							{event?.schedule && event.schedule.length > 0 ? (
								<ul style={{ listStyleType: "none", paddingLeft: "15px", margin: 0 }}>
									{event.schedule.map((s: any, index: number) => (
										<li key={index}>
											{new Date(s.start_time).toLocaleString()} -{" "}
											{new Date(s.end_time).toLocaleString()}
										</li>
									))}
								</ul>
							) : (
								<span style={{ marginLeft: "5px" }}>No schedule defined.</span>
							)}
						</div>
						<div style={{ marginTop: "8px" }}>
							<strong>Location:</strong>
							{event?.location ? (
								<div style={{ paddingLeft: "15px" }}>
									<p style={{ margin: 0 }}>Venue: {event.location.venue}</p>
									<p style={{ margin: 0 }}>
										Address: {event.location.address}, {event.location.city}, {event.location.state}
										, {event.location.country} {event.location.zip}
									</p>
								</div>
							) : (
								<span style={{ marginLeft: "5px" }}>No location details.</span>
							)}
						</div>
						<div style={{ marginTop: "8px" }}>
							<strong>Event Images:</strong>
							{event?.image_filename && event.image_filename.length > 0 ? (
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: "10px",
										paddingLeft: "15px",
										marginTop: "5px",
									}}
								>
									{event.image_filename.map((img: any, index: number) => (
										<Image
											key={index}
											src={img.url}
											alt={img.filename || "event image"}
											style={{ height: "80px", border: "1px solid #ddd" }}
										/>
									))}
								</div>
							) : (
								<span style={{ marginLeft: "5px" }}>No images.</span>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Modal
			title={`Applications by ${tenantRecord?.business_name || tenantRecord?.firstname || "Vendor"}`}
			open={visible}
			onCancel={onClose}
			footer={null}
			width={1200} // Wider modal
			mask={true}
			maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
		>
			<Table
				columns={applicationEventColumns} // Use new columns
				dataSource={applicationsData} // Use application data
				rowKey="_id" // Application ID is the key
				pagination={false}
				scroll={{ y: 450 }}
				expandable={{
					expandedRowRender: expandedApplicationRowRender, // Use new expanded render
					rowExpandable: () => true,
					expandRowByClick: true,
				}}
			/>
		</Modal>
	);
};

export default JoinedEventsModal;
