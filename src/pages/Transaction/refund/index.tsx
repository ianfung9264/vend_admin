import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import { RefundTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message, Typography } from "antd";
import { LandownerAdvancedStatus, WithdrawalProgress } from "@/services/commonType";
import { _getAllWaitingAdvancedOrg } from "@/services/org/advanced";
import { _getAllRefund, _getAlWithdrawal } from "@/services/withdrawal/info";
export default function Index() {
	/**********************************狀態管理**********************************/

	const actionRef = useRef<ActionType>();
	const [searchKey, setSearchKey] = useState("");
	const [reload, setReload] = useState(() => actionRef.current?.reload);
	const [allOrgData, setAllOrgData] = useState<any[]>([]);
	useEffect(() => {
		setReload(() => actionRef.current?.reload);
	}, []);

	/**********************************狀態管理**********************************/
	/**********************************組件初始化**********************************/
	/**********************************組件初始化**********************************/
	/**********************************異步函數**********************************/

	/**********************************異步函數**********************************/
	return (
		<div>
			<BaseIndex title="Vendor Refund History">
				<Typography.Paragraph type="secondary" style={{ marginBottom: "16px" }}>
					This page displays a complete history of all refunds processed for vendor stall payments. When a
					vendor's stall payment is refunded (e.g., due to event cancellation or per the event's refund
					policy), it will be recorded here.
				</Typography.Paragraph>
				<BaseSearch
					title="Search Refunds"
					submitFun={actionRef.current?.reload}
					inputProps={{
						value: searchKey,
						onChange: ({ currentTarget: { value } }) => setSearchKey(value),
					}}
				/>
				<BaseTable<Page_org.mainTable>
					searchKey={searchKey}
					props={{
						headerTitle: "Refund record List",
						actionRef: actionRef,

						columns: RefundTableColumns({
							mainTableReload: reload,
						}),
						request: async () => {
							const dataSource = await _getAllRefund().then((data) => {
								console.log("withdrawal data: ", data);

								return {
									success: true,
									data: data,
								};
							});
							if (searchKey) {
								dataSource.data = Helper<Page_org.mainTable>({
									dataSource: dataSource.data,
									keyWord: searchKey,
								}) as Page_org.mainTable[];

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
