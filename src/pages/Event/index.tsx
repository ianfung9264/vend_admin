import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType, ProCard } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import Helper from "@/util/searchHelper";
import { Badge, Calendar, Card, message } from "antd";
import { _getAllEvent } from "@/services/event/info";
import { EventTableColumns } from "./columns";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc); // 使用 UTC 插件

export default function Index() {
	/**********************************狀態管理**********************************/
	const { data, error, loading } = useRequest(_getAllEvent);

	const actionRef = useRef<ActionType>();
	const [searchKey, setSearchKey] = useState("");
	const [reload, setReload] = useState(() => actionRef.current?.reload);
	const [currentEventSchedule, setCurrentEventSchedule] = useState<API_EVENT.EventSchedule[]>([]);
	const [currentEventName, setCurrentEventName] = useState<string>("");
	useEffect(() => {
		setReload(() => actionRef.current?.reload);
	}, []);
	const [currentRowId, setCurrentRowId] = useState<string | null>(null); // 存储当前被点击的行 ID

	/**********************************狀態管理**********************************/
	/**********************************組件初始化**********************************/

	/**********************************組件初始化**********************************/
	/**********************************異步函數**********************************/

	/**********************************異步函數**********************************/
	return (
		<div>
			<BaseIndex title="Event page">
				<BaseSearch
					title="Search bar"
					submitFun={actionRef.current?.reload}
					inputProps={{
						value: searchKey,
						onChange: ({ currentTarget: { value } }) => setSearchKey(value),
					}}
				/>
				<ProCard split="vertical" style={{ width: "100%" }}>
					<ProCard colSpan={{ xs: 19, sm: 19 }}>
						<BaseTable<API_EVENT.Event>
							searchKey={searchKey}
							props={{
								headerTitle: "Event List",
								actionRef: actionRef,
								onRow: (record) => {
									return {
										onClick: () => {
											setCurrentEventSchedule(record.schedule);
											setCurrentEventName(record.name);
											setCurrentRowId(record._id);
										},
									};
								},
								rowKey: "_id",
								rowClassName: (record) =>
									record._id === currentRowId ? "bg-gradient-to-r from-cyan-300 to-cyan-100" : "", // 根据当前行 ID 设置样式

								columns: EventTableColumns({
									mainTableReload: reload,
								}),
								request: async () => {
									const dataSource = await _getAllEvent().then(({ data }) => {
										console.log("data", data);
										setCurrentEventSchedule(data[0].schedule);
										setCurrentEventName(data[0].name);
										setCurrentRowId(data[0]._id);
										return {
											success: true,
											data: data,
										};
									});
									if (searchKey) {
										dataSource.data = Helper<API_EVENT.Event[]>({
											dataSource: dataSource.data,
											keyWord: searchKey,
										}) as API_EVENT.Event[];

										return dataSource;
									} else {
										return dataSource;
									}
								},
							}}
						/>
					</ProCard>
					{/* <ProCard colSpan={{ xs: 5, sm: 5 }} ghost>
            {currentEventSchedule.map((_, index) => {
              return (
                <>
                  <Card
                    title={`${currentEventName} schedule No.${index + 1}`}
                    className="m-2 bg-gradient-to-r from-cyan-300 to-cyan-100 opacity-60"
                  >
                    <div>
                      <div>
                        Start time:{" "}
                        {dayjs
                          .utc(_.start_time)
                          .local()
                          .format("YYYY-MM-DD HH:mm")}
                      </div>
                    </div>
                    <div>
                      <div>
                        End time:{" "}
                        {dayjs
                          .utc(_.end_time)
                          .local()
                          .format("YYYY-MM-DD HH:mm")}
                      </div>
                    </div>
                  </Card>
                </>
              );
            })}
          </ProCard> */}
				</ProCard>
			</BaseIndex>
		</div>
	);
}
