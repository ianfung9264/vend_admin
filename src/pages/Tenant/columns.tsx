import { ProColumns } from "@ant-design/pro-components";
import { Divider } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";

export function TenantTableColumns({
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<Page_tenant.mainTable>[] {
  // console.log("mainTableReload", mainTableReload);
  // const [tableReload, setTableReload] = useState(() => mainTableReload);

  // useEffect(() => {
  //   setTableReload(() => mainTableReload);
  // }, [mainTableReload]);
  return [
    {
      title: "First Name",
      dataIndex: "firstname", // 根据您提供的数据结构
      key: "firstname",
      align: "center",
    },
    {
      title: "Last Name",
      dataIndex: "lastname", // 根据您提供的数据结构
      key: "lastname",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Joined Events Count",
      dataIndex: "joined_events_count",
      key: "joined_events_count",
      align: "center",
    },
    {
      title: "Be Followers Count",
      dataIndex: "be_followed_count", // 根据您提供的数据结构
      key: "be_followed_count",
      align: "center",
    },

    {
      title: "Account Status",
      dataIndex: "otpStatus",
      key: "otpStatus",
      valueType: "select",
      valueEnum: OtpStatusType,
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <span>
          <DetailModal initData={record} mainTableReload={mainTableReload} />
        </span>
      ),
      align: "center",
    },
  ];
}
