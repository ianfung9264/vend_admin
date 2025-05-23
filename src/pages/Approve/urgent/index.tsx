import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import { UrgentTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message, Typography } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
import { _getAllWaitingAdvancedOrg } from "@/services/org/advanced";
import { _getUrgentInfo } from "@/services/urgent/info";
import { _getEventById } from "@/services/event/info";

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
			<BaseIndex title="Urgent approval page">
				<Typography.Text type="secondary">
					This page manages urgent event cancellation requests from organizers. These requests may arise due
					to unforeseen circumstances such as severe weather conditions, safety concerns, or other emergency
					situations. As an admin, you can review the cancellation reason, contact the organizer if needed,
					and take appropriate action. If the cancellation is justified, follow the instructions in the "View
					Cancellation Request" button to process the cancellation and ensure all vendors receive their
					refunds.
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
				<BaseTable<any>
					searchKey={searchKey}
					props={{
						headerTitle: "Urgent approval List",
						actionRef: actionRef,

						columns: UrgentTableColumns({
							mainTableReload: reload,
						}),
						request: async () => {
							const urgentInfoResponse = await _getUrgentInfo();
							if (!urgentInfoResponse || !urgentInfoResponse.data) {
								message.error("Failed to fetch urgent requests.");
								return { success: false, data: [] };
							}

							const urgentData = urgentInfoResponse.data;

							// Fetch event details for each urgent request
							const enrichedData = await Promise.all(
								urgentData.map(async (item: any) => {
									if (item.related_id && item.related_id._id) {
										try {
											const eventDetails = await _getEventById(item.related_id._id);
											if (eventDetails && eventDetails.data) {
												// Assuming eventDetails.data contains the status
												// and related_id is where the column expects it
												return {
													...item,
													related_id: {
														...item.related_id,
														status: eventDetails.data.status, // Add status here
													},
												};
											}
										} catch (error) {
											console.log(
												`Failed to fetch event details for ${item.related_id._id}`,
												error
											);
											// Return item without status if fetch fails
											return item;
										}
									}
									return item; // Return item if no related_id._id
								})
							);

							let processedData = enrichedData;
							if (searchKey) {
								processedData = Helper<any>({
									dataSource: enrichedData,
									keyWord: searchKey,
								}) as Page_org.mainTable[];
							}

							console.log("dataSource with status", { success: true, data: processedData });
							return {
								success: true,
								data: processedData,
							};
						},
					}}
				/>
			</BaseIndex>
		</div>
	);
}
