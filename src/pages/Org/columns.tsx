import { ProColumns } from "@ant-design/pro-components";
import { Button, Divider, Tooltip, Modal, message } from "antd";
import DetailModal from "./detailModal";
import { LandownerAdvancedStatus, OtpStatusType } from "@/services/commonType";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import WalletBalanceModal from "./WalletBalanceModal";
import EventModal from "./EventModal";
import { useState } from "react";
import { _deleteOrgById } from "@/services/org/info";

interface Page_org {
	mainTable: any;
}

export function OrgTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<Page_org.mainTable>[] {
	const [selectedRecord, setSelectedRecord] = useState<Page_org.mainTable | null>(null);
	const [modalVisible, setModalVisible] = useState(false);

	const [selectedRecordForEvents, setSelectedRecordForEvents] = useState<Page_org.mainTable | null>(null);
	const [eventModalVisible, setEventModalVisible] = useState(false);

	return [
		{
			title: "Organizer ID",
			dataIndex: "_id",
			key: "_id",
			align: "center",
		},
		{
			title: "Display Business Name",
			dataIndex: "business_name",
			key: "business_name",
			align: "center",
		},
		{
			title: "Full Legal Business Name",
			dataIndex: "business_full_name",
			key: "business_full_name",
			align: "center",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			align: "center",
		},
		{
			title: "Wallet Balance",
			dataIndex: "wallet",
			key: "wallet",
			render: (text, record) => (
				<>
					<Button
						type="link"
						style={{ padding: 0 }}
						onClick={() => {
							setSelectedRecord(record);
							setModalVisible(true);
						}}
					>
						{`$${Number(text)?.toFixed(2)}`}
					</Button>
					{selectedRecord && (
						<WalletBalanceModal
							visible={modalVisible}
							onClose={() => {
								setModalVisible(false);
								setSelectedRecord(null);
							}}
							record={selectedRecord}
						/>
					)}
				</>
			),
			align: "center",
		},
		{
			title: "Event Count",
			dataIndex: "eventCount",
			key: "eventCount",
			render: (text, record) => (
				<>
					<Button
						type="link"
						style={{ padding: 0 }}
						onClick={() => {
							setSelectedRecordForEvents(record);
							setEventModalVisible(true);
						}}
					>
						{text}
					</Button>
					{selectedRecordForEvents && (
						<EventModal
							visible={eventModalVisible}
							onClose={() => {
								setEventModalVisible(false);
								setSelectedRecordForEvents(null);
							}}
							record={selectedRecordForEvents}
						/>
					)}
				</>
			),
			align: "center",
		},
		{
			title: "Followers Count",
			dataIndex: "be_followed_count",
			key: "be_followed_count",
			align: "center",
		},
		{
			title: "Type",
			dataIndex: "advanced_status",
			key: "advanced_status",
			valueType: "select",
			valueEnum: {
				0: { text: "Unverified", status: "Default" },
				2: { text: "Verified", status: "Success" },
			},
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
					<Tooltip title="Delete Organizer">
						<Button
							danger
							icon={<DeleteOutlined />}
							onClick={() => {
								Modal.confirm({
									title: "Are you sure you want to delete this organizer?",
									content: `Deleting Organizer: ${record.business_name || record._id}. This action cannot be undone.`,
									okText: "Yes, Delete",
									okType: "danger",
									cancelText: "No",
									onOk: async () => {
										try {
											await _deleteOrgById(record._id);
											message.success("Organizer deleted successfully");
											mainTableReload?.();
										} catch (error) {
											console.error("Failed to delete organizer:", error);
											message.error("Failed to delete organizer");
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
