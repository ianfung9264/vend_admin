import React from "react";
import { Modal, Table, Tag } from "antd";

interface EventModalProps {
	visible: boolean;
	onClose: () => void;
	record: any;
}

const EventModal: React.FC<EventModalProps> = ({ visible, onClose, record }) => {
	const eventColumns = [
		{
			title: "Event Name",
			dataIndex: "name",
			key: "name",
			sorter: (a: any, b: any) => a.name.localeCompare(b.name),
		},
		{
			title: "Venue",
			dataIndex: ["location", "venue"],
			key: "venue",
		},
		{
			title: "First Scheduled Date",
			dataIndex: "schedule",
			key: "first_schedule_date",
			render: (schedule: any[]) => {
				if (schedule && schedule.length > 0 && schedule[0].start_time) {
					return new Date(schedule[0].start_time).toLocaleDateString();
				}
				return "N/A";
			},
		},
		{
			title: "Likes",
			dataIndex: "liked_count",
			key: "liked_count",
			align: "center" as const,
			sorter: (a: any, b: any) => a.liked_count - b.liked_count,
		},
		{
			title: "Categories",
			dataIndex: "category",
			key: "category",
			render: (categories: any[]) => {
				if (!categories || categories.length === 0) return "N/A";
				return categories.map((cat) => <Tag key={cat._id}>{cat.name}</Tag>);
			},
		},
	];

	const eventsData = record?.events || [];

	// Log the data when the modal is intended to be visible and has data
	React.useEffect(() => {
		if (visible && eventsData.length > 0) {
			console.log("EventModal Data (record.events):", eventsData);
		}
	}, [visible, eventsData]);

	// Expanded Row Renderer for Event Details
	const expandedEventRowRender = (event: any) => {
		const { ticket_types, schedule, location } = event;

		return (
			<div style={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
				<h4>Ticket Types:</h4>
				{ticket_types && ticket_types.length > 0 ? (
					<ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
						{ticket_types.map((tt: any, index: number) => (
							<li key={index} style={{ marginBottom: "8px" }}>
								<strong>{tt.stall_type}</strong> - Price: ${Number(tt.price).toFixed(2)}
								<br />
								<span style={{ fontSize: "0.9em" }}>
									<em>{tt.description}</em>
								</span>
							</li>
						))}
					</ul>
				) : (
					<p>No ticket types defined.</p>
				)}

				<h4 style={{ marginTop: "16px" }}>Full Schedule:</h4>
				{schedule && schedule.length > 0 ? (
					<ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
						{schedule.map((s: any, index: number) => (
							<li key={index}>
								{new Date(s.start_time).toLocaleString()} - {new Date(s.end_time).toLocaleString()}
							</li>
						))}
					</ul>
				) : (
					<p>No schedule defined.</p>
				)}

				<h4 style={{ marginTop: "16px" }}>Location Details:</h4>
				{location ? (
					<div style={{ paddingLeft: "10px" }}>
						<p>
							<strong>Venue:</strong> {location.venue}
						</p>
						<p>
							<strong>Address:</strong> {location.address}
						</p>
						<p>
							<strong>City:</strong> {location.city}
						</p>
						<p>
							<strong>State:</strong> {location.state}
						</p>
						<p>
							<strong>Country:</strong> {location.country}
						</p>
						<p>
							<strong>ZIP/Postal:</strong> {location.real_zip}
						</p>
					</div>
				) : (
					<p>No location details available.</p>
				)}
			</div>
		);
	};

	return (
		<Modal
			title={`Events by ${record?.business_name || "Organizer"}`}
			open={visible}
			onCancel={onClose}
			footer={null}
			width={1000}
			mask={true}
			maskStyle={{
				backgroundColor: "rgba(0, 0, 0, 0.1)",
			}}
		>
			<Table
				columns={eventColumns}
				dataSource={eventsData}
				rowKey="_id"
				pagination={false}
				scroll={{ y: 400 }}
				expandable={{
					expandedRowRender: expandedEventRowRender,
					rowExpandable: (record) => true,
					expandRowByClick: true,
				}}
			/>
		</Modal>
	);
};

export default EventModal;
