import React, { useEffect, useRef, useState } from "react";
import BaseModel from "@/components/Base/BaseModel";
import { _editOrgInfo, _getOrgById } from "@/services/org/info";
import { _refundVendorFromOrgWallet } from "@/services/event/info";
import {
	ProForm,
	ProFormField,
	ProFormGroup,
	ProFormInstance,
	ProFormRate,
	ProFormSelect,
	ProFormText,
	ProFormTextArea,
	ProTable,
} from "@ant-design/pro-components";
import { Divider, Image, message, Progress, Button, Modal, Input, InputNumber } from "antd";
import { Line } from "@ant-design/charts";
import { truncate } from "lodash";

export default function VendorDetailModal({
	initData,
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;

	initData?: Page_org.mainTable;
}) {
	/**********************************狀態管理**********************************/
	const formRef = useRef<ProFormInstance>();
	const [data, setData] = useState<Record<string, any>>();
	const [isRefundModalVisible, setIsRefundModalVisible] = useState(false);
	const [refundAmount, setRefundAmount] = useState<number>(0);
	const [currentParticipant, setCurrentParticipant] = useState<any>(null);
	const [isRefunding, setIsRefunding] = useState(false);

	/**********************************狀態管理**********************************/
	/**********************************組件初始化**********************************/
	const groupStyle: React.CSSProperties = {
		backgroundColor: "white",
		paddingLeft: "24px",
		paddingRight: "24px",
		paddingTop: "6px",
		borderBottom: 3,
		borderColor: "black",
	};
	/**********************************組件初始化**********************************/
	/**********************************異步函數**********************************/
	// const fetchOrgData = async (id: string) => {
	//   try {
	//     const res = await _getOrgById(id);
	//     console.log("res.data", res.data);
	//     setOrg(res.data);
	//     formRef.current?.setFieldsValue(res.data);
	//   } catch (error) {
	//     console.error("获取组织数据失败:", error);
	//   }
	// };
	/**********************************異步函數**********************************/

	const handleRefund = async () => {
		if (!currentParticipant || !refundAmount) {
			message.error("Please enter a valid refund amount");
			return;
		}

		setIsRefunding(true);
		try {
			await _refundVendorFromOrgWallet(data?.creator?._id, currentParticipant.application_id, refundAmount);
			message.success("Refund processed successfully");
			setIsRefundModalVisible(false);
			setRefundAmount(0);
			setCurrentParticipant(null);
			if (mainTableReload) {
				await mainTableReload();
			}
		} catch (error) {
			message.error("Failed to process refund");
			console.error("Refund error:", error);
		} finally {
			setIsRefunding(false);
		}
	};

	return (
		<BaseModel<Page_org.mainTable>
			modalFormProps={{
				formRef: formRef,
				clearOnDestroy: true,
				onInit: async (values, form) => {
					console.log("initData", initData);
					setData(initData);
					form.setFieldsValue(initData);
					// if (initData?._id) {
					// 	const res = await _getOrgById(initData._id);
					// 	// res.data.beFollowedCount = res.data.beFollowedCount.length;
					// 	console.log("res.data", res.data);
					// 	setOrg(res.data);
					// 	const rating_distribution = Object.keys(res.data.rating_distribution).map((key) => {
					// 		return { star: key, count: res.data.rating_distribution[key] };
					// 	});
					// 	setRatingDistribution(rating_distribution);
					// 	form.setFieldsValue(res.data);
					// }
				},
				// onFinish: async (value) => {
				// 	console.log("original value", value);

				// 	// Destructure to remove event_operation_license and _id.
				// 	// _id is removed because it's passed as initData._id to the API.
				// 	const { event_operation_license, _id, icon_url, ...intermediatePayload } = value;

				// 	// Create a new payload object to hold only non-empty string values
				// 	const finalPayload: Record<string, any> = {};
				// 	for (const key in intermediatePayload) {
				// 		if (Object.prototype.hasOwnProperty.call(intermediatePayload, key)) {
				// 			const fieldValue = intermediatePayload[key];
				// 			// Keep the field if it's not an empty string.
				// 			// Also, explicitly keep fields that are numbers (like 0) or booleans (like false),
				// 			// as they shouldn't be removed if they are legitimate values.
				// 			if (typeof fieldValue === "string" && fieldValue.trim() === "") {
				// 				// Skip empty strings
				// 			} else if (fieldValue === null || typeof fieldValue === "undefined") {
				// 				// Also skip null or undefined values, backend @IsOptional should handle these.
				// 			} else {
				// 				finalPayload[key] = fieldValue;
				// 			}
				// 		}
				// 	}

				// 	// Ensure specified URL fields, if present and not empty, are valid strings.
				// 	// This step might be less critical now that we remove empty strings,
				// 	// but it can be a safeguard if a URL field could be, e.g., a number by mistake.
				// 	const urlFields = ["business_url", "facebook_url", "ins_url", "x_url"];
				// 	for (const field of urlFields) {
				// 		if (
				// 			finalPayload.hasOwnProperty(field) &&
				// 			finalPayload[field] !== null &&
				// 			typeof finalPayload[field] !== "undefined"
				// 		) {
				// 			if (typeof finalPayload[field] !== "string") {
				// 				finalPayload[field] = String(finalPayload[field]); // Convert to string if not already
				// 			}
				// 			// If, after conversion, it's an empty string (e.g. was `""` already), it would have been removed above.
				// 			// If it was, for example, `0`, it would become "0". The @IsUrl validator will catch if "0" is not a valid URL.
				// 		}
				// 	}
				// 	finalPayload.be_followed_count = finalPayload.be_followed_count.toString();
				// 	console.log("payload to send", finalPayload);

				// 	if (initData?._id) {
				// 		try {
				// 			// Make sure value.adminId is correctly sourced if required by _editOrgInfo
				// 			await _editOrgInfo(initData._id, value.adminId, finalPayload);

				// 			message.success("Organization info updated successfully");
				// 			mainTableReload?.();
				// 			return true; // Indicate success
				// 		} catch (error) {
				// 			console.error("Error updating organization info:", error);
				// 			let errorMessage = "Failed to update organization info";
				// 			// Assuming you use axios, otherwise adjust error checking
				// 			if (
				// 				typeof error === "object" &&
				// 				error !== null &&
				// 				"isAxiosError" in error &&
				// 				(error as any).isAxiosError
				// 			) {
				// 				const axiosError = error as any; // Cast to any to access response
				// 				if (
				// 					axiosError.response &&
				// 					axiosError.response.data &&
				// 					axiosError.response.data.message
				// 				) {
				// 					errorMessage = `Failed to update: ${axiosError.response.data.message}`;
				// 				}
				// 			} else if (error instanceof Error) {
				// 				errorMessage = `Failed to update: ${error.message}`;
				// 			}
				// 			message.error(errorMessage);
				// 			return false; // Indicate failure
				// 		}
				// 	} else {
				// 		console.error("Cannot update: initData._id is missing");
				// 		message.error("Cannot update organization: ID is missing.");
				// 		return false;
				// 	}
				// },
			}}
			allowUpdate={true}
			submit={formRef?.current?.submit}
			initData={data}
			title="Vendor Information"
		>
			{data?.participants &&
				Array.isArray(data.participants) &&
				data.participants.map((participant: any, index: number) => {
					// Check if participant is an object (populated) or still a string ID (fallback)
					if (typeof participant === "object" && participant !== null) {
						return (
							<ProForm.Group
								key={`participant-group-${index}`}
								style={{
									...groupStyle,
									marginBottom: "20px",
									borderTop: "1px solid #eee",
									paddingTop: "20px",
								}}
							>
								<ProFormText
									label={"Participant Business Name"}
									name={["participant", index, "business_name"]}
									initialValue={participant.business_name || "N/A"}
									colProps={{ span: 12, offset: 0 }}
									readonly
								/>
								<ProFormText
									name={["participant", index, "email"]}
									label={"Email"}
									initialValue={participant.email || "N/A"}
									colProps={{ span: 12, offset: 0 }}
									readonly
								/>
								<ProFormText
									label={"Contact Person First Name"}
									name={["participant", index, "firstname"]}
									initialValue={participant.firstname || "N/A"}
									colProps={{ span: 12, offset: 0 }} // Spans next to business name
									readonly
								/>
								<ProFormText
									label={"Contact Person Last Name"}
									name={["participant", index, "lastname"]}
									initialValue={participant.lastname || "N/A"}
									colProps={{ span: 12, offset: 0 }} // Spans next to business name
									readonly
								/>

								<ProFormText
									name={["participant", index, "phone"]}
									label={"Phone"}
									initialValue={
										`${participant.phone_pre || ""} ${participant.phone || ""}`.trim() || "N/A"
									}
									colProps={{ span: 12, offset: 0 }}
									readonly
								/>
								<ProFormText
									name={["participant", index, "stall_payment_status"]}
									label={"Stall Payment Status"}
									initialValue={participant.stall_payment_status || "N/A"}
									colProps={{ span: 12, offset: 0 }}
									readonly
								/>
								<ProFormText
									name={["participant", index, "application_id"]}
									label={"Application ID"}
									initialValue={participant.application_id || "N/A"}
									colProps={{ span: 12, offset: 0 }}
									readonly
								/>
								{participant.stall_payment_status === "Paid" && (
									<ProFormField colProps={{ span: 24 }}>
										<Button
											type="primary"
											onClick={() => {
												setCurrentParticipant(participant);
												setIsRefundModalVisible(true);
											}}
										>
											Process Refund
										</Button>
									</ProFormField>
								)}

								{/* Ticket Type Applied */}
								<ProFormField label={"Ticket Type Applied"} colProps={{ span: 24 }} mode="read">
									{participant.ticket_type_applied ? (
										<div
											style={{
												border: "1px solid #f0f0f0",
												padding: "10px",
												borderRadius: "4px",
												background: "#fafafa",
											}}
										>
											<p style={{ margin: 0 }}>
												<strong>Type:</strong>{" "}
												{participant.ticket_type_applied.ticket_type || "N/A"}
											</p>
											<p style={{ margin: 0 }}>
												<strong>Amount:</strong> $
												{participant.ticket_type_applied.amount -
													(participant.add_ons_applied &&
													Array.isArray(participant.add_ons_applied)
														? participant.add_ons_applied.reduce(
																(sum: number, addon: any) =>
																	sum +
																	(Number(addon.amount) * Number(addon.quantity) ||
																		0),
																0
															)
														: 0)}
											</p>
										</div>
									) : (
										<p>N/A</p>
									)}
								</ProFormField>

								{/* Add-ons */}
								<ProFormField label={"Add-ons"} colProps={{ span: 24 }} mode="read">
									{participant.add_ons_applied &&
									Array.isArray(participant.add_ons_applied) &&
									participant.add_ons_applied.length > 0 ? (
										<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
											{participant.add_ons_applied.map((addon: any, addonIndex: number) => (
												<div
													key={`addon-${index}-${addonIndex}`}
													style={{
														border: "1px solid #f0f0f0",
														padding: "10px",
														borderRadius: "4px",
														background: "#fafafa",
													}}
												>
													<p style={{ margin: 0 }}>
														<strong>Type:</strong> {addon.add_on_type || "N/A"}
													</p>
													<p style={{ margin: 0 }}>
														<strong>Quantity:</strong> {addon.quantity || "0"}
													</p>
													<p style={{ margin: 0 }}>
														<strong>Amount per quantity:</strong> ${addon.amount || "0"}
													</p>
												</div>
											))}
										</div>
									) : (
										<p>No add-ons</p>
									)}
								</ProFormField>

								{/* Applied Schedule */}
								<ProFormField label={"Applied Date"} colProps={{ span: 24 }} mode="read">
									{participant.schedule &&
									Array.isArray(participant.schedule) &&
									participant.schedule.length > 0 ? (
										<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
											{participant.schedule.map((slot: any, slotIndex: number) => (
												<div
													key={`schedule-${index}-${slotIndex}`}
													style={{
														border: "1px solid #f0f0f0",
														padding: "10px",
														borderRadius: "4px",
														background: "#fafafa",
													}}
												>
													<p style={{ margin: 0 }}>
														<strong>Start:</strong>{" "}
														{slot.start_time
															? new Date(slot.start_time).toLocaleString()
															: "N/A"}
													</p>
													<p style={{ margin: 0 }}>
														<strong>End:</strong>{" "}
														{slot.end_time
															? new Date(slot.end_time).toLocaleString()
															: "N/A"}
													</p>
												</div>
											))}
										</div>
									) : (
										<p>No specific schedule applied</p>
									)}
								</ProFormField>
							</ProForm.Group>
						);
					} else if (typeof participant === "string") {
						// If it's just an ID (tenant not found during backend population)
						return (
							<ProForm.Group
								key={`participant-group-${index}`}
								style={{
									...groupStyle,
									marginBottom: "20px",
									borderTop: "1px solid #eee",
									paddingTop: "20px",
								}}
							>
								<ProFormText
									label={`Participant ID (Details N/A)`}
									initialValue={participant}
									colProps={{ span: 24, offset: 0 }}
									readonly
								/>
							</ProForm.Group>
						);
					}
					return null; // Should ideally not be reached
				})}

			<Modal
				title="Process Refund"
				open={isRefundModalVisible}
				onOk={handleRefund}
				onCancel={() => {
					setIsRefundModalVisible(false);
					setRefundAmount(0);
				}}
				okText="Confirm"
				cancelText="Cancel"
				confirmLoading={isRefunding}
			>
				<div style={{ marginBottom: 16 }}>
					<p>Please enter the refund amount:</p>
					<p className="text-xs text-gray-500">
						Note: the maxium amount you can refund is the ticket amount + add on amount.
					</p>
					<InputNumber
						style={{ width: "100%" }}
						min={0}
						precision={2}
						value={refundAmount}
						onChange={(value) => setRefundAmount(value || 0)}
						placeholder="Enter refund amount"
					/>
				</div>
			</Modal>
		</BaseModel>
	);
}
