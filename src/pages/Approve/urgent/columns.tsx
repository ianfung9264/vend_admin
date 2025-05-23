import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Drawer, message, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType, UrgentActionStatus, UrgentActionType } from "@/services/commonType";
import { BellOutlined, CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { _putUrgentInfo } from "@/services/urgent/info";
import { useState } from "react";

export function UrgentTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<any>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [currentReason, setCurrentReason] = useState("");
	const markComplete = async (record: any) => {
		console.log("record", record);
		await _putUrgentInfo({
			status: UrgentActionStatus.Handled,
			urgent_id: record._id,
		}).then(({ data }) => {
			mainTableReload?.();
			message.success("Marked as handled");
		});
	};

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);
	return [
		{
			title: "Event Id",
			dataIndex: ["related_id", "_id"],
			key: "event_id",
			align: "center",
		},

		{
			title: "Event Name",
			dataIndex: ["related_id", "name"],
			key: "event_name",
			align: "center",
		},
		{
			title: "Event Status",
			dataIndex: ["related_id", "status"],
			key: "event_status",
			align: "center",
			render: (status: number) => {
				if (status === 2) {
					return "Cancelled";
				}
				if (status === 0) {
					return "Normal";
				}
				return "Unknown";
			},
		},
		{
			title: "Organizer Business Name",
			dataIndex: ["landowner_id", "business_name"],
			key: "landowner_business_name",
			align: "center",
		},
		{
			title: "Email",
			dataIndex: ["landowner_id", "email"],
			key: "email",
			align: "center",
		},

		{
			title: "Phone prefix",
			dataIndex: ["landowner_id", "phone_pre"],
			key: "phone_prefix",
			align: "center",
		},
		{
			title: "Phone",
			dataIndex: ["landowner_id", "phone"],
			key: "phone",
			align: "center",
		},
		{
			title: "Reason",
			dataIndex: "reason",
			key: "reason",
			ellipsis: {
				showTitle: false,
			},
			render: (text) => (
				<>
					<Button
						type="link"
						onClick={() => {
							setCurrentReason(text as string);
							setDrawerVisible(true);
						}}
					>
						View Cancellation Request
					</Button>
					<Drawer
						title="Event Cancellation Request"
						placement="right"
						onClose={() => setDrawerVisible(false)}
						open={drawerVisible}
						width={600}
						styles={{
							mask: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
						}}
					>
						<div style={{ padding: "16px" }}>
							<div
								style={{
									backgroundColor: "#e6f7ff",
									padding: "16px",
									borderRadius: "4px",
									marginBottom: "24px",
								}}
							>
								<h3 style={{ color: "#1890ff", marginBottom: "8px" }}>About Urgent Cancellations</h3>
								<p>
									Organizers may request urgent event cancellation due to circumstances beyond their
									control, such as severe weather, safety concerns, or other emergencies. Please
									review their reason carefully and verify the situation if needed.
								</p>
							</div>

							<h3 style={{ marginBottom: "16px" }}>Organizer's Cancellation Reason:</h3>
							<div
								style={{
									backgroundColor: "#fafafa",
									padding: "16px",
									borderRadius: "4px",
									marginBottom: "24px",
								}}
							>
								<p style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{currentReason}</p>
							</div>

							<Divider />

							<h3 style={{ marginBottom: "16px", color: "#1890ff" }}>Action Steps:</h3>
							<ol style={{ paddingLeft: "20px" }}>
								<li style={{ marginBottom: "16px" }}>
									<strong>Review and Verify</strong>
									<p>
										Contact the organizer using their provided phone or email if you need to verify
										any details about the situation.
									</p>
								</li>
								<li style={{ marginBottom: "16px" }}>
									<strong>Stop the Event</strong>
									<p>
										If cancellation is approved, go to the event page and click the "Stop" button
										under Actions. This will immediately remove the event from the marketplace.
									</p>
								</li>
								<li style={{ marginBottom: "16px" }}>
									<strong>Process Refunds</strong>
									<p>
										Next to the Stop button, click the Refund button to automatically process
										refunds for all vendors who have applied to this event.
									</p>
								</li>
							</ol>

							<div
								style={{
									backgroundColor: "#fff2e8",
									padding: "16px",
									borderRadius: "4px",
									marginTop: "24px",
								}}
							>
								<strong>Important Notes:</strong>
								<ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
									<li>Once an event is stopped, it cannot be reactivated</li>
									<li>All vendors will be automatically notified when refunds are processed</li>
									<li>The event will be removed from all search results and vendor dashboards</li>
								</ul>
							</div>
						</div>
					</Drawer>
				</>
			),
			align: "center",
		},
		{
			title: "Wallet Balance",
			dataIndex: ["landowner_id", "wallet"],
			key: "wallet",
			render: (text) => `$${Number(text)?.toFixed(2)}`, // Format as currency
			align: "center",
		},
		// {
		// 	title: "Actions",
		// 	dataIndex: "action",
		// 	key: "action",
		// 	render: (_, record) => (
		// 		<span>
		// 			{record.landowner_id && (
		// 				<DetailModal
		// 					initData={{
		// 						landownerId: record.landowner_id._id,
		// 						wallet: record.landowner_id.wallet,
		// 						eventId: record.related_id._id,
		// 						eventName: record.related_id.name,
		// 						_id: record._id,
		// 					}}
		// 					mainTableReload={mainTableReload}
		// 				/>
		// 			)}
		// 		</span>
		// 	),
		// 	align: "center",
		// },
	];
}
