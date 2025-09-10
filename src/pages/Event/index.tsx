import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType, ProCard } from "@ant-design/pro-components";
import { useLocation, useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import Helper from "@/util/searchHelper";
import { Badge, Calendar, Card, message, Typography } from "antd";
import { _getAllEvent, _getBasicEventList } from "@/services/event/info";
import { EventTableColumns } from "./columns";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc); // 使用 UTC 插件

export default function Index() {
  /**********************************狀態管理**********************************/
  const { data, error, loading } = useRequest(_getAllEvent);

  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const location = useLocation();
  const [reload, setReload] = useState(() => actionRef.current?.reload);
  const [currentEventSchedule, setCurrentEventSchedule] = useState<
    API_EVENT.EventSchedule[]
  >([]);
  const [currentEventName, setCurrentEventName] = useState<string>("");
  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);
  // Initialize search from query param ?q=
  useEffect(() => {
    const params = new URLSearchParams(location.search || "");
    const q = params.get("q") || "";
    if (q && q !== searchKey) {
      setSearchKey(q);
      setTimeout(() => actionRef.current?.reload?.(), 0);
    }
  }, [location.search]);
  const [currentRowId, setCurrentRowId] = useState<string | null>(null); // 存储当前被点击的行 ID

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/

  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/

  /**********************************異步函數**********************************/
  return (
    <div>
      <BaseIndex title="Event page">
        {/* <Typography.Text type="secondary">
					Currently cannot edit event as function is being tested. Another patch Will be pushed tomorrow.
					<br />
				</Typography.Text> */}
        <BaseSearch
          title="Search bar"
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: searchKey,
            onChange: ({ currentTarget: { value } }) => setSearchKey(value),
          }}
        />
        <BaseTable<API_EVENT.Event>
          searchKey={searchKey}
          props={{
            headerTitle: "Event List",
            actionRef: actionRef,
            columns: EventTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const [eventResp, orgResp] = await Promise.all([
                _getBasicEventList(),
                _getAllOrg(),
              ]);
              const events = eventResp.data as API_EVENT.Event[];
              const orgList = (orgResp?.data || []) as any[];
              const idToName: Record<string, string> = {};
              orgList.forEach((o: any) => {
                if (o && o._id) idToName[o._id] = o.business_name || "";
              });
              const enriched = (events || []).map((e: any) => {
                const creatorVal = e.creator;
                if (typeof creatorVal === "string") {
                  const id = creatorVal;
                  const name = idToName[id] || "";
                  e.creator = { _id: id, business_name: name };
                } else if (creatorVal && typeof creatorVal === "object") {
                  const id = creatorVal._id;
                  if (id && !creatorVal.business_name && idToName[id]) {
                    e.creator.business_name = idToName[id];
                  }
                }
                // Add a flat organizer_name for search helper
                e.organizer_name =
                  (e.creator && typeof e.creator === "object"
                    ? e.creator.business_name
                    : "") || "";
                return e as API_EVENT.Event;
              });
              if (enriched && enriched.length > 0) {
                setCurrentEventSchedule(enriched[0].schedule);
                setCurrentEventName((enriched[0] as any).name);
                setCurrentRowId((enriched[0] as any)._id);
              }
              const data = searchKey
                ? (Helper<API_EVENT.Event[]>({
                    dataSource: enriched,
                    keyWord: searchKey,
                  }) as API_EVENT.Event[])
                : enriched;
              return {
                success: true,
                data: data,
              };
            },
          }}
        />
      </BaseIndex>
    </div>
  );
}
