import { ProColumns } from "@ant-design/pro-components";
import { Badge, Divider, Tag } from "antd";

import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";

export function NewsletterTableColumns({
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
      title: "Email",
      dataIndex: "email", // 根据您提供的数据结构
      key: "email",
      align: "center",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      align: "center",
      render: (text) => new Date(text).toLocaleString(),
    },

    // {
    //   title: "Actions",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (_, record) => (
    //     <span>
    //       <DetailModal initData={record} mainTableReload={mainTableReload} />
    //     </span>
    //   ),
    //   align: "center",
    // },
  ];
}
