import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined } from "@ant-design/icons";

export function OrgTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<Page_org.mainTable>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);
	return [
		{
			title: "Business Name",
			dataIndex: "business_name",
			key: "business_name",
			align: "center",
		},
		{
			title: "Full Business Name",
			dataIndex: "business_full_name",
			key: "business_full_name",
			align: "center",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			align: "center",
		},
		{
			title: "Wallet Balance",
			dataIndex: "wallet",
			key: "wallet",
			render: (text) => `$${Number(text)?.toFixed(2)}`, // Format as currency
			align: "center",
		},
		{
			title: "Event Count",
			dataIndex: "eventCount",
			key: "eventCount",
			align: "center",
		},
		{
			title: "Followers Count",
			dataIndex: "be_followed_count",
			key: "be_followed_count",
			align: "center",
		},
		{
			title: "Type",
			dataIndex: "advanced_status",
			key: "advanced_status",
			valueType: "select",
			valueEnum: {
				0: { text: "Unverified", status: "Default" },
				2: { text: "Verified", status: "Success" },
			},
			align: "center",
		},
		{
			title: "Actions",
			dataIndex: "action",
			key: "action",
			render: (_, record) => (
				<span>
					{record.advanced_status !== LandownerAdvancedStatus.APPROVED ? (
						<Tooltip title="Account is not approved yet">
							<Button type="text" disabled icon={<InfoCircleOutlined />} />
						</Tooltip>
					) : (
						<DetailModal initData={record} mainTableReload={mainTableReload} />
					)}
				</span>
			),
			align: "center",
		},
	];
}
