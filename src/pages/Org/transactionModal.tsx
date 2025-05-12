import BaseModel from "@/components/Base/BaseModel";
import { _editOrgInfo, _getOrgById } from "@/services/org/info";
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
import { Divider, Image, message, Progress, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { truncate } from "lodash";

const { Text } = Typography;

export default function TransactionModal({
	initData,
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;

	initData?: Page_org.mainTable;
}) {
	/**********************************狀態管理**********************************/
	const formRef = useRef<ProFormInstance>();
	const [org, setOrg] = useState<Record<string, any>>();
	const [ratingDistribution, setRatingDistribution] = useState<Record<string, any>[]>([]);

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
	return (
		<BaseModel<Page_org.mainTable>
			modalFormProps={{
				formRef: formRef,
				clearOnDestroy: true,
				onInit: async (values, form) => {
					if (initData?._id) {
						const res = await _getOrgById(initData._id);
						console.log("res.data", res.data);
						setOrg(res.data);
						// Handle null rating_distribution
						const rating_distribution = res.data.rating_distribution
							? Object.keys(res.data.rating_distribution).map((key) => {
									return { star: key, count: res.data.rating_distribution[key] };
								})
							: [];
						setRatingDistribution(rating_distribution);
						form.setFieldsValue(res.data);
					}
				},
				onFinish: async (value) => {
					console.log("original value", value);

					// Destructure to remove event_operation_license and _id.
					// _id is removed because it's passed as initData._id to the API.
					const { event_operation_license, _id, icon_url, adminId, ...intermediatePayload } = value as any;

					// Create a new payload object to hold only non-empty string values
					const finalPayload: Record<string, any> = {};
					for (const key in intermediatePayload) {
						if (Object.prototype.hasOwnProperty.call(intermediatePayload, key)) {
							const fieldValue = intermediatePayload[key];
							// Keep the field if it's not an empty string.
							// Also, explicitly keep fields that are numbers (like 0) or booleans (like false),
							// as they shouldn't be removed if they are legitimate values.
							if (typeof fieldValue === "string" && fieldValue.trim() === "") {
								// Skip empty strings
							} else if (fieldValue === null || typeof fieldValue === "undefined") {
								// Also skip null or undefined values, backend @IsOptional should handle these.
							} else {
								finalPayload[key] = fieldValue;
							}
						}
					}

					// Ensure specified URL fields, if present and not empty, are valid strings.
					// This step might be less critical now that we remove empty strings,
					// but it can be a safeguard if a URL field could be, e.g., a number by mistake.
					const urlFields = ["business_url", "facebook_url", "ins_url", "x_url"];
					for (const field of urlFields) {
						if (
							finalPayload.hasOwnProperty(field) &&
							finalPayload[field] !== null &&
							typeof finalPayload[field] !== "undefined"
						) {
							if (typeof finalPayload[field] !== "string") {
								finalPayload[field] = String(finalPayload[field]); // Convert to string if not already
							}
							// If, after conversion, it's an empty string (e.g. was `""` already), it would have been removed above.
							// If it was, for example, `0`, it would become "0". The @IsUrl validator will catch if "0" is not a valid URL.
						}
					}

					// Ensure advanced_status is a number
					if (finalPayload.hasOwnProperty("advanced_status")) {
						finalPayload.advanced_status = Number(finalPayload.advanced_status);
					}

					if (finalPayload.hasOwnProperty("be_followed_count")) {
						finalPayload.be_followed_count = finalPayload.be_followed_count.toString();
					}

					console.log("payload to send", finalPayload);

					if (initData?._id) {
						try {
							// Make sure value.adminId is correctly sourced if required by _editOrgInfo
							await _editOrgInfo(initData._id, (value as any).adminId, finalPayload);

							message.success("Organization info updated successfully");
							mainTableReload?.();
							return true; // Indicate success
						} catch (error) {
							console.error("Error updating organization info:", error);
							let errorMessage = "Failed to update organization info";
							// Assuming you use axios, otherwise adjust error checking
							if (
								typeof error === "object" &&
								error !== null &&
								"isAxiosError" in error &&
								(error as any).isAxiosError
							) {
								const axiosError = error as any; // Cast to any to access response
								if (
									axiosError.response &&
									axiosError.response.data &&
									axiosError.response.data.message
								) {
									errorMessage = `Failed to update: ${axiosError.response.data.message}`;
								}
							} else if (error instanceof Error) {
								errorMessage = `Failed to update: ${error.message}`;
							}
							message.error(errorMessage);
							return false; // Indicate failure
						}
					} else {
						console.error("Cannot update: initData._id is missing");
						message.error("Cannot update organization: ID is missing.");
						return false;
					}
				},
			}}
			allowUpdate={true}
			submit={formRef?.current?.submit}
			initData={org}
			title="Account Details"
		>
			<Divider children="Transaction Information" orientation="left" orientationMargin={20} />
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Id"} name="_id" colProps={{ span: 8, offset: 0 }} readonly />
				<ProFormField label={"Icon"} name="icon_url" colProps={{ span: 8, offset: 6 }} readonly>
					{org?.icon_url ? <Image src={org.icon_url.url} width={100} /> : <Text type="secondary">N/A</Text>}
				</ProFormField>

				<ProFormText label={"Followers Count"} name="be_followed_count" colProps={{ span: 8, offset: 0 }} />

				<ProFormSelect
					label="Account type"
					name="advanced_status"
					fieldProps={{
						labelInValue: false,
						onChange: (value) => {
							// Ensure the value is converted to a number
							formRef.current?.setFieldValue("advanced_status", Number(value));
						},
					}}
					colProps={{ span: 8, offset: 6 }}
					valueEnum={{
						0: { text: "Unapproved", status: "Error" },
						1: { text: "Waiting", status: "Processing" },
						2: { text: "Approved", status: "Success" },
					}}
				/>
				<ProFormField
					label={"Wallet Balance"}
					name="wallet"
					colProps={{ span: 8, offset: 0 }}
					valueType="money"
				/>
				<ProFormText label={"Email"} name="email" colProps={{ span: 8, offset: 6 }} />
				<ProFormText label={"Phone Prefix"} name="phone_pre" colProps={{ span: 8, offset: 0 }} />

				<ProFormText label={"Phone Number"} name="phone" colProps={{ span: 8, offset: 6 }} />

				<ProFormText
					label={"Organizer Event Count"}
					proFieldProps={{
						render: () => {
							return <div>{org?.events?.length || 0}</div>;
						},
					}}
					colProps={{ span: 8, offset: 0 }}
				/>
				<ProFormField
					label={"Event Operation License"}
					name="event_operation_license"
					colProps={{ span: 8, offset: 6 }}
					readonly
				>
					{org?.event_operation_license ? (
						<Image src={org.event_operation_license.url} width={100} />
					) : (
						<Text type="secondary">N/A</Text>
					)}
				</ProFormField>
			</ProForm.Group>

			<Divider children="Business Information" orientation="left" orientationMargin={20} />

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Display Business Name"} name="business_name" colProps={{ span: 8, offset: 0 }} />
				<ProFormText
					label={"Full Legal Business Name"}
					name="business_full_name"
					colProps={{ span: 8, offset: 6 }}
				/>
				<ProFormText label={"Business Website"} name="business_url" colProps={{ span: 8, offset: 0 }} />

				<ProFormText label={"Facebook URL"} name="facebook_url" colProps={{ span: 8, offset: 6 }} />
				<ProFormText label={"Instagram URL"} name="ins_url" colProps={{ span: 8, offset: 0 }} />
				<ProFormText label={"X URL"} name="x_url" colProps={{ span: 8, offset: 6 }} />
				<ProFormText
					label={"Legal Person First Name"}
					name="legal_person_first_name"
					colProps={{ span: 8, offset: 0 }}
				/>
				<ProFormText
					label={"Legal Person Last Name"}
					name="legal_person_last_name"
					colProps={{ span: 8, offset: 6 }}
				/>
			</ProForm.Group>
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormField colProps={{ span: 24 }}>
					{org?.bank_info && org.bank_info.length > 0 ? (
						<ProTable
							search={false}
							toolBarRender={false}
							pagination={false}
							columns={[
								{ title: "Card Name", dataIndex: "card_type" },
								{ title: "Card Info", dataIndex: "card_info" },
								{ title: "Card CVV Code", dataIndex: "cvv_code" },
								{ title: "Card Expiration Date", dataIndex: "expire_date" },
							]}
							dataSource={org.bank_info}
						/>
					) : (
						<Text type="secondary">No bank information available</Text>
					)}
				</ProFormField>
			</ProForm.Group>

			<Divider children="Business address info" orientation="left" orientationMargin={20} />
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText
					name={["business_address", "country"]}
					colProps={{ span: 8, offset: 0 }}
					label={"Country"}
				/>
				<ProFormText name={["business_address", "state"]} label={"State"} colProps={{ span: 8, offset: 6 }} />
				<ProFormText name={["business_address", "city"]} label={"City"} colProps={{ span: 8, offset: 0 }} />
				<ProFormText
					name={["business_address", "address"]}
					label={"Address"}
					colProps={{ span: 8, offset: 6 }}
				/>
				<ProFormText name={["business_address", "zip"]} label={"Zip"} colProps={{ span: 8, offset: 0 }} />
				<ProFormField label={"Images"} name="shoot_photo" colProps={{ span: 24, offset: 0 }} readonly>
					{org?.pictures && org.pictures.length > 0 ? (
						org.pictures.map((pic: any, index: number) => <Image key={index} src={pic.url} width={100} />)
					) : (
						<Text type="secondary">N/A</Text>
					)}
				</ProFormField>
			</ProForm.Group>
			<Divider children="Others" orientation="left" orientationMargin={20} />

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormTextArea label={"Bio"} name="blurb" colProps={{ span: 24 }} />
			</ProForm.Group>
		</BaseModel>
	);
}
