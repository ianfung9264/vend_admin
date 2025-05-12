import React, { useEffect, useState } from "react";
import { Modal, Table, Spin } from "antd";
import { _getApplicationTransactionsByEventIds } from "@/services/org/info";
import { _getWithdrawalByLandowner } from "@/services/withdrawal/info";

interface WalletBalanceModalProps {
	visible: boolean;
	onClose: () => void;
	record: any;
}

const WalletBalanceModal: React.FC<WalletBalanceModalProps> = ({ visible, onClose, record }) => {
	const [combinedTransactions, setCombinedTransactions] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (visible && record?._id) {
			setLoading(true);
			const landownerId = record._id;
			const eventIds = Array.isArray(record?.events) ? record.events.map((e: any) => e._id) : [];

			Promise.all([
				_getWithdrawalByLandowner(landownerId),
				eventIds.length > 0 ? _getApplicationTransactionsByEventIds(eventIds) : Promise.resolve([]),
			])
				.then(([withdrawalRes, applicationRes]) => {
					const withdrawals = (withdrawalRes || []).map((w: any) => ({
						_id: w._id,
						transactionType: "withdrawal",
						event_name: "Withdrawal from Wallet",
						createdAt: w.createdAt,
						amount: w.amount * -1,
						action_type: "Withdrawal",
						description: "N/A",
						status: w.progress,
						originalData: w,
					}));

					const applications = (applicationRes || []).map((a: any) => ({
						_id: a._id,
						transactionType: "application",
						event_name: a.event_name || "Event Payment",
						createdAt: a.createdAt,
						amount: a.ticket_type?.amount || 0,
						action_type: "Payment",
						description: "N/A",
						status: a.stall_payment_status,
						originalData: a,
					}));

					const combined = [...withdrawals, ...applications].sort(
						(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
					);

					setCombinedTransactions(combined);
				})
				.finally(() => setLoading(false));
		}
		if (!visible) {
			setCombinedTransactions([]);
		}
	}, [visible, record]);

	const columns = [
		{
			title: "Event Name / Type",
			dataIndex: "event_name",
			key: "event_name",
		},
		{
			title: "Date",
			dataIndex: "createdAt",
			key: "date",
			render: (text: string) => new Date(text).toLocaleString(),
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
			render: (text: number) => `$${Number(text)?.toFixed(2)}`,
		},
		{
			title: "Action Type",
			dataIndex: "action_type",
			key: "action_type",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
	];

	const expandedRowRender = (row: any) => {
		if (row.transactionType === "withdrawal") {
			return (
				<div style={{ padding: "16px" }}>
					<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
						<div>
							<p>
								<strong>Transaction ID:</strong> {row._id}
							</p>
							<p>
								<strong>Payment Method:</strong> N/A
							</p>
							<p>
								<strong>Card Last 4:</strong> N/A
							</p>
						</div>
						<div>
							<p>
								<strong>Status:</strong> {row.status}
							</p>
							<p>
								<strong>Processed By:</strong> N/A
							</p>
							<p>
								<strong>Processing Time:</strong> N/A
							</p>
						</div>
					</div>
					<div style={{ marginTop: "16px" }}>
						<p>
							<strong>Notes:</strong> {row.originalData.rejected_reason || "N/A"}
						</p>
					</div>
				</div>
			);
		} else if (row.transactionType === "application") {
			return (
				<div style={{ padding: "16px" }}>
					<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
						<div>
							<p>
								<strong>Transaction ID:</strong> {row._id}
							</p>
							<p>
								<strong>Payment Method:</strong> N/A
							</p>
							<p>
								<strong>Card Last 4:</strong> N/A
							</p>
						</div>
						<div>
							<p>
								<strong>Status:</strong> {row.status}
							</p>
							<p>
								<strong>Processed By:</strong> N/A
							</p>
							<p>
								<strong>Processing Time:</strong> N/A
							</p>
						</div>
					</div>
					<div style={{ marginTop: "16px" }}>
						<p>
							<strong>Notes:</strong> {row.originalData.remark || "N/A"}
						</p>
					</div>
				</div>
			);
		}
		return null;
	};

	return (
		<Modal
			title="Wallet Transaction History"
			open={visible}
			onCancel={onClose}
			footer={null}
			width={800}
			mask={true}
			maskStyle={{
				backgroundColor: "rgba(0, 0, 0, 0.1)",
			}}
		>
			{loading ? (
				<div style={{ minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Spin size="large" />
				</div>
			) : (
				<Table
					columns={columns}
					dataSource={combinedTransactions}
					rowKey="_id"
					pagination={false}
					expandable={{
						expandedRowRender,
						rowExpandable: () => true,
						expandRowByClick: true,
					}}
				/>
			)}
		</Modal>
	);
};

export default WalletBalanceModal;
