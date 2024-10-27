import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined } from "@ant-design/icons";

export function WithdrawalTableColumns({
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
      title: "Landowner email",
      dataIndex: "landowner",
      key: "landowner",
      render: (_, record) => {
        return record.landowner.email;
      },
      align: "center",
    },
    {
      title: "Landowner wallet",
      dataIndex: "landowner",
      key: "landowner",
      render: (_, record) => {
        return record.landowner.wallet;
      },
      align: "center",
    },
    {
      title: "Withdrawal Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      align: "center",
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      align: "center",
    },
    {
      title: "Rejected Reason",
      dataIndex: "rejected_reason",
      key: "wallet",
      align: "center",
    },
    {
      title: "_id",
      dataIndex: "event_idCount",
      key: "_id",
      align: "center",
      hidden: true,
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
