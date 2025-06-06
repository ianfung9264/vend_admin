import { ProColumns } from "@ant-design/pro-components";
import { Divider, Button, Modal, message, Tooltip } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import JoinedEventsModal from "./JoinedEventsModal";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { _deleteTenantById } from "@/services/tenant/info";

export function TenantTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<Page_tenant.mainTable>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);

	// State for JoinedEventsModal
	const [selectedTenantForEvents, setSelectedTenantForEvents] = useState<Page_tenant.mainTable | null>(null);
	const [joinedEventsModalVisible, setJoinedEventsModalVisible] = useState(false);

	return [
		{
			title: "Vendor ID",
			dataIndex: "_id", // 根据您提供的数据结构
			key: "_id",
			align: "center",
		},
		{
			title: "Vendor Business Name",
			dataIndex: "business_name",
			key: "business_name",
			align: "center",
		},
		// {
		// 	title: "First Name",
		// 	dataIndex: "firstname", // 根据您提供的数据结构
		// 	key: "firstname",
		// 	align: "center",
		// },
		// {
		// 	title: "Last Name",
		// 	dataIndex: "lastname", // 根据您提供的数据结构
		// 	key: "lastname",
		// 	align: "center",
		// },
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			align: "center",
		},
		{
			title: "Participated Events Count",
			dataIndex: "joined_events_count",
			key: "joined_events_count",
			align: "center",
			render: (text, record) => (
				<>
					<Button
						type="link"
						style={{ padding: 0 }}
						onClick={() => {
							setSelectedTenantForEvents(record);
							setJoinedEventsModalVisible(true);
						}}
					>
						{text}
					</Button>
					{selectedTenantForEvents && (
						<JoinedEventsModal
							visible={joinedEventsModalVisible}
							onClose={() => {
								setJoinedEventsModalVisible(false);
								setSelectedTenantForEvents(null);
							}}
							tenantRecord={selectedTenantForEvents}
						/>
					)}
				</>
			),
		},
		{
			title: "Followers Count",
			dataIndex: "be_followed_count", // 根据您提供的数据结构
			key: "be_followed_count",
			align: "center",
		},
		{
			title: "Actions",
			dataIndex: "action",
			key: "action",
			render: (_, record) => (
				<span>
					<DetailModal initData={record} mainTableReload={mainTableReload} />
					<Divider type="vertical" />
					<Tooltip title="Delete Vendor">
						<Button
							danger
							icon={<DeleteOutlined />}
							onClick={() => {
								Modal.confirm({
									title: "Are you sure you want to delete this vendor?",
									content: `Deleting Vendor: ${record.business_name || record._id}. This action cannot be undone.`,
									okText: "Yes, Delete",
									okType: "danger",
									cancelText: "No",
									async onOk() {
										try {
											await _deleteTenantById(record._id);
											message.success("Vendor deleted successfully");
											mainTableReload?.();
										} catch (error) {
											console.error("Failed to delete vendor:", error);
											message.error("Failed to delete vendor");
										}
									},
								});
							}}
						/>
					</Tooltip>
				</span>
			),
			align: "center",
		},
	];
}
