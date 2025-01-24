import { UrgentActionStatus } from "@/services/commonType";
import { _approveCancelEvent, _getEventById, _getEventDetailsByEventId } from "@/services/event/info";
import { _putUrgentInfo } from "@/services/urgent/info";
import { Button, message, Modal, Input } from "antd";
import { useEffect, useState } from "react";

interface DetailModalProps {
	initData: {
		_id: string;
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
			console.log("initData", initData);
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

			console.log("hi");

			//here, sometime eventDetail is an array and sometime it is an object. i want you to add [0] accordingly
			const details = Array.isArray(eventDetail) ? eventDetail[0] : eventDetail;

			const totalAmount = details.application_list.reduce((sum: number, app: any) => {
				if (app.status === "Paid") {
					console.log("sldkfjsdlkfjs");
					const ticketAmount = app.ticket_type?.amount || 0;

					const addOnTotal =
						app.add_on?.reduce((addOnSum: number, addon: any) => {
							return addOnSum + addon.quantity * addon.amount;
						}, 0) || 0;

					const appTotal = ticketAmount + addOnTotal;
					console.log("Application Total:", appTotal);

					return sum + ticketAmount + addOnTotal;
				}
				return sum;
			}, 0);
			setTotalAmount(totalAmount);
			console.log("totalAmount", totalAmount);

			const paidParticipant = details.application_list.filter((app: any) => app.status === "Paid").length;
			console.log("paidParticipant", paidParticipant);
			setPaidParticipant(paidParticipant);

			const application_id_list = details.application_list
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
		console.log("result", result);
		// if (result.code === 400) {
		if (result.code === 400) {
			console.log("i am in 400 i am result", result);
			message.error(result.message);
		} else {
			console.log("i am here");
			await _putUrgentInfo({
				status: UrgentActionStatus.Handled,
				urgent_id: initData._id,
			}).then(({}) => {
				console.log("i am in 200");
				console.log("initData", initData);
				console.log("initData._id", initData._id);
				message.success("Marked as handled");
				setIsModalOpen(false);
				mainTableReload?.();
			});
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
				<p>
					<strong>Total Amount per Participant:</strong> $
					{paidParticipant ? (totalAmount / paidParticipant).toFixed(2) : "0.00"}
				</p>
			</Modal>
			<Modal
				title="Enter Refund Amount"
				open={isRefundModalOpen}
				onCancel={() => setIsRefundModalOpen(false)}
				onOk={handleRefundModalOk}
			>
				<div style={{ padding: "20px 0" }}>
					<p>Enter the amount you want to refund PER PARTICIPANT</p>
					<p>if you want to refund 100% for each participant, enter ${totalAmount / paidParticipant}</p>
					<p>if you enter a number larger than {totalAmount / paidParticipant}, it won't work.</p>
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
