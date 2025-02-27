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
			title: "id",
			dataIndex: "_id",
			key: "id",
			align: "center",
			hidden: false,
		},
		{
			title: "Event Name",
			dataIndex: ["related_id", "name"],
			key: "event_name",
			align: "center",
		},
		{
			title: "Landowner Business Name",
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
			title: "Wallet Balance",
			dataIndex: ["landowner_id", "wallet"],
			key: "wallet",
			render: (text) => `$${Number(text)?.toFixed(2)}`, // Format as currency
			align: "center",
		},

		{
			title: "Phone",
			dataIndex: ["landowner_id", "phone"],
			key: "phone",
			align: "center",
		},
		{
			title: "Phone prefix",
			dataIndex: ["landowner_id", "phone_pre"],
			key: "phone_prefix",
			align: "center",
		},
		{
			title: "Type",
			dataIndex: "ActionType",
			key: "ActionType",
			valueType: "select",
			valueEnum: UrgentActionType,
			align: "center",
		},
		{
			title: "Status",
			dataIndex: "ActionStatus",
			key: "status",
			valueType: "select",
			valueEnum: UrgentActionStatus,
			align: "center",
		},
		{
			title: "Reason",
			dataIndex: "reason",
			key: "reason",
			ellipsis: {
				showTitle: false, // 禁用默认的 title 提示
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
						Review reasons
					</Button>
					<Drawer
						title="Reason"
						placement="right"
						onClose={() => setDrawerVisible(false)}
						open={drawerVisible}
						width={500}
						styles={{
							mask: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
						}}
					>
						<p style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{currentReason}</p>
					</Drawer>
				</>
			),
			align: "center",
		},
		{
			title: "Actions",
			dataIndex: "action",
			key: "action",
			render: (_, record) => (
				<span>
					{record.landowner_id && (
						<DetailModal
							initData={{
								landownerId: record.landowner_id._id,
								wallet: record.landowner_id.wallet,
								eventId: record.related_id._id,
								eventName: record.related_id.name,
								_id: record._id,
							}}
							mainTableReload={mainTableReload}
						/>
					)}
				</span>
			),
			align: "center",
		},
		// {
		//   title: "Tick",
		//   dataIndex: "action",
		//   key: "action",
		//   render: (_: any, record: { ActionStatus: UrgentActionStatus }) =>
		//     record.ActionStatus === UrgentActionStatus.Waiting ? (
		//       <Button
		//         type="link"
		//         onClick={() => markComplete(record)}
		//         icon={<BellOutlined spin={true} />}
		//       />
		//     ) : (
		//       <Button type="text" icon={<CheckCircleOutlined />} />
		//     ),
		//   align: "center",
		// },
	];
}
