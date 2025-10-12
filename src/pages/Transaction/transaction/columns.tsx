import { ProColumns } from "@ant-design/pro-components";
import React from "react";
import { Tooltip } from "antd";
// import DetailModal from "./detailModal";
// import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined } from "@ant-design/icons";
import { UnifiedTransaction } from ".";
import EventDetailModal from "@/pages/Event/detailModal";
import TenantDetailModal from "@/pages/Tenant/detailModal";

export function AllTransactionsTableColumns({
	mainTableReload,
}: {
	mainTableReload?: (() => Promise<void>) | undefined;
}): ProColumns<UnifiedTransaction>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);
	return [
		{
			title: "Transaction ID",
			dataIndex: "_id",
			key: "transaction_id",
			align: "center",
			sorter: (a, b) => (a._id || "").localeCompare(b._id || ""),
			ellipsis: true,
		},
		{
			title: "Transaction Type",
			dataIndex: "transaction_type",
			key: "transaction_type",
			align: "center",
			sorter: (a, b) => (a.transaction_type || "").localeCompare(b.transaction_type || ""),
			valueEnum: {
				APPLICATION_FEE: { text: "Application Fee" },
				STALL_PAYMENT: { text: "Stall Payment" },
				REFUND: { text: "Refund" },
			},
		},
		{
			title: "Event Name",
			dataIndex: "event_name",
			key: "event_name",
			align: "center",
			sorter: (a, b) => (a.event_name || "").localeCompare(b.event_name || ""),
			ellipsis: true,
			render: (_, record) => {
				const eventId = (record as any)?.original_application?.event_id ||
					(record as any)?.original_refund?.application?.event_id;
				if (!eventId) return record.event_name || "Event";
				return (
					<EventDetailModal
						initData={{ _id: eventId, name: record.event_name }}
						mainTableReload={mainTableReload}
						trigger={<a>{record.event_name || "Event"}</a>}
					/>
				);
			},
		},
		{
			title: "Vendor Name",
			dataIndex: "tenant_name",
			key: "vendor_name",
			align: "center",
			sorter: (a, b) => (a.tenant_name || "").localeCompare(b.tenant_name || ""),
			ellipsis: true,
			render: (_, record) => {
				const tenantId = (record as any)?.original_application?.tenant_id ||
					(record as any)?.original_refund?.application?.tenant_id;
				if (!tenantId) return record.tenant_name || "Vendor";
				return (
					<TenantDetailModal
						initData={{ _id: tenantId, business_name: record.tenant_name }}
						mainTableReload={mainTableReload}
						trigger={<a>{record.tenant_name || "Vendor"}</a>}
					/>
				);
			},
		},
		{
			title: "Vendor Name",
			dataIndex: "tenant_name",
			key: "vendor_name",
			align: "center",
			sorter: (a, b) => (a.tenant_name || "").localeCompare(b.tenant_name || ""),
			ellipsis: true,
		},
		{
			title: "Ticket Type",
			key: "ticket_type",
			align: "center",
			sorter: (a, b) =>
				(a.original_application?.ticket_type?.ticket_type || "").localeCompare(
					b.original_application?.ticket_type?.ticket_type || ""
				),
			render: (_, record) => {
				return record.original_application?.ticket_type?.ticket_type || "N/A";
			},
			ellipsis: true,
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
			align: "center",
			sorter: (a, b) => (a.amount || 0) - (b.amount || 0),
			render: (text) => (typeof text === "number" ? `$${text.toFixed(2)}` : "N/A"),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			align: "center",
			sorter: (a, b) => (a.status || "").localeCompare(b.status || ""),
			valueType: "select",
			valueEnum: {
				Paid: { text: "Paid", status: "Success" },
				Waiting: { text: "Waiting", status: "Processing" },
				Refunded: { text: "Refunded", status: "Default" },
				Pending: { text: "Pending", status: "Warning" },
				Confirmed: { text: "Confirmed", status: "Success" },
				Unpaid: { text: "Unpaid", status: "Error" },
				Failed: { text: "Failed", status: "Error" },
			},
		},
		{
			title: "Date/Time",
			dataIndex: "dateTime",
			key: "transaction_datetime",
			align: "center",
			sorter: (a, b) => new Date(a.dateTime || 0).getTime() - new Date(b.dateTime || 0).getTime(),
			valueType: "dateTime",
		},
	];
}
