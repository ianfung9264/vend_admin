import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined } from "@ant-design/icons";

export function RefundTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<any>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);
	return [
		{
			title: "Event Name",
			dataIndex: ["application", "event_name"],
			key: "event_name",
			align: "center",
			render: (_, record) => {
				return record.application ? record.application?.event_name : null;
			},
		},
		{
			title: "Refund Policy",
			dataIndex: ["application", "refund_policy"],
			key: "refund_policy",
			align: "center",
			render: (_, record) => {
				if (
					!record.application ||
					!record.application.refund_policy ||
					!Array.isArray(record.application.refund_policy)
				) {
					return null;
				}
				return record.application.refund_policy
					.map((policy: { days: string; percent: string }) => `${policy.days} days: ${policy.percent}%`)
					.join(", ");
			},
		},
		{
			title: "Vendor Business Name",
			dataIndex: ["application", "tenant_business_name"],
			key: "vendor_business_name",
			align: "center",
			render: (_, record) => {
				return record.application ? record.application?.tenant_business_name : null;
			},
		},
		{
			title: "Ticket Type",
			key: "ticket_type",
			align: "center",
			render: (_, record) => {
				return record.application && record.application.ticket_type
					? record.application.ticket_type.ticket_type
					: null;
			},
		},
		{
			title: "Amount",
			dataIndex: "refunded_amount",
			key: "amount",
			align: "center",
		},
		{
			title: "Progress",
			dataIndex: "is_confirm_refunded",
			key: "is_confirm_refunded",
			align: "center",
			valueType: "select",
			valueEnum: {
				false: "Pending",
				true: "Confirmed",
			},
		},
		{
			title: "Refunded time",
			dataIndex: "refunded_datetime",
			key: "refunded_datetime",
			align: "center",
			valueType: "dateTime",
		},
	];
}
