import { StrictVerifyButton } from "@/components/Base/StrictVerifyButton";
import { EventStatus, EventType, LandownerAdvancedStatus } from "@/services/commonType";
import { _stopEvent, _restartEvent, _cancelEvent } from "@/services/event/info";
import { CloseOutlined, PauseOutlined, PlayCircleOutlined, StopOutlined } from "@ant-design/icons";
import { ProColumns, ProFormList } from "@ant-design/pro-components";
import { Button, Tooltip, message } from "antd";
import { StrictMode } from "react";
import { readonly } from "vue";
import DetailModal from "./detailModal";
import { _refundAllVendorFromOrgWallet } from "@/services/event/info";
import VendorDetailModal from "./vendorDetailModal";
import dayjs from "dayjs";

export function EventTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<API_EVENT.Event>[] {
	return [
		{
			title: "Event Name",
			dataIndex: "name",
			key: "name",
			align: "center",
			ellipsis: true,
			copyable: true,
			render: (text, record: API_EVENT.Event) => (
				<a href={`https://vendpopups.com/event/${record._id}`} target="_blank" rel="noopener noreferrer">
					{text}
				</a>
			),
		},
		// {
		//   title: "Creator id",
		//   dataIndex: "creator",
		//   key: "creator",
		//   align: "center",
		//   ellipsis: true,
		//   copyable: true,
		// },

		// {
		// 	title: "Event Customer Admission Price",
		// 	dataIndex: "price",
		// 	key: "price",
		// 	render: (text) => `$${Number(text).toFixed(2)}`, // 格式化为货币
		// 	align: "center",
		// },
		// {
		// 	title: "Liked Count",
		// 	dataIndex: "liked_count",
		// 	key: "liked_count",
		// 	align: "center",
		// },
		// {
		// 	title: "Location",
		// 	dataIndex: "location",
		// 	key: "location",
		// 	render: (_, record: API_EVENT.Event) =>
		// 		`${record.location.city}, ${record.location.state}, ${record.location.country}`, // 格式化位置
		// 	align: "center",
		// },
		// {
		// 	title: "Event Type",
		// 	dataIndex: "type",
		// 	key: "event_type",
		// 	filters: [
		// 		{ text: "Multi-day", value: EventType.MULTI },
		// 		{ text: "Single-day", value: EventType.SINGLE },
		// 		{ text: "Recurring", value: EventType.RECURRING },
		// 		{ text: "full-series", value: EventType.FULL_SERIES },
		// 	],
		// 	onFilter: (value, record) => record.type === value,
		// 	valueEnum: {
		// 		[EventType.MULTI]: { text: "Multi-day", color: "blue" },
		// 		[EventType.SINGLE]: { text: "Single-day", color: "cyan" },
		// 		[EventType.RECURRING]: { text: "Recurring", color: "purple" },
		// 		[EventType.FULL_SERIES]: { text: "Full-series", color: "yellow" },
		// 	},
		// 	align: "center",
		// },
		// {
		// 	title: "Status",
		// 	dataIndex: "status",
		// 	key: "status",
		// 	filters: [
		// 		{ text: "Normal", value: EventStatus.NORMAL },
		// 		{ text: "Cancel", value: EventStatus.CANCEL },
		// 		{ text: "Suspend", value: EventStatus.SUSPEND },
		// 	],
		// 	onFilter: (value, record) => record.status === value, // 过滤逻辑
		// 	valueEnum: {
		// 		[EventStatus.NORMAL]: { text: "Normal", status: "Success" },
		// 		[EventStatus.CANCEL]: { text: "Cancel", status: "Error" },
		// 		[EventStatus.SUSPEND]: { text: "Suspend", status: "Warning" },
		// 	},
		// 	align: "center",
		// },
		// {
		//   title: "schedule",
		//   dataIndex: "schedule",
		//   key: "schedule",
		//   align: "center",
		//   render: (_, record) => {
		//     console.log("record.schedule", record.schedule);
		//     return <ProFormList name="schedule" dataSource={record.schedule} />;
		//   },
		//   // `${record.schedule.start_date} - ${record.schedule.end_date}`,
		// },
		{
			title: "Date",
			dataIndex: "schedule",
			key: "date",
			align: "center",
			defaultSortOrder: "descend",
			render: (_: any, record: API_EVENT.Event) => {
				if (record.schedule && record.schedule.length > 0 && record.schedule[0].start_time) {
					return dayjs(record.schedule[0].start_time).format("YYYY-MM-DD");
				}
				return "N/A";
			},
			sorter: (a: API_EVENT.Event, b: API_EVENT.Event) => {
				const dateA =
					a.schedule && a.schedule.length > 0 && a.schedule[0].start_time
						? dayjs(a.schedule[0].start_time)
						: dayjs(0);
				const dateB =
					b.schedule && b.schedule.length > 0 && b.schedule[0].start_time
						? dayjs(b.schedule[0].start_time)
						: dayjs(0);
				return dateA.valueOf() - dateB.valueOf();
			},
		},
		{
			title: "Actions",
			dataIndex: "action",
			key: "action",
			render: (_, record) => {
				const schedule = record.schedule;
				const now = dayjs();
				let canCancelOrStop = false;

				if (schedule && schedule.length > 0) {
					const validEndTimes = schedule
						.map((s) => {
							if (s.end_time) {
								const endTimeDayjs = dayjs(s.end_time);
								return endTimeDayjs.isValid() ? endTimeDayjs : null;
							}
							return null;
						})
						.filter((d): d is dayjs.Dayjs => d !== null);

					if (validEndTimes.length > 0) {
						const latestEndTime = validEndTimes.reduce((latest, current) => {
							return current.isAfter(latest) ? current : latest;
						}, validEndTimes[0]);

						const cutOffDate = latestEndTime.add(3, "day");

						canCancelOrStop = now.isBefore(cutOffDate);
					}
				}
				return (
					<span className="flex flex-row gap-2 justify-center">
						<StrictVerifyButton
							title={
								record.status == EventStatus.NORMAL
									? "Are you sure you want to hide the event?"
									: "Are you sure you want to show the event?"
							}
							trigger={
								<Button
									disabled={!canCancelOrStop}
									type="primary"
									size="small"
									icon={
										record.status == EventStatus.NORMAL ? (
											<Tooltip title="Click to stop the event">
												<PauseOutlined />
											</Tooltip>
										) : (
											<Tooltip title="Click to restart the event">
												<PlayCircleOutlined />
											</Tooltip>
										)
									}
								></Button>
							}
							{...(record.status == EventStatus.NORMAL && { reasonInputLabel: "Reason for stopping" })}
							initData={{
								mainTableReload,
								actionFuncParams: {
									event_id: record._id,
								},
								actionFunc: record.status == EventStatus.NORMAL ? _stopEvent : _restartEvent,
							}}
						/>

						<StrictVerifyButton
							title={"Are you sure you want to refund all the vendors?"}
							trigger={
								<Button
									disabled={!canCancelOrStop}
									type="primary"
									size="small"
									icon={
										<Tooltip title="Click to refund all the vendors">
											<CloseOutlined />
										</Tooltip>
									}
								></Button>
							}
							initData={{
								mainTableReload,
								actionFuncParams: {
									event_id: record._id,
									participants:
										record.participants?.filter((p: any) => p.stall_payment_status === "Paid") ||
										[],
								},
								actionFunc: async (params: { event_id: string; participants: any[] }) => {
									try {
										// Prepare the refund list
										const refundList = params.participants
											.filter((p) => p.stall_payment_status === "Paid" && p.ticket_type_applied)
											.map((p) => ({
												id: p.application_id,
												amount: p.ticket_type_applied.amount,
											}));

										if (refundList.length > 0) {
											message.loading({
												content: `Processing refunds for ${refundList.length} vendors...`,
												key: "refundProgress",
												duration: 0,
											});

											try {
												await _refundAllVendorFromOrgWallet(record.creator._id, refundList);
												message.success({
													content: `Successfully processed refunds for ${refundList.length} vendors. All payment intents have been created.`,
													key: "refundProgress",
												});
											} catch (error) {
												message.error({
													content: "Error during refund process. Please try again.",
													key: "refundProgress",
												});
												throw error;
											}
										} else {
											message.info({
												content: "No vendors to refund",
												key: "refundProgress",
											});
										}

										return { success: true };
									} catch (error) {
										message.error({
											content: "Error during refund process. Please try again.",
											key: "refundProgress",
										});
										console.error("Error during refund process:", error);
										throw error;
									}
								},
							}}
						/>
						{/* <StrictVerifyButton
              title={"Are you sure you want to cancel the event?"}
              trigger={
                <Button
                  size="small"
                  type="primary"
                  icon={<StopOutlined />}
                  disabled={
                    record.status == EventStatus.CANCEL || !canCancelOrStop
                  }
                />
              }
              initData={{
                mainTableReload,
                actionFuncParams: { event_id: record._id },
                actionFunc: _cancelEvent,
              }}
            /> */}

						{/* <DetailModal initData={record} mainTableReload={mainTableReload} /> */}
					</span>
				);
			},
			align: "center",
		},
		{
			title: "View Event Detail",
			dataIndex: "action",
			key: "action",
			render: (_, record) => (
				<span>
					<DetailModal initData={record} mainTableReload={mainTableReload} />
				</span>
			),
			align: "center",
		},
		{
			title: "View Vendors Detail",
			dataIndex: "action",
			key: "action",
			render: (_, record) => (
				<span>
					<VendorDetailModal initData={record} mainTableReload={mainTableReload} />
				</span>
			),
			align: "center",
		},
	];
}

export function EventScheduleTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<API_EVENT.Event>[] {
	return [
		{
			title: "Event Name",
			dataIndex: "name",
			key: "name",
			align: "center",
			ellipsis: true,
			copyable: true,
		},
		{
			title: "Creator id",
			dataIndex: "creator",
			key: "creator",
			align: "center",
			ellipsis: true,
			copyable: true,
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			align: "center",
			defaultSortOrder: "descend",
			render: (_: any, record: API_EVENT.Event) => {
				if (record.schedule && record.schedule.length > 0 && record.schedule[0].start_time) {
					return new Date(record.schedule[0].start_time).toLocaleDateString();
				}
				return "";
			},
		},
	];
}
