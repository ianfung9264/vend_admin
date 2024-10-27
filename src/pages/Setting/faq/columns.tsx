import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Tooltip } from "antd";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined } from "@ant-design/icons";
import DetailModal from "./detailModal";

export function QuestionTableColumns({
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
      title: "Question",
      dataIndex: "question",
      key: "landowner",
      align: "center",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "isDisplay",
      key: "isDisplay",
      align: "center",
      valueEnum: {
        true: { text: "Show", key: "true" },
        false: { text: "Hidden", key: "false" },
      },
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
