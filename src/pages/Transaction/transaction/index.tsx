import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { ActionType } from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import { AllTransactionsTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { _getAllRefund } from "@/services/withdrawal/info";
import { _getAllApplicationsForAdmin } from "@/services/application/info";
// import { API_APPLICATION } from "@/services/application/typing"; // Global
import { Tag, Spin, Typography } from "antd";

// Define a unified transaction type for the table (ensure API_APPLICATION is accessible globally)
export interface UnifiedTransaction {
	_id: string;
	transaction_type: "APPLICATION_FEE" | "STALL_PAYMENT" | "REFUND";
	event_name?: string;
	tenant_name?: string;
	amount?: number;
	status?: string;
	dateTime?: string;
	original_application?: API_APPLICATION.Application;
	original_refund?: API_APPLICATION.Refund;
	application_id?: string;
	is_confirm_refunded?: boolean;
	application_fee_status?: string;
	stall_payment_status?: string;
}

// Helper function for status tags (copied from WalletBalanceModal.tsx)
const getStatusTag = (status: string | undefined) => {
	switch (status?.toUpperCase()) {
		case "PAID":
			return <Tag color="green">Accepted & Paid</Tag>;
		case "REFUNDED":
			return <Tag color="purple">Refunded</Tag>;
		case "DENIED": // From WalletBalanceModal, may not apply here but kept for consistency
			return <Tag color="red">Rejected</Tag>;
		case "WAITING":
			return <Tag color="orange">Pending Org Decision</Tag>; // Or "Waiting Payment" etc.
		// Statuses from AllTransactionsTableColumns valueEnum for STALL_PAYMENT and REFUND
		case "CONFIRMED": // For refunds
			return <Tag color="blue">Confirmed</Tag>;
		case "PENDING": // For refunds
			return <Tag color="gold">Pending</Tag>;
		// Additional statuses from EApplicationFeeStatus / EStallPaymentStatus if needed for expanded view
		case "UNPAID":
			return <Tag color="red">Unpaid</Tag>;
		case "FAILED":
			return <Tag color="red">Failed</Tag>;
		case "ACCEPT": // Added from an earlier observation of your data
			return <Tag color="cyan">Accepted</Tag>;
		case "CANCELLED": // Added from an earlier observation
			return <Tag color="grey">Cancelled</Tag>;
		default:
			return <Tag>{status || "N/A"}</Tag>;
	}
};

export default function Index() {
	const actionRef = useRef<ActionType>();
	const [searchKey, setSearchKey] = useState("");
	const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

	// Expanded Row Render Function
	const expandedRowRender = (record: UnifiedTransaction) => {
		if (record.transaction_type === "STALL_PAYMENT" && record.original_application) {
			const appData = record.original_application;
			const {
				stall_payment_summary,
				tenant_name,
				ticket_type,
				add_ons,
				remark,
				_id: transactionId,
				stall_payment_status,
			} = appData;

			const addOnsDisplay =
				add_ons && add_ons.length > 0 ? (
					add_ons.map((addon: any, index: number) => (
						<div key={index} style={{ fontSize: "0.9em", marginLeft: "5px", lineHeight: "1.4" }}>
							- {addon.add_on_type} (x{addon.quantity}) - ${Number(addon.amount).toFixed(2)}
						</div>
					))
				) : (
					<span style={{ fontSize: "0.9em", marginLeft: "5px" }}>No add-ons</span>
				);

			// Calculate base ticket price for display
			let baseTicketPrice = 0;
			if (ticket_type?.amount) {
				const addOnsTotal = (add_ons || []).reduce(
					(sum: number, addon: any) => sum + (Number(addon.amount) * Number(addon.quantity) || 0),
					0
				);
				baseTicketPrice = Number(ticket_type.amount) - addOnsTotal;
			}

			return (
				<div style={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: "16px",
						}}
					>
						<div>
							<p>
								<strong style={{ display: "block", marginBottom: "4px" }}>
									Transaction ID (Application):
								</strong>{" "}
								<span style={{ marginLeft: "10px" }}>{transactionId}</span>
							</p>
							<p>
								<strong style={{ display: "block", marginBottom: "4px" }}>Vendor Name:</strong>{" "}
								<span style={{ marginLeft: "10px" }}>{tenant_name || "N/A"}</span>
							</p>
							<p>
								<strong style={{ display: "block", marginBottom: "4px" }}>Status:</strong>{" "}
								<span style={{ marginLeft: "10px" }}>{getStatusTag(stall_payment_status)}</span>
							</p>
							<p>
								<strong style={{ display: "block", marginBottom: "4px" }}>Ticket Type:</strong>
								<span style={{ marginLeft: "10px" }}>
									{ticket_type?.ticket_type || "N/A"} - $
									{baseTicketPrice === 0 ? "0.00" : baseTicketPrice.toFixed(2)}
								</span>
							</p>
							<div style={{ marginBottom: "8px" }}>
								<strong style={{ display: "block", marginBottom: "2px" }}>Add-ons:</strong>
								{addOnsDisplay}
							</div>
							<p style={{ marginTop: "10px" }}>
								<strong style={{ display: "block", marginBottom: "4px" }}>Notes:</strong>
								<span style={{ marginLeft: "10px" }}>{remark || "N/A"}</span>
							</p>
						</div>

						<div>
							<strong>Payment Summary:</strong>
							{stall_payment_summary ? (
								<div style={{ marginLeft: "10px", fontSize: "0.9em" }}>
									<p>Subtotal: ${Number(stall_payment_summary.sub_total).toFixed(2)}</p>
									<p>
										<strong>
											Final Total: ${Number(stall_payment_summary.final_total).toFixed(2)}
										</strong>
									</p>
									<p style={{ marginTop: "8px" }}>
										Stripe Fee Belongs To:{" "}
										{stall_payment_summary.stripe_fee_belong === 1 ? "Platform" : "Organizer"}
									</p>
									<p>
										Total Fee Collected (by Platform): $
										{Number(stall_payment_summary.total_fee).toFixed(2)}
									</p>

									<div
										style={{ marginTop: "10px", paddingLeft: "5px", borderLeft: "2px solid #eee" }}
									>
										<strong>Stripe Fee Details:</strong>
										<p style={{ marginLeft: "10px" }}>
											- Billing Percentage:{" "}
											{stall_payment_summary.stripe_fee?.billing_percentage || 0}%
										</p>
										<p style={{ marginLeft: "10px" }}>
											- Fixed Dollar: $
											{Number(stall_payment_summary.stripe_fee?.fixed_dollar).toFixed(2)}
										</p>
										<p style={{ marginLeft: "10px" }}>
											- Percentage: {stall_payment_summary.stripe_fee?.percentage || 0}%
										</p>
										<p style={{ marginLeft: "10px" }}>
											- Total Stripe Fee: $
											{Number(stall_payment_summary.stripe_fee?.total_amount).toFixed(2)}
										</p>
									</div>

									<div
										style={{ marginTop: "10px", paddingLeft: "5px", borderLeft: "2px solid #eee" }}
									>
										<strong>VendPopups Commission:</strong>
										<p style={{ marginLeft: "10px" }}>
											- Percentage: {stall_payment_summary.vendpopups_commission?.percentage || 0}
											%
										</p>
										{/* Assuming fixed_amount might not always be present in your example, so guard it */}
										{stall_payment_summary.vendpopups_commission?.fixed_amount !== undefined && (
											<p style={{ marginLeft: "10px" }}>
												- Fixed Amount: $
												{Number(
													stall_payment_summary.vendpopups_commission.fixed_amount
												).toFixed(2)}
											</p>
										)}
										<p style={{ marginLeft: "10px" }}>
											- Total Commission: $
											{Number(stall_payment_summary.vendpopups_commission?.total_amount).toFixed(
												2
											)}
										</p>
									</div>
								</div>
							) : (
								"N/A"
							)}
						</div>
					</div>
				</div>
			);
		}
		return null; // Or a different view for other transaction types
	};

	return (
		<div>
			<BaseIndex title="All Platform Transactions">
				<Typography.Paragraph type="secondary" style={{ marginBottom: "16px" }}>
					This page provides a comprehensive log of all financial activities that occur on the VendPopups
					platform. Each row represents a distinct financial event. You can see three main types of
					transactions here:
					<br />- <strong>Application Fee:</strong> This is the $2 fee a vendor pays when they initially apply
					to participate in an event.
					<br />- <strong>Stall Payment:</strong> After a vendor's application is approved, this is the
					payment they make for their stall. You can click the arrow (or anywhere on the row) for these
					entries to expand them and see a detailed breakdown, including the base ticket price, any add-ons,
					Stripe processing fees, and the commission earned by VendPopups.
					<br />- <strong>Refund:</strong> This entry appears when a stall payment made by a vendor has been
					refunded.
					<br />
					The table shows key details like the event name, vendor name, transaction amount, status, and
					date/time for quick reference.
				</Typography.Paragraph>
				<BaseSearch
					title="Search Transactions"
					submitFun={() => {
						if (actionRef.current && actionRef.current.reload) {
							return actionRef.current.reload();
						}
						return Promise.resolve();
					}}
					inputProps={{
						value: searchKey,
						onChange: ({ currentTarget: { value } }) => setSearchKey(value),
					}}
				/>
				<BaseTable<UnifiedTransaction>
					searchKey={searchKey}
					props={{
						headerTitle: "Transaction List",
						actionRef: actionRef,
						rowKey: (record) => record._id,
						columns: AllTransactionsTableColumns({
							mainTableReload: undefined,
						}),
						expandable: {
							expandedRowRender,
							rowExpandable: (record) => record.transaction_type === "STALL_PAYMENT",
							expandedRowKeys: expandedKeys,
							onExpand: (expanded, record) => {
								const newExpandedKeys = expanded
									? [...expandedKeys, record._id]
									: expandedKeys.filter((key) => key !== record._id);
								setExpandedKeys(newExpandedKeys);
							},
						},
						pagination: {
							pageSize: 50,
						},
						onRow: (record: UnifiedTransaction) => {
							return {
								onClick: () => {
									if (record.transaction_type === "STALL_PAYMENT") {
										const newExpandedKeys = expandedKeys.includes(record._id)
											? expandedKeys.filter((key) => key !== record._id)
											: [...expandedKeys, record._id];
										setExpandedKeys(newExpandedKeys);
									}
								},
								style: {
									cursor: record.transaction_type === "STALL_PAYMENT" ? "pointer" : "default",
								},
							};
						},
						request: async (params) => {
							try {
								const [appResponse, refundResponse] = await Promise.all([
									_getAllApplicationsForAdmin(),
									_getAllRefund(),
								]);

								console.log("Debug: appResponse structure:", appResponse);
								console.log("Debug: appResponse.data details:", appResponse.data);
								console.log("Debug: refundResponse structure:", refundResponse);

								let combinedTransactions: UnifiedTransaction[] = [];

								const processApplicationData = (apps: API_APPLICATION.Application[]) => {
									apps.forEach((app: API_APPLICATION.Application) => {
										if (app.application_fee_status === "Paid") {
											combinedTransactions.push({
												_id: `app_fee_${app._id}`,
												transaction_type: "APPLICATION_FEE",
												event_name: app.event_name,
												tenant_name: app.tenant_name,
												amount: 2,
												status: app.application_fee_status,
												dateTime: app.createdAt,
												original_application: app,
												application_id: app._id,
												application_fee_status: app.application_fee_status,
												stall_payment_status: app.stall_payment_status,
											});
										}
										if (
											app.stall_payment_status === "Paid" ||
											app.stall_payment_status === "Refunded"
										) {
											combinedTransactions.push({
												_id: `stall_pay_${app._id}`,
												transaction_type: "STALL_PAYMENT",
												event_name: app.event_name,
												tenant_name: app.tenant_name,
												amount: app.stall_payment_summary?.final_total,
												status: app.stall_payment_status,
												dateTime: app.transaction_summary?.completed_dateTime || app.updatedAt,
												original_application: app,
												application_id: app._id,
												application_fee_status: app.application_fee_status,
												stall_payment_status: app.stall_payment_status,
											});
										}
									});
								};

								if (appResponse && appResponse.data) {
									if (Array.isArray(appResponse.data)) {
										processApplicationData(appResponse.data as API_APPLICATION.Application[]);
									} else if (
										(appResponse.data as { applications?: API_APPLICATION.Application[] })
											.applications &&
										Array.isArray(
											(appResponse.data as { applications: API_APPLICATION.Application[] })
												.applications
										)
									) {
										processApplicationData(
											(appResponse.data as { applications: API_APPLICATION.Application[] })
												.applications
										);
									} else {
										console.warn(
											"appResponse.data is not in expected format (array or {applications: array}):",
											appResponse.data
										);
									}
								}

								if (refundResponse && Array.isArray(refundResponse)) {
									refundResponse.forEach((refund: API_APPLICATION.Refund) => {
										combinedTransactions.push({
											_id: refund._id,
											transaction_type: "REFUND",
											event_name: refund.application?.event_name,
											tenant_name: (refund.application as any)?.tenant_business_name,
											amount: refund.refunded_amount,
											status: refund.is_confirm_refunded ? "Confirmed" : "Pending",
											dateTime: refund.refunded_datetime,
											original_refund: refund,
											application_id: refund.application_id,
											is_confirm_refunded: refund.is_confirm_refunded,
										});
									});
								}

								// Sort by dateTime in descending order (newest first)
								combinedTransactions.sort((a, b) => {
									const dateA = a.dateTime ? new Date(a.dateTime).getTime() : 0;
									const dateB = b.dateTime ? new Date(b.dateTime).getTime() : 0;
									return dateB - dateA;
								});

								let searchedData = combinedTransactions;
								if (searchKey) {
									searchedData = Helper<UnifiedTransaction>({
										dataSource: combinedTransactions,
										keyWord: searchKey,
									}) as UnifiedTransaction[];
								}

								return {
									success: true,
									data: searchedData,
									total: searchedData.length,
								};
							} catch (error) {
								console.error("Error fetching transaction data:", error);
								return {
									success: false,
									data: [],
									total: 0,
								};
							}
						},
					}}
				/>
			</BaseIndex>
		</div>
	);
}
