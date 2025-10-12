import { StrictVerifyButton } from "@/components/Base/StrictVerifyButton";
import {
  EventStatus,
  EventType,
  LandownerAdvancedStatus,
} from "@/services/commonType";
import { _stopEvent, _restartEvent, _cancelEvent } from "@/services/event/info";
import {
  CloseOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { ProColumns, ProFormList } from "@ant-design/pro-components";
import { Button, Tooltip, message } from "antd";
import React, { StrictMode, useEffect, useState } from "react";
import { readonly } from "vue";
import DetailModal from "./detailModal";
import { _refundAllVendorFromOrgWallet } from "@/services/event/info";
import VendorDetailModal from "./vendorDetailModal";
import dayjs from "dayjs";
import { _getOrgById } from "@/services/org/info";

// Resolve timezone from event location (US-focused fallback), used for date display
const US_STATE_TO_TZ: Record<string, string> = {
  AL: "America/Chicago",
  AK: "America/Anchorage",
  AZ: "America/Phoenix",
  AR: "America/Chicago",
  CA: "America/Los_Angeles",
  CO: "America/Denver",
  CT: "America/New_York",
  DE: "America/New_York",
  FL: "America/New_York",
  GA: "America/New_York",
  HI: "Pacific/Honolulu",
  IA: "America/Chicago",
  ID: "America/Denver",
  IL: "America/Chicago",
  IN: "America/New_York",
  KS: "America/Chicago",
  KY: "America/New_York",
  LA: "America/Chicago",
  ME: "America/New_York",
  MD: "America/New_York",
  MA: "America/New_York",
  MI: "America/Detroit",
  MN: "America/Chicago",
  MS: "America/Chicago",
  MO: "America/Chicago",
  MT: "America/Denver",
  NE: "America/Chicago",
  NV: "America/Los_Angeles",
  NH: "America/New_York",
  NJ: "America/New_York",
  NM: "America/Denver",
  NY: "America/New_York",
  NC: "America/New_York",
  ND: "America/Chicago",
  OH: "America/New_York",
  OK: "America/Chicago",
  OR: "America/Los_Angeles",
  PA: "America/New_York",
  RI: "America/New_York",
  SC: "America/New_York",
  SD: "America/Chicago",
  TN: "America/Chicago",
  TX: "America/Chicago",
  UT: "America/Denver",
  VT: "America/New_York",
  VA: "America/New_York",
  WA: "America/Los_Angeles",
  WV: "America/New_York",
  WI: "America/Chicago",
  WY: "America/Denver",
  DC: "America/New_York",
};

const US_STATE_NAME_TO_CODE: Record<string, string> = {
  ALABAMA: "AL",
  ALASKA: "AK",
  ARIZONA: "AZ",
  ARKANSAS: "AR",
  CALIFORNIA: "CA",
  COLORADO: "CO",
  CONNECTICUT: "CT",
  DELAWARE: "DE",
  FLORIDA: "FL",
  GEORGIA: "GA",
  HAWAII: "HI",
  IDAHO: "ID",
  ILLINOIS: "IL",
  INDIANA: "IN",
  IOWA: "IA",
  KANSAS: "KS",
  KENTUCKY: "KY",
  LOUISIANA: "LA",
  MAINE: "ME",
  MARYLAND: "MD",
  MASSACHUSETTS: "MA",
  MICHIGAN: "MI",
  MINNESOTA: "MN",
  MISSISSIPPI: "MS",
  MISSOURI: "MO",
  MONTANA: "MT",
  NEBRASKA: "NE",
  NEVADA: "NV",
  "NEW HAMPSHIRE": "NH",
  "NEW JERSEY": "NJ",
  "NEW MEXICO": "NM",
  "NEW YORK": "NY",
  "NORTH CAROLINA": "NC",
  "NORTH DAKOTA": "ND",
  OHIO: "OH",
  OKLAHOMA: "OK",
  OREGON: "OR",
  PENNSYLVANIA: "PA",
  "RHODE ISLAND": "RI",
  "SOUTH CAROLINA": "SC",
  "SOUTH DAKOTA": "SD",
  TENNESSEE: "TN",
  TEXAS: "TX",
  UTAH: "UT",
  VERMONT: "VT",
  VIRGINIA: "VA",
  WASHINGTON: "WA",
  "WEST VIRGINIA": "WV",
  WISCONSIN: "WI",
  WYOMING: "WY",
  "DISTRICT OF COLUMBIA": "DC",
};

function resolveTimezoneFromLocationFallback(location?: {
  state?: string;
  country?: string;
} | null): string | null {
  if (!location) return null;
  const countryRaw = String(location.country || "").trim().toLowerCase();
  const stateRaw = String(location.state || "").trim();
  const stateUpper = stateRaw.toUpperCase();
  const isUs =
    countryRaw === "us" ||
    countryRaw === "usa" ||
    countryRaw === "united states" ||
    countryRaw === "united states of america" ||
    (!countryRaw && !!stateRaw);
  if (isUs) {
    const code = US_STATE_TO_TZ[stateUpper] ? stateUpper : US_STATE_NAME_TO_CODE[stateUpper];
    if (code && US_STATE_TO_TZ[code]) return US_STATE_TO_TZ[code];
  }
  return null;
}

const organizerCache: Record<string, { _id: string; business_name?: string }> =
  {};

function OrganizerCell({ creator }: { creator: any }) {
  const [name, setName] = useState<string>("");
  const organizerId = typeof creator === "string" ? creator : creator?._id;

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!organizerId) return;
      if (organizerCache[organizerId]) {
        if (mounted) setName(organizerCache[organizerId].business_name || "");
        return;
      }
      try {
        const res = await _getOrgById(organizerId);
        if (res?.data) {
          organizerCache[organizerId] = {
            _id: res.data._id,
            business_name: res.data.business_name,
          };
          if (mounted) setName(res.data.business_name || "");
        }
      } catch (e) {
        // ignore
      }
    };
    // If creator already contains name, prefer it
    if (typeof creator === "object" && creator?.business_name) {
      setName(creator.business_name);
      if (organizerId)
        organizerCache[organizerId] = {
          _id: organizerId,
          business_name: creator.business_name,
        };
      return;
    }
    load();
    return () => {
      mounted = false;
    };
  }, [creator, organizerId]);

  if (!organizerId) return <span>N/A</span>;
  if (!name)
    return (
      <a
        href={`https://vendpopups.com/organizer/${organizerId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Organizer
      </a>
    );
  return (
    <a
      href={`https://vendpopups.com/organizer/${organizerId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}

export function EventTableColumns({
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
      render: (text, record: API_EVENT.Event) => (
        <a
          href={`https://vendpopups.com/event/${record._id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ),
    },
    // {
    //   title: "Creator id",
    //   dataIndex: "creator",
    //   key: "creator",
    //   align: "center",
    //   ellipsis: true,
    //   copyable: true,
    // },

    // {
    // 	title: "Event Customer Admission Price",
    // 	dataIndex: "price",
    // 	key: "price",
    // 	render: (text) => `$${Number(text).toFixed(2)}`, // 格式化为货币
    // 	align: "center",
    // },
    // {
    // 	title: "Liked Count",
    // 	dataIndex: "liked_count",
    // 	key: "liked_count",
    // 	align: "center",
    // },
    // {
    // 	title: "Location",
    // 	dataIndex: "location",
    // 	key: "location",
    // 	render: (_, record: API_EVENT.Event) =>
    // 		`${record.location.city}, ${record.location.state}, ${record.location.country}`, // 格式化位置
    // 	align: "center",
    // },
    // {
    // 	title: "Event Type",
    // 	dataIndex: "type",
    // 	key: "event_type",
    // 	filters: [
    // 		{ text: "Multi-day", value: EventType.MULTI },
    // 		{ text: "Single-day", value: EventType.SINGLE },
    // 		{ text: "Recurring", value: EventType.RECURRING },
    // 		{ text: "full-series", value: EventType.FULL_SERIES },
    // 	],
    // 	onFilter: (value, record) => record.type === value,
    // 	valueEnum: {
    // 		[EventType.MULTI]: { text: "Multi-day", color: "blue" },
    // 		[EventType.SINGLE]: { text: "Single-day", color: "cyan" },
    // 		[EventType.RECURRING]: { text: "Recurring", color: "purple" },
    // 		[EventType.FULL_SERIES]: { text: "Full-series", color: "yellow" },
    // 	},
    // 	align: "center",
    // },
    // {
    // 	title: "Status",
    // 	dataIndex: "status",
    // 	key: "status",
    // 	filters: [
    // 		{ text: "Normal", value: EventStatus.NORMAL },
    // 		{ text: "Cancel", value: EventStatus.CANCEL },
    // 		{ text: "Suspend", value: EventStatus.SUSPEND },
    // 	],
    // 	onFilter: (value, record) => record.status === value, // 过滤逻辑
    // 	valueEnum: {
    // 		[EventStatus.NORMAL]: { text: "Normal", status: "Success" },
    // 		[EventStatus.CANCEL]: { text: "Cancel", status: "Error" },
    // 		[EventStatus.SUSPEND]: { text: "Suspend", status: "Warning" },
    // 	},
    // 	align: "center",
    // },
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
      title: "Date",
      dataIndex: "schedule",
      key: "date",
      align: "center",
      defaultSortOrder: "descend",
      render: (_: any, record: API_EVENT.Event) => {
        const start = (record as any)?.schedule?.[0]?.start_time;
        const loc = (record as any)?.location;
        if (!start) return "N/A";
        try {
          const tz = resolveTimezoneFromLocationFallback(loc);
          const d = new Date(start);
          if (tz) {
            // Format date-only in event timezone
            return d.toLocaleDateString(undefined, { timeZone: tz });
          }
          // Fallback to machine local
          return d.toLocaleDateString();
        } catch {
          return new Date(start).toLocaleDateString();
        }
      },
      sorter: (a: API_EVENT.Event, b: API_EVENT.Event) => {
        const dateA =
          a.schedule && a.schedule.length > 0 && a.schedule[0].start_time
            ? dayjs(a.schedule[0].start_time)
            : dayjs(0);
        const dateB =
          b.schedule && b.schedule.length > 0 && b.schedule[0].start_time
            ? dayjs(b.schedule[0].start_time)
            : dayjs(0);
        return dateA.valueOf() - dateB.valueOf();
      },
    },
    {
      title: "Organizer",
      dataIndex: "creator",
      key: "organizer",
      align: "center",
      ellipsis: true,
      render: (_: any, record: API_EVENT.Event) => (
        <OrganizerCell creator={(record as any).creator} />
      ),
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const schedule = record.schedule;
        const now = dayjs();
        let canCancelOrStop = false;

        if (schedule && schedule.length > 0) {
          const validEndTimes = schedule
            .map((s) => {
              if (s.end_time) {
                const endTimeDayjs = dayjs(s.end_time);
                return endTimeDayjs.isValid() ? endTimeDayjs : null;
              }
              return null;
            })
            .filter((d): d is dayjs.Dayjs => d !== null);

          if (validEndTimes.length > 0) {
            const latestEndTime = validEndTimes.reduce((latest, current) => {
              return current.isAfter(latest) ? current : latest;
            }, validEndTimes[0]);

            const cutOffDate = latestEndTime.add(3, "day");

            canCancelOrStop = now.isBefore(cutOffDate);
          }
        }
        return (
          <span className="flex flex-row gap-2 justify-center">
            <StrictVerifyButton
              title={
                record.status == EventStatus.NORMAL
                  ? "Are you sure you want to hide the event?"
                  : "Are you sure you want to show the event?"
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
                      <Tooltip title="Click to restart the event">
                        <PlayCircleOutlined />
                      </Tooltip>
                    )
                  }
                ></Button>
              }
              {...(record.status == EventStatus.NORMAL && {
                reasonInputLabel: "Reason for stopping",
              })}
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
              title={"Are you sure you want to refund all the vendors?"}
              trigger={
                <Button
                  disabled={!canCancelOrStop}
                  type="primary"
                  size="small"
                  icon={
                    <Tooltip title="Click to refund all the vendors">
                      <CloseOutlined />
                    </Tooltip>
                  }
                ></Button>
              }
              initData={{
                mainTableReload,
                actionFuncParams: {
                  event_id: record._id,
                  participants:
                    record.participants?.filter(
                      (p: any) => p.stall_payment_status === "Paid"
                    ) || [],
                },
                actionFunc: async (params: {
                  event_id: string;
                  participants: any[];
                }) => {
                  try {
                    // Prepare the refund list
                    const refundList = params.participants
                      .filter(
                        (p) =>
                          p.stall_payment_status === "Paid" &&
                          p.ticket_type_applied
                      )
                      .map((p) => ({
                        id: p.application_id,
                        amount: p.ticket_type_applied.amount,
                      }));

                    if (refundList.length > 0) {
                      message.loading({
                        content: `Processing refunds for ${refundList.length} vendors...`,
                        key: "refundProgress",
                        duration: 0,
                      });

                      try {
                        const creatorId =
                          typeof (record as any).creator === "string"
                            ? (record as any).creator
                            : (record as any).creator?._id;
                        await _refundAllVendorFromOrgWallet(
                          creatorId,
                          refundList
                        );
                        message.success({
                          content: `Successfully processed refunds for ${refundList.length} vendors. All payment intents have been created.`,
                          key: "refundProgress",
                        });
                      } catch (error) {
                        message.error({
                          content:
                            "Error during refund process. Please try again.",
                          key: "refundProgress",
                        });
                        throw error;
                      }
                    } else {
                      message.info({
                        content: "No vendors to refund",
                        key: "refundProgress",
                      });
                    }

                    return { success: true };
                  } catch (error) {
                    message.error({
                      content: "Error during refund process. Please try again.",
                      key: "refundProgress",
                    });
                    console.error("Error during refund process:", error);
                    throw error;
                  }
                },
              }}
            />
            {/* <StrictVerifyButton
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
            /> */}

            {/* <DetailModal initData={record} mainTableReload={mainTableReload} /> */}
          </span>
        );
      },
      align: "center",
    },
    {
      title: "View Event Detail",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <span>
          <DetailModal initData={record} mainTableReload={mainTableReload} />
        </span>
      ),
      align: "center",
    },
    {
      title: "View Vendors Detail",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <span>
          <VendorDetailModal
            initData={record}
            mainTableReload={mainTableReload}
          />
        </span>
      ),
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
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      defaultSortOrder: "descend",
      render: (_: any, record: API_EVENT.Event) => {
        if (
          record.schedule &&
          record.schedule.length > 0 &&
          record.schedule[0].start_time
        ) {
          return new Date(record.schedule[0].start_time).toLocaleDateString();
        }
        return "";
      },
    },
  ];
}
