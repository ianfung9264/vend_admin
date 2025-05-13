import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Drawer, Typography, Space, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { WithdrawalProgress } from "@/services/commonType";
import { QuestionCircleOutlined, CheckCircleFilled, StopFilled } from "@ant-design/icons";
import { useState } from "react";

export function WithdrawalTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<any>[] {
	const [drawerVisible, setDrawerVisible] = useState(false);

	const WithdrawalHelpDrawer = (
		<Drawer
			title="Withdrawal Process Guide"
			placement="right"
			onClose={() => setDrawerVisible(false)}
			open={drawerVisible}
			width={600}
			styles={{
				mask: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
			}}
		>
			<div style={{ padding: "16px" }}>
				<div style={{ backgroundColor: "#e6f7ff", padding: "16px", borderRadius: "4px", marginBottom: "24px" }}>
					<h3 style={{ color: "#1890ff", marginBottom: "8px" }}>About Withdrawals</h3>
					<p>
						After events end, organizers can request to withdraw their earnings. These requests appear here
						for processing. Each withdrawal goes through a specific workflow to ensure proper handling and
						documentation.
					</p>
				</div>

				<h3 style={{ marginBottom: "16px", color: "#1890ff" }}>Withdrawal Flow:</h3>
				<ol style={{ paddingLeft: "20px" }}>
					<li style={{ marginBottom: "16px" }}>
						<strong>Money Collection Period</strong>
						<p>
							When vendors pay for events, money goes into a cool-down wallet. After the event ends,
							there's a 3-day cooling period before funds become available for withdrawal.
						</p>
					</li>
					<li style={{ marginBottom: "16px" }}>
						<strong>Withdrawal Request</strong>
						<p>
							Organizers can request withdrawals once funds are available. These appear here as "Pending
							Approval" status.
						</p>
					</li>
					<li style={{ marginBottom: "16px" }}>
						<strong>Processing Steps</strong>
						<ul style={{ paddingLeft: "20px" }}>
							<li>- Click the action button on a pending request</li>
							<li>
								- Select "Approve" to change status to "Processing Bank Transfer" - this helps track
								which transfers need processing
							</li>
							<li>
								- Now, You should go to the bank and process the actual bank transfer to the organizer's
								account
							</li>
							<li>
								- Once the bank transfer is completed, return here and update status to "Completed" to
								notify the organizer
							</li>
						</ul>
					</li>
				</ol>

				<div style={{ backgroundColor: "#fff2e8", padding: "16px", borderRadius: "4px", marginTop: "24px" }}>
					<strong>Important Notes:</strong>
					<ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
						<li>Always verify the withdrawal amount matches the organizer's available balance</li>
						<li>Use the "Export Pending Withdrawals" button to get a list for batch processing</li>
						<li>If rejecting a request, always provide a clear reason</li>
					</ul>
				</div>
			</div>
		</Drawer>
	);

	return [
		{
			title: "Organizer Email",
			dataIndex: "landowner",
			key: "landowner",
			render: (_, record) => record.landowner.email,
			align: "center",
		},
		{
			title: "Current Wallet Balance",
			dataIndex: "landowner",
			key: "landowner",
			render: (_, record) => `$${Number(record.landowner.wallet).toFixed(2)}`,
			align: "center",
		},
		{
			title: "Withdrawal Amount",
			dataIndex: "amount",
			key: "amount",
			render: (text) => `$${Number(text).toFixed(2)}`,
			align: "center",
		},
		{
			title: "Status",
			dataIndex: "progress",
			key: "progress",
			align: "center",
			render: (status) => {
				let color;
				let text;
				switch (status) {
					case WithdrawalProgress.WAITING_FOR_APPROVE:
						color = "#faad14"; // Orange
						text = "Pending Approval";
						break;
					case WithdrawalProgress.APPROVED_PROGRESSING:
						color = "#1890ff"; // Blue
						text = "Processing Bank Transfer";
						break;
					case WithdrawalProgress.APPROVED_COMPLETED:
						color = "#52c41a"; // Green
						text = "Completed";
						break;
					case WithdrawalProgress.REJECTED:
						color = "#ff4d4f"; // Red
						text = "Rejected";
						break;
					default:
						color = "#d9d9d9";
						text = status;
				}
				return <Typography.Text style={{ color }}>{text}</Typography.Text>;
			},
		},
		{
			title: "Explanation",
			key: "explanation",
			render: () => (
				<>
					<QuestionCircleOutlined style={{ cursor: "pointer" }} onClick={() => setDrawerVisible(true)} />
					{WithdrawalHelpDrawer}
				</>
			),
			align: "center",
			width: 100,
		},
		{
			title: "Request Date",
			dataIndex: "createdAt",
			key: "created_at",
			align: "center",
			valueType: "dateTime",
		},
		{
			title: "Actions",
			dataIndex: "action",
			key: "action",
			render: (_, record) => {
				if (
					record.progress === WithdrawalProgress.WAITING_FOR_APPROVE ||
					record.progress === WithdrawalProgress.APPROVED_PROGRESSING
				) {
					return <DetailModal initData={record} mainTableReload={mainTableReload} />;
				}

				// Show different icons based on status
				if (record.progress === WithdrawalProgress.APPROVED_COMPLETED) {
					return (
						<Tooltip title="Withdrawal completed">
							<CheckCircleFilled style={{ color: "#52c41a", fontSize: "16px" }} />
						</Tooltip>
					);
				}

				return (
					<Tooltip title="No actions available">
						<StopFilled style={{ color: "#ff4d4f", fontSize: "16px" }} />
					</Tooltip>
				);
			},
			align: "center",
		},
	];
}
