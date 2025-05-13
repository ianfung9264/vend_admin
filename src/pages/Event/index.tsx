import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType, ProCard } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import Helper from "@/util/searchHelper";
import { Badge, Calendar, Card, message, Typography } from "antd";
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
				<Typography.Text type="secondary">
					Currently cannot edit event as function is being tested. Another patch Will be pushed tomorrow.
					<br />
				</Typography.Text>
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
			</BaseIndex>
		</div>
	);
}
