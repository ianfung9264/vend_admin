import BaseIndex from "@/components/Base/BaseIndex";
import BaseModel from "@/components/Base/BaseModel";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllTransactionFee } from "@/services/setting/fee";
import {
	_createCategory,
	_getBannerContext,
	_getCategory,
	_getPrivacyPolicy,
	_getTermsCondition,
	_postPrivacyPolicy,
	_postTermsCondition,
	_putPrivacyPolicy,
	_putTermsCondition,
	_updateBannerContext,
	_updateCategory,
} from "@/services/setting/others";
import Helper from "@/util/searchHelper";
import { Liquid, Pie } from "@ant-design/charts";
import { PlusSquareOutlined } from "@ant-design/icons";
import {
	ActionType,
	EditableFormInstance,
	EditableProTable,
	ProCard,
	ProForm,
	ProFormInstance,
	ProFormSelect,
	ProFormText,
	ProFormTextArea,
	StatisticCard,
} from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import { Button, FormInstance, message, Statistic, Typography } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useRef, useState } from "react";

// Define a type for the objects returned by processApplicationFees
interface EventFeeSummary {
	event_id: string;
	event_name: string;
	applications: any[]; // Ideally, replace any with a more specific type for application
	total_fee: number;
	latest_application_date: Date;
}

// Define a type for Commission entries
interface CommissionEntry {
	_id: string;
	application_fee_session_id?: string; // from existing columns
	event_name?: string;
	tenant_name?: string;
	createdAt?: string;
	schedule?: { start_time: string; end_time: string }[];
	stall_payment_summary?: {
		sub_total?: number;
		final_total?: number;
		stripe_fee_belong?: number; // 1 for Platform, 2 for Organizer
		total_fee?: number; // Total collected by platform (Stripe fee + VendPopups commission)
		stripe_fee?: {
			billing_percentage?: number;
			fixed_dollar?: number;
			percentage?: number;
			total_amount?: number;
		};
		vendpopups_commission?: {
			percentage?: number;
			fixed_amount?: number;
			total_amount?: number;
		};
	};
	// Fields for expanded view (from application)
	ticket_type?: {
		ticket_type?: string;
		amount?: number; // This is often total amount including add-ons initially
		questions?: any[];
	};
	add_ons?: {
		add_on_type?: string;
		quantity?: number;
		amount?: string; // Individual add-on total price
	}[];
	remark?: string;
	stall_payment_status?: string; // To potentially use getStatusTag if needed
}

