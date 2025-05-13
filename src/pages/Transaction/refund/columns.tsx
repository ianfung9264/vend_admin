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
			title: "Transaction ID",
			dataIndex: ["application", "_id"],
			key: "transaction_id",
			align: "center",
			sorter: (a, b) => (a.application?._id || "").localeCompare(b.application?._id || ""),
		},
		{
			title: "Event Name",
			dataIndex: ["application", "event_name"],
			key: "event_name",
			align: "center",
			sorter: (a, b) => (a.application?.event_name || "").localeCompare(b.application?.event_name || ""),
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
					return "No refund policy";
				}

				// Check if it's a single empty policy
				const hasEmptyPolicy =
					record.application.refund_policy.length === 1 &&
					record.application.refund_policy[0].days === "" &&
					record.application.refund_policy[0].percent === "";

				if (hasEmptyPolicy) {
					return "No refund policy";
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
			sorter: (a, b) =>
				(a.application?.tenant_business_name || "").localeCompare(b.application?.tenant_business_name || ""),
			render: (_, record) => {
				return record.application ? record.application?.tenant_business_name : null;
			},
		},
		{
			title: "Ticket Type",
			key: "ticket_type",
			align: "center",
			sorter: (a, b) =>
				(a.application?.ticket_type?.ticket_type || "").localeCompare(
					b.application?.ticket_type?.ticket_type || ""
				),
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
			sorter: (a, b) => (a.refunded_amount || 0) - (b.refunded_amount || 0),
			render: (text) => (text ? `$${Number(text).toFixed(2)}` : null),
		},
		{
			title: "Progress",
			dataIndex: "is_confirm_refunded",
			key: "is_confirm_refunded",
			align: "center",
			sorter: (a, b) => (a.is_confirm_refunded === b.is_confirm_refunded ? 0 : a.is_confirm_refunded ? 1 : -1),
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
			sorter: (a, b) =>
				new Date(a.refunded_datetime || 0).getTime() - new Date(b.refunded_datetime || 0).getTime(),
			valueType: "dateTime",
		},
	];
}
