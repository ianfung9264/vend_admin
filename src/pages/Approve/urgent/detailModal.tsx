import { _approveCancelEvent, _getEventById, _getEventDetailsByEventId } from "@/services/event/info";
import { Button, message, Modal, Input } from "antd";
import { useEffect, useState } from "react";

interface DetailModalProps {
	initData: {
		landownerId: string;
		wallet: number;
		eventId: string;
		eventName: string;
	};
	mainTableReload?: () => Promise<void>;
}
const DetailModal: React.FC<DetailModalProps> = ({ initData, mainTableReload }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [eventData, setEventData] = useState<API_EVENT.Event>();
	const [loading, setLoading] = useState(false);
	const [totalAmount, setTotalAmount] = useState(0);
	const [paidParticipant, setPaidParticipant] = useState(0);
	const [applicationIdList, setApplicationIdList] = useState([]);
	const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
	const [refundAmount, setRefundAmount] = useState<string>("");

	//fetch event data when modal open
	useEffect(() => {
		if (isModalOpen) {
			fetchEventDataById();
		}
	}, [isModalOpen]);

	const fetchEventDataById = async () => {
		setLoading(true);
		try {
			const { data } = await _getEventById(initData.eventId);
			setEventData(data);
			console.log("initData", data);
			const eventDetail = await _getEventDetailsByEventId(initData.landownerId, initData.eventId);
			console.log("eventDetail", eventDetail);
			console.log("just testing");
			// const totalAmount = eventDetail.application_list.reduce((sum: number, app: any) => {
			const totalAmount = eventDetail[0].application_list.reduce((sum: number, app: any) => {
				if (app.status === "Paid") {
					return sum + (app.ticket_type?.amount || 0);
				}
				return sum;
			}, 0);
			setTotalAmount(totalAmount);
			console.log("totalAmount", totalAmount);

			const paidParticipant = eventDetail[0].application_list.filter((app: any) => app.status === "Paid").length;
			console.log("paidParticipant", paidParticipant);
			setPaidParticipant(paidParticipant);

			const application_id_list = eventDetail[0].application_list
				.filter((app: any) => app.status === "Paid")
				.map((app: any, index: any) => {
					return {
						id: app.application_id,
						amount: app.ticket_type?.amount,
					};
				});
			setApplicationIdList(application_id_list);
		} catch (error) {
			message.error("Failed to fetch event data");
		} finally {
			setLoading(false);
		}
	};

	const handleRefundModalOk = async () => {
		if (!refundAmount || isNaN(Number(refundAmount))) {
			message.error("Please enter a valid refund amount");
			return;
		}
		setIsRefundModalOpen(false);
		const newApplicationIdListForRefundPayload = applicationIdList?.map((app: any) => ({
			id: app.id,
			amount: Number(refundAmount),
		}));
		const payload = {
			application_id_list: newApplicationIdListForRefundPayload,
		};
		console.log("payload", payload);
		const result = await _approveCancelEvent(payload, initData.landownerId);
		if (result.code === 400) {
			message.error(result.message);
		} else {
			message.success("Event cancellation approved successfully");
			setIsModalOpen(false);
			mainTableReload?.();
		}
	};

	return (
		<>
			<Button type="link" onClick={() => setIsModalOpen(true)}>
				View Details
			</Button>
			<Modal
				title="Landowner Details"
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={[
					<Button key="reject" type="default" onClick={() => setIsModalOpen(false)}>
						Reject Cancellation Request
					</Button>,
					<Button key="approve" type="primary" onClick={() => setIsRefundModalOpen(true)}>
						Approve Event Cancellation
					</Button>,
				]}
			>
				<p>
					<strong>Landowner ID:</strong> {initData.landownerId}
				</p>
				<p>
					<strong>This Landowner's Wallet Balance:</strong> ${Number(initData.wallet).toFixed(2)}
				</p>
				<p>
					<strong>Event ID:</strong> {initData.eventId}
				</p>
				<p>
					<strong>Event Name:</strong> {initData.eventName}
				</p>
				<p>
					<strong>Participants who already paid application fee:</strong> {paidParticipant}
				</p>
				<p>
					<strong>Total Amount Received From Participants:</strong> ${totalAmount?.toFixed(2)}
				</p>
			</Modal>
			<Modal
				title="Enter Refund Amount"
				open={isRefundModalOpen}
				onCancel={() => setIsRefundModalOpen(false)}
				onOk={handleRefundModalOk}
			>
				<div style={{ padding: "20px 0" }}>
					<Input
						prefix="$"
						placeholder="Enter refund amount"
						value={refundAmount}
						onChange={(e) => setRefundAmount(e.target.value)}
						type="number"
						min="0"
						step="0.01"
					/>
				</div>
			</Modal>
		</>
	);
};

export default DetailModal;