export default function Index() {
	/**********************************狀態管理**********************************/
	const [tab, setTab] = useState("tab1");
	const { refresh: TransactionFeeDataRefresh, loading: isDashboardLoading } = useRequest(_getAllTransactionFee, {
		onSuccess: (res) => {
			console.log("res", res);
			setCommission(res.commission);
			setApplicationFee(res.application_fee_list);
		},
	});

	const actionRef = useRef<ActionType>();
	const feeActionRef = useRef<ActionType>();

	const [commission, setCommission] = useState<any[]>([]);
	const [applicationFee, setApplicationFee] = useState<any[]>([]);

	const [commissionSearchKey, setCommissionSearchKey] = useState("");

	const [transactionFeeSearchKey, setTransactionFeeSearchKey] = useState("");
	useEffect(() => {
		TransactionFeeDataRefresh();
	}, []);
	/**********************************狀態管理**********************************/
	/**********************************組件初始化**********************************/

	const CommissionElement = () => {
		const [expandedCommissionKeys, setExpandedCommissionKeys] = useState<React.Key[]>([]);

		// Calculate total site commission
		const totalSiteCommission = commission.reduce((sum, item: CommissionEntry) => {
			return sum + (item.stall_payment_summary?.vendpopups_commission?.total_amount || 0);
		}, 0);

		const commissionExpandedRowRender = (record: CommissionEntry) => {
			const appData = record; // CommissionEntry is essentially the application record with payment summary
			const { stall_payment_summary, ticket_type, add_ons, remark, stall_payment_status } = appData;

			const addOnsDisplay =
				add_ons && add_ons.length > 0 ? (
					add_ons.map((addon, index: number) => (
						<div key={index} style={{ fontSize: "0.9em", marginLeft: "5px", lineHeight: "1.4" }}>
							- {addon.add_on_type} (x{addon.quantity}) - ${Number(addon.amount).toFixed(2)}
						</div>
					))
				) : (
					<span style={{ fontSize: "0.9em", marginLeft: "5px" }}>No add-ons</span>
				);

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
							{" "}
							{/* Left Column: Application Details */}
							<p>
								<strong style={{ display: "block", marginBottom: "4px" }}>Ticket Type:</strong>
								<span style={{ marginLeft: "10px" }}>
									{ticket_type?.ticket_type || "N/A"} - $
									{baseTicketPrice === 0 && ticket_type?.amount === 0
										? "0.00"
										: baseTicketPrice.toFixed(2)}
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
							{/* You can add status here if getStatusTag is available and stall_payment_status is present */}
							{/* <p><strong style={{ display: "block", marginBottom: "4px" }}>Status:</strong> <span style={{ marginLeft: "10px" }}>{getStatusTag(stall_payment_status)}</span></p> */}
						</div>

						<div>
							{" "}
							{/* Right Column: Payment Summary Details */}
							<strong>Payment Summary:</strong>
							{stall_payment_summary ? (
								<div style={{ marginLeft: "10px", fontSize: "0.9em" }}>
									<p>Subtotal: ${Number(stall_payment_summary.sub_total || 0).toFixed(2)}</p>
									<p>
										<strong>
											Final Total: ${Number(stall_payment_summary.final_total || 0).toFixed(2)}
										</strong>
									</p>
									<p style={{ marginTop: "8px" }}>
										Stripe Fee Belongs To:{" "}
										{stall_payment_summary.stripe_fee_belong === 1
											? "Platform"
											: stall_payment_summary.stripe_fee_belong === 2
												? "Organizer"
												: "N/A"}
									</p>
									<p>
										Total Fee Collected (by Platform): $
										{Number(stall_payment_summary.total_fee || 0).toFixed(2)}
									</p>

									{stall_payment_summary.stripe_fee && (
										<div
											style={{
												marginTop: "10px",
												paddingLeft: "5px",
												borderLeft: "2px solid #eee",
											}}
										>
											<strong>Stripe Fee Details:</strong>
											{stall_payment_summary.stripe_fee.billing_percentage !== undefined && (
												<p style={{ marginLeft: "10px" }}>
													- Billing Percentage:{" "}
													{stall_payment_summary.stripe_fee.billing_percentage}%
												</p>
											)}
											{stall_payment_summary.stripe_fee.fixed_dollar !== undefined && (
												<p style={{ marginLeft: "10px" }}>
													- Fixed Dollar: $
													{Number(stall_payment_summary.stripe_fee.fixed_dollar).toFixed(2)}
												</p>
											)}
											{stall_payment_summary.stripe_fee.percentage !== undefined && (
												<p style={{ marginLeft: "10px" }}>
													- Percentage: {stall_payment_summary.stripe_fee.percentage}%
												</p>
											)}
											<p style={{ marginLeft: "10px" }}>
												- Total Stripe Fee: $
												{Number(stall_payment_summary.stripe_fee.total_amount || 0).toFixed(2)}
											</p>
										</div>
									)}

									{stall_payment_summary.vendpopups_commission && (
										<div
											style={{
												marginTop: "10px",
												paddingLeft: "5px",
												borderLeft: "2px solid #eee",
											}}
										>
											<strong>VendPopups Commission Details:</strong>
											{stall_payment_summary.vendpopups_commission.percentage !== undefined && (
												<p style={{ marginLeft: "10px" }}>
													- Percentage:{" "}
													{stall_payment_summary.vendpopups_commission.percentage}%
												</p>
											)}
											{stall_payment_summary.vendpopups_commission.fixed_amount !== undefined && (
												<p style={{ marginLeft: "10px" }}>
													- Fixed Amount: $
													{Number(
														stall_payment_summary.vendpopups_commission.fixed_amount
													).toFixed(2)}
												</p>
											)}
											<p style={{ marginLeft: "10px" }}>
												- Total Commission (Site Owner): $
												{Number(
													stall_payment_summary.vendpopups_commission.total_amount || 0
												).toFixed(2)}
											</p>
										</div>
									)}
								</div>
							) : (
								"N/A"
							)}
						</div>
					</div>
				</div>
			);
		};

		return (
			<div>
				<ProCard style={{ marginBottom: "16px" }}>
					<StatisticCard
						statistic={{
							title: "Total Site Commission from Stalls",
							value: totalSiteCommission,
							prefix: "$",
							precision: 2,
						}}
					/>
				</ProCard>

				<BaseSearch // Keep search if needed, or remove if table directly uses `commission` state
					title="Search Commissions"
					submitFun={actionRef.current?.reload} // This reload might need adjustment if not using request prop for table
					inputProps={{
						value: commissionSearchKey,
						onChange: ({ currentTarget: { value } }) => setCommissionSearchKey(value),
					}}
				/>
				<BaseTable<CommissionEntry> // Use CommissionEntry type
					searchKey={commissionSearchKey} // Keep if search implemented client-side or if request uses it
					props={{
						headerTitle: "Commission List",
						actionRef: actionRef,
						rowKey: "_id", // Important for expandable rows
						columns: [
							{
								key: "id",
								title: "Application Session Id", // Or Application ID if more relevant
								dataIndex: "application_fee_session_id", // Or _id
								width: "10%",
								align: "center",
								ellipsis: true,
								copyable: true,
							},
							{
								title: "Event Name",
								dataIndex: "event_name",
								width: "12%",
								align: "center",
								ellipsis: true,
							},
							{
								title: "Vendor Name",
								dataIndex: "tenant_name",
								width: "12%",
								align: "center",
								ellipsis: true,
							},
							{
								title: "Stall Subtotal",
								dataIndex: ["stall_payment_summary", "sub_total"],
								align: "center",
								render: (text: any) => (text ? `$${Number(text).toFixed(2)}` : "N/A"),
							},
							{
								title: "Stall Final Total",
								dataIndex: ["stall_payment_summary", "final_total"],
								align: "center",
								render: (text: any) => (text ? `$${Number(text).toFixed(2)}` : "N/A"),
							},
							{
								title: "Platform Fee Collected",
								dataIndex: ["stall_payment_summary", "total_fee"],
								align: "center",
								render: (text: any) => (text ? `$${Number(text).toFixed(2)}` : "N/A"),
							},
							{
								title: "Stripe Fee Component",
								dataIndex: ["stall_payment_summary", "stripe_fee", "total_amount"],
								align: "center",
								render: (text: any) => (text ? `$${Number(text).toFixed(2)}` : "N/A"),
							},
							{
								title: "Stripe Fee Payer",
								dataIndex: ["stall_payment_summary", "stripe_fee_belong"],
								align: "center",
								render: (_, record: CommissionEntry) => {
									const val = record.stall_payment_summary?.stripe_fee_belong;
									return val === 1 ? "Platform" : val === 2 ? "Organizer" : "N/A";
								},
							},
							{
								title: "Site Owner Net Commission",
								dataIndex: ["stall_payment_summary", "vendpopups_commission", "total_amount"],
								key: "site_commission_amount",
								align: "center",
								render: (text: any) => (text ? `$${Number(text).toFixed(2)}` : "N/A"),
							},
							{
								title: "Site Owner Commission %",
								dataIndex: ["stall_payment_summary", "vendpopups_commission", "percentage"],
								key: "site_commission_percentage",
								align: "center",
								render: (text: any) => (text !== undefined ? `${text}%` : "N/A"),
							},
							{
								title: "Transaction Date", // Renamed from Created At for clarity if it's payment date
								dataIndex: "createdAt", // Or a more specific payment date field if available
								align: "center",
								valueType: "dateTime",
							},
						],
						expandable: {
							expandedRowRender: commissionExpandedRowRender,
							rowExpandable: (record: CommissionEntry) => !!record.stall_payment_summary, // Only expand if there's summary
							expandedRowKeys: expandedCommissionKeys,
							onExpand: (expanded, record) => {
								const newExpandedKeys = expanded
									? [...expandedCommissionKeys, record._id]
									: expandedCommissionKeys.filter((key) => key !== record._id);
								setExpandedCommissionKeys(newExpandedKeys);
							},
						},
						// The request prop needs to be adjusted if we are directly using the 'commission' state
						// For now, assuming 'commission' state is populated and search is client-side or via actionRef.reload
						request: async (params) => {
							// params will include pageSize, current, commissionSearchKey
							// Fetch data
							const remoteData = await TransactionFeeDataRefresh(); // This fetches all fee data
							let currentCommissionData: CommissionEntry[] = remoteData.commission || [];

							// Apply search if searchKey is present
							if (commissionSearchKey) {
								currentCommissionData = Helper<CommissionEntry>({
									// Use CommissionEntry
									dataSource: currentCommissionData,
									keyWord: commissionSearchKey,
								}) as CommissionEntry[];
							}

							// Sort by date in descending order (newest first)
							currentCommissionData.sort((a, b) => {
								const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
								const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
								return dateB - dateA;
							});

							return {
								success: true,
								data: currentCommissionData,
								total: currentCommissionData.length,
							};
						},
						// If you want row click to expand:
						onRow: (record: CommissionEntry) => {
							return {
								onClick: () => {
									if (record.stall_payment_summary) {
										// Only if expandable
										const newExpandedKeys = expandedCommissionKeys.includes(record._id)
											? expandedCommissionKeys.filter((key) => key !== record._id)
											: [...expandedCommissionKeys, record._id];
										setExpandedCommissionKeys(newExpandedKeys);
									}
								},
								style: {
									cursor: record.stall_payment_summary ? "pointer" : "default",
								},
							};
						},
					}}
				/>
			</div>
		);
	};
	const TransactionFeeElement = () => {
		// Function to process and group the data
		const processApplicationFees = (data: any[]): EventFeeSummary[] => {
			const groupedData: Record<string, EventFeeSummary> = data.reduce((acc, curr) => {
				const eventId = curr.event_id;
				if (!acc[eventId]) {
					acc[eventId] = {
						event_id: eventId,
						event_name: curr.event_name,
						applications: [],
						total_fee: 0,
						latest_application_date: new Date(0),
					};
				}

				// Add application to the group
				acc[eventId].applications.push(curr);

				// Calculate fee from application fee session (assuming $2 per application for now)
				const applicationFee = 2; // Replace with actual fee calculation if available
				acc[eventId].total_fee += applicationFee;

				// Track the latest application date
				const currentAppDate = new Date(curr.createdAt);
				if (currentAppDate > acc[eventId].latest_application_date) {
					acc[eventId].latest_application_date = currentAppDate;
				}

				return acc;
			}, {});

			return Object.values(groupedData);
		};

		return (
			<div>
				<BaseSearch
					title="Search bar"
					submitFun={feeActionRef.current?.reload}
					inputProps={{
						value: transactionFeeSearchKey,
						onChange: ({ currentTarget: { value } }) => setTransactionFeeSearchKey(value),
					}}
				/>
				<BaseTable<any>
					searchKey={transactionFeeSearchKey}
					props={{
						headerTitle: "Application Fee by Event",
						actionRef: feeActionRef,
						columns: [
							{
								title: "Event Name",
								dataIndex: "event_name",
								width: "20%",
								align: "center",
								ellipsis: true,
							},
							{
								title: "Event ID",
								dataIndex: "event_id",
								width: "20%",
								align: "center",
								ellipsis: true,
								copyable: true,
							},
							{
								title: "Application Count",
								dataIndex: "applications",
								align: "center",
								render: (_, record: EventFeeSummary) => record.applications.length,
							},
							// {
							//   title: "Applications",
							//   dataIndex: "applications",
							//   align: "center",
							//   render: (applications: any[]) => (
							//     <div style={{ textAlign: "left" }}>
							//       {applications.map((app, index) => (
							//         <div
							//           key={app.application_fee_session_id}
							//           style={{ marginBottom: "8px" }}
							//         >
							//           <div>Session ID: {app.application_fee_session_id}</div>
							//           <div>Status: {app.application_fee_status}</div>
							//           <div>
							//             Created: {new Date(app.createdAt).toLocaleString()}
							//           </div>
							//           {index < applications.length - 1 && (
							//             <hr style={{ margin: "8px 0" }} />
							//           )}
							//         </div>
							//       ))}
							//     </div>
							//   ),
							// },
							{
								title: "Total Fee",
								dataIndex: "total_fee",
								align: "center",
								render: (_, record: EventFeeSummary) => `$${record.total_fee.toFixed(2)}`,
							},
							{
								title: "Latest Application",
								dataIndex: "latest_application_date",
								align: "center",
								valueType: "dateTime",
								sorter: (a, b) =>
									new Date(a.latest_application_date).getTime() -
									new Date(b.latest_application_date).getTime(),
							},
						],
						request: async () => {
							const dataSource = await TransactionFeeDataRefresh().then((res) => {
								const processedData = processApplicationFees(res.application_fee_list);
								return {
									success: true,
									data: processedData,
								};
							});

							if (transactionFeeSearchKey) {
								dataSource.data = Helper<EventFeeSummary>({
									dataSource: dataSource.data,
									keyWord: transactionFeeSearchKey,
								}) as EventFeeSummary[];
							}
							return dataSource;
						},
					}}
				/>
			</div>
		);
	};
	const DashboardElement = ({ isLoading }: { isLoading: boolean }) => {
		const config = {
			title: {
				visible: true,
				text: "水波图",
			},
			description: {
				visible: true,
				text: "水波图 - 百分比显示",
			},
			min: 0,
			max: 10000,
			value: 5639,
			// statistic: {
			//   formatter: (value) => ((100 * value) / 10000).toFixed(1) + "%",
			// },
		};
		const totalVendpopupsCommission = commission.reduce((total, item) => {
			// 确保 vendpopups_commission 存在并且有 total_amount 属性
			if (item.stall_payment_summary && item.stall_payment_summary.vendpopups_commission) {
				return total + item.stall_payment_summary.vendpopups_commission.total_amount;
			}
			return total; // 如果没有，返回当前总和
		}, 0);
		const applicationFeeTotalAmount = applicationFee.length * 2;

		const totalAmount = applicationFeeTotalAmount + totalVendpopupsCommission;
		return (
			<ProCard
				title="Dashboard"
				extra={dayjs().format("YYYY-MM-DD HH:mm")}
				split={"horizontal"}
				// headerBordered
				bordered
				loading={isLoading}
			>
				<ProCard split="horizontal">
					<ProCard split="horizontal">
						<ProCard split="vertical">
							<StatisticCard
								loading={isLoading}
								statistic={{
									title: "Application total count",
									value: applicationFee.length,
								}}
							/>
							<StatisticCard
								loading={isLoading}
								statistic={{
									title: "Commission total count",
									value: commission.length,
								}}
							/>
						</ProCard>
						<ProCard split="vertical">
							<StatisticCard
								loading={isLoading}
								statistic={{
									title: "Application total amount",
									value: applicationFeeTotalAmount,
									prefix: "$",
								}}
							/>
							<StatisticCard
								loading={isLoading}
								statistic={{
									title: "Commission total amount",
									value: totalVendpopupsCommission,
									prefix: "$",
								}}
							/>
						</ProCard>
					</ProCard>
					<ProCard>
						<StatisticCard
							loading={isLoading}
							statistic={{
								title: "Total Site Earnings",
								value: totalAmount, // This already sums applicationFeeTotalAmount and totalVendpopupsCommission
								prefix: "$",
								valueStyle: { color: "#1890ff" }, // Optional: make it stand out
							}}
						/>
					</ProCard>
					{/* <ProCard split="vertical">
            <StatisticCard
              title="Application fee percentage"
              chart={
                <Liquid
                  height={400}
                  width={400}
                  label={{
                    visible: true,
                    formatter: (text: any) => {
                      return (
                        Number(
                          (applicationFeeTotalAmount / totalAmount).toFixed(2)
                        ) *
                          100 +
                        "%"
                      );
                    },
                  }}
                  percent={Number(
                    (applicationFeeTotalAmount / totalAmount).toFixed(2)
                  )}
                />
              }
            />
            <StatisticCard
              title="Percentage summary"
              chart={
                <Pie
                  forceFit={true}
                  radius={0.8}
                  angleField="value"
                  colorField="label"
                  label={{
                    visible: true,
                    type: "spider",
                  }}
                  type={"view"}
                  data={[
                    {
                      value:
                        Number(
                          (totalVendpopupsCommission / totalAmount).toFixed(2)
                        ) * 100,
                      label: "Commission",
                    },
                    {
                      value:
                        Number(
                          (applicationFeeTotalAmount / totalAmount).toFixed(2)
                        ) * 100,
                      label: "Application",
                    },
                  ]}
                />
              }
            />
          </ProCard> */}
				</ProCard>
			</ProCard>
		);
	};
	/**********************************組件初始化**********************************/
	/**********************************異步函數**********************************/
	/**********************************異步函數**********************************/
	return (
		<BaseIndex title="Fee & Commission Overview">
			<Typography.Paragraph type="secondary" style={{ marginBottom: "24px" }}>
				This page provides a comprehensive overview of all fees and commissions processed through the VendPopups
				platform. It's designed to give you, the site owner, a clear understanding of revenue generation.
				<br />- The <strong>Dashboard</strong> tab offers a high-level summary: total revenue from $2
				application fees, total commission earned from successful stall payments, and the combined total site
				earnings.
				<br />- The <strong>Commission</strong> tab lists every stall payment that has generated a commission
				for the platform. You can expand each entry to see a detailed financial breakdown, including the
				original stall price, Stripe processing fees, and the net commission earned by VendPopups.
				<br />- The <strong>Application Fee</strong> tab shows a breakdown of the $2 application fees collected,
				grouped by each event. This helps track how many vendors are applying for specific events.
			</Typography.Paragraph>
			<ProCard
				title=""
				headStyle={{ paddingBottom: 24 }}
				style={{ minHeight: "90vh" }}
				tabs={{
					tabPosition: "left",
					activeKey: tab,
					items: [
						{
							label: `Dashboard`,
							key: "dashboard",
							children: DashboardElement({ isLoading: isDashboardLoading }),
						},
						{
							label: `Commission`,
							key: "tab1",

							children: CommissionElement(),
						},
						{
							label: `Application fee`,
							key: "tab2",
							children: TransactionFeeElement(),
						},
					],
					onChange: (key) => {
						setTab(key);
					},
				}}
			/>
		</BaseIndex>
	);
}
//
