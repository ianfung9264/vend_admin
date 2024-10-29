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
      title: "Event id",
      dataIndex: "application.event_id",
      key: "landowner",
      render: (_, record) => {
        return record.application ? record.application?.event_id : null;
      },
      align: "center",
    },
    {
      title: "Application id",
      dataIndex: "application_id",
      key: "application_id",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "refunded_amount",
      key: "amount",
      align: "center",
    },

    {
      title: "Currency",
      dataIndex: "refunded_currency",
      key: "currency",
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

    {
      title: "_id",
      dataIndex: "event_idCount",
      key: "_id",
      align: "center",
      hidden: true,
    },
  ];
}
