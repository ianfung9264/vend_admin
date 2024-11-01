import { StrictVerifyButton } from "@/components/Base/StrictVerifyButton";
import { EventStatus, EventType } from "@/services/commonType";
import { _stopEvent, _restartEvent, _cancelEvent } from "@/services/event/info";
import {
  PauseOutlined,
  PlayCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { ProColumns, ProFormList } from "@ant-design/pro-components";
import { Button, Tooltip } from "antd";
import { StrictMode } from "react";
import { readonly } from "vue";

export function EventTableColumns({
  mainTableReload,
  // setSchedule,
}: {
  mainTableReload: (() => Promise<void>) | undefined;
  // setSchedule: (schedule: API_EVENT.EventSchedule[]) => void;
}): ProColumns<API_EVENT.Event>[] {
  return [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      ellipsis: true,
      copyable: true,
    },
    {
      title: "Creator id",
      dataIndex: "creator",
      key: "creator",
      align: "center",
      ellipsis: true,
      copyable: true,
    },
    {
      title: "Participants count",
      dataIndex: "participants",
      key: "participants",
      render: (text) => ((text as any) ? (text as any).length : 0),
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${Number(text).toFixed(2)}`, // 格式化为货币
      align: "center",
    },
    {
      title: "Liked Count",
      dataIndex: "liked_count",
      key: "liked_count",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (_, record: API_EVENT.Event) =>
        `${record.location.city}, ${record.location.state}, ${record.location.country}`, // 格式化位置
      align: "center",
    },
    {
      title: "Event Type",
      dataIndex: "type",
      key: "event_type",
      filters: [
        { text: "Multi-day", value: EventType.MULTI },
        { text: "Single-day", value: EventType.SINGLE },
        { text: "Recurring", value: EventType.RECURRING },
      ],
      onFilter: (value, record) => record.type === value, // 过滤逻辑
      valueEnum: {
        [EventType.MULTI]: { text: "Multi-day", color: "blue" },
        [EventType.SINGLE]: { text: "Single-day", color: "cyan" },
        [EventType.RECURRING]: { text: "Recurring", color: "purple" },
      },
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Normal", value: EventStatus.NORMAL },
        { text: "Cancel", value: EventStatus.CANCEL },
        { text: "Suspend", value: EventStatus.SUSPEND },
      ],
      onFilter: (value, record) => record.status === value, // 过滤逻辑
      valueEnum: {
        [EventStatus.NORMAL]: { text: "Normal", status: "Success" },
        [EventStatus.CANCEL]: { text: "Cancel", status: "Error" },
        [EventStatus.SUSPEND]: { text: "Suspend", status: "Warning" },
      },
      align: "center",
    },
    // {
    //   title: "schedule",
    //   dataIndex: "schedule",
    //   key: "schedule",
    //   align: "center",
    //   render: (_, record) => {
    //     console.log("record.schedule", record.schedule);
    //     return <ProFormList name="schedule" dataSource={record.schedule} />;
    //   },
    //   // `${record.schedule.start_date} - ${record.schedule.end_date}`,
    // },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const schedule = record.schedule;
        const latestScheduleItem = schedule.reduce((latest, current) => {
          return new Date(current.start_time) > new Date(latest.end_time)
            ? current
            : latest;
        });

        // 获取当前时间
        const now = new Date();

        // 比较最晚的时间与当前时间
        const canCancelOrStop =
          latestScheduleItem && new Date(latestScheduleItem.start_time) > now;
        return (
          <span className="flex flex-row gap-2 justify-center">
            <StrictVerifyButton
              title={
                record.status == EventStatus.NORMAL
                  ? "Are you sure you want to stop the event?"
                  : "Are you sure you want to start the event?"
              }
              trigger={
                <Button
                  disabled={!canCancelOrStop}
                  type="primary"
                  size="small"
                  icon={
                    record.status == EventStatus.NORMAL ? (
                      <Tooltip title="Click to stop the event">
                        <PauseOutlined />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Click to stop the event">
                        <PlayCircleOutlined />
                      </Tooltip>
                    )
                  }
                ></Button>
              }
              initData={{
                mainTableReload,
                actionFuncParams: {
                  event_id: record._id,
                },
                actionFunc:
                  record.status == EventStatus.NORMAL
                    ? _stopEvent
                    : _restartEvent,
              }}
            />
            <StrictVerifyButton
              title={"Are you sure you want to cancel the event?"}
              trigger={
                <Button
                  size="small"
                  type="primary"
                  icon={<StopOutlined />}
                  disabled={
                    record.status == EventStatus.CANCEL || !canCancelOrStop
                  }
                />
              }
              initData={{
                mainTableReload,
                actionFuncParams: { event_id: record._id },
                actionFunc: _cancelEvent,
              }}
            />

            {/* <DetailModal initData={record} mainTableReload={mainTableReload} /> */}
          </span>
        );
      },
      align: "center",
    },
  ];
}

export function EventScheduleTableColumns({
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<API_EVENT.Event>[] {
  return [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      ellipsis: true,
      copyable: true,
    },
    {
      title: "Creator id",
      dataIndex: "creator",
      key: "creator",
      align: "center",
      ellipsis: true,
      copyable: true,
    },
  ];
}
