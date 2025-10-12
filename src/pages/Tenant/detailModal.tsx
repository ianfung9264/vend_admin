import BaseModel from "@/components/Base/BaseModel";
import { _getOrgById } from "@/services/org/info";
import {
	ProDescriptions,
	ProForm,
	ProFormField,
	ProFormGroup,
	ProFormInstance,
	ProFormRate,
	ProFormSelect,
	ProFormText,
	ProFormTextArea,
	ProList,
	ProTable,
} from "@ant-design/pro-components";
import { Divider, Image, message, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { _editVendorInfo, _getTenantById } from "@/services/tenant/info";

export default function DetailModal({
    initData,
    mainTableReload,
    trigger,
}: {
    mainTableReload: (() => Promise<void>) | undefined;

    initData?: Page_tenant.mainTable;
    trigger?: React.ReactElement;
}) {
	/**********************************狀態管理**********************************/
	const formRef = useRef<ProFormInstance>();
	const [tenant, setTenant] = useState<Record<string, any>>();
	const [ratingDistribution, setRatingDistribution] = useState<Record<string, any>[]>([]);
	const leftFile = { span: 8, offset: 0 };
	const rightFile = { span: 8, offset: 6 };
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
        <BaseModel<Page_tenant.mainTable>
            trigger={trigger}
			modalFormProps={{
				formRef: formRef,
				clearOnDestroy: true,
				onInit: async (values, form) => {
					if (initData?._id) {
						console.log("initData", initData);

						const res = await _getTenantById(initData._id);
						// res.data.beFollowedCount = res.data.beFollowedCount.length;
						console.log("res.data", res.data);
						setTenant(res.data);
						const rating_distribution = Object.keys(res.data.rating_distribution).map((key) => {
							return { star: key, count: res.data.rating_distribution[key] };
						});
						setRatingDistribution(rating_distribution);
						form.setFieldsValue(res.data);
					}
				},
				onFinish: async (value) => {
					console.log("original value", value);

					const { _id, stripe_customer_id, icon_url, ...intermediatePayload } = value;

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
						}
					}
					finalPayload.be_followed_count = finalPayload.be_followed_count.toString();
					console.log("payload to send", finalPayload);

					if (initData?._id) {
						try {
							// Make sure value.adminId is correctly sourced if required by _editOrgInfo
							await _editVendorInfo(initData._id, value.adminId, finalPayload);

							message.success("Vendor info updated successfully");
							mainTableReload?.();
							return true; // Indicate success
						} catch (error) {
							console.error("Error updating Vendor info:", error);
							let errorMessage = "Failed to update Vendor info";
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
						message.error("Cannot update Vendor: ID is missing.");
						return false;
					}
				},
			}}
            allowUpdate={false}
			submit={formRef?.current?.submit}
			initData={tenant}
			title="Account Details"
		>
			<Divider children="Basic Information" orientation="left" orientationMargin={20} />
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Id"} name="_id" readonly />{" "}
				<ProFormText label={"Vendor Last Name"} name="lastname" colProps={leftFile} />
				<ProFormText label={"Vendor First Name"} name="firstname" colProps={rightFile} />
				<ProFormText label={"Phone Prefix"} name="phone_pre" colProps={leftFile} />
				<ProFormText label={"Phone Number"} name="phone" colProps={rightFile} />
				<ProFormText label={"Followers Count"} name="be_followed_count" colProps={leftFile} />
				<ProFormText label={"Email"} name="email" colProps={rightFile} />
				<ProFormField label={"Icon"} name="icon_url" colProps={leftFile}>
					{tenant?.icon_url?.url ? <Image src={tenant.icon_url.url} width={100} /> : <span>N/A</span>}
				</ProFormField>
			</ProForm.Group>
			<>
				{/* <Divider
          children="Bank info"
          orientation="left"
          orientationMargin={20}
        /> */}

				{/* <ProForm.Group style={{ ...groupStyle }}>
          <ProFormField colProps={{ span: 24 }}>
            <ProTable
              search={false}
              toolBarRender={false}
              pagination={false}
              columns={[
                { title: "Card name", dataIndex: "card_type" },
                { title: "Card info", dataIndex: "card_info" },
                { title: "Card cvv code", dataIndex: "cvv_code" },
                { title: "Card expiration date", dataIndex: "expire_date" },
              ]}
              dataSource={tenant?.bank_info}
            />
          </ProFormField>
        </ProForm.Group> */}
			</>
			<>
				<Divider children="Product Information" orientation="left" orientationMargin={20} />

				<ProForm.Group style={{ ...groupStyle }}>
					<ProFormField colProps={{ span: 24 }}>
						<ProTable
							search={false}
							toolBarRender={false}
							pagination={false}
							columns={[
								{ title: "Product name", dataIndex: "name" },
								{ title: "Price", dataIndex: "price" },
								{
									title: "Product photo example",
									dataIndex: "pictures.url",
									valueType: "image",
									render: (_, record) => {
										return (
											<div style={{ display: "flex", gap: "8px" }}>
												{record.pictures.map((_record: any, index: number) => {
													if (index < 3)
														return (
															<Image
																src={_record.url}
																width={50}
																height={50}
																key={_record.url}
															/>
														);
												})}
											</div>
										);
									},
								},
								//  { title: "Create time", dataIndex: "createdAt" },
							]}
							dataSource={tenant?.products}
						/>
					</ProFormField>
				</ProForm.Group>
			</>

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Business name"} name="business_name" colProps={leftFile} />

				<ProFormText label={"Business url"} name="business_url" colProps={rightFile} />

				<ProFormText
					fieldProps={{
						type: "url",
					}}
					label={"Facebook url"}
					name="facebook_url"
					colProps={leftFile}
				/>
				<ProFormText label={"Instagram url"} name="ins_url" colProps={rightFile} />
				<ProFormText label={"X url"} name="x_url" colProps={leftFile} />
			</ProForm.Group>
			<>
				<Divider children="Business address info" orientation="left" orientationMargin={20} />
				<ProForm.Group style={{ ...groupStyle }}>
					<ProFormText
						name={["business_address", "country"]}
						colProps={{ span: 8, offset: 0 }}
						label={"Country"}
					/>
					<ProFormText
						name={["business_address", "state"]}
						colProps={{ span: 8, offset: 6 }}
						label={"State"}
					/>
					<ProFormText name={["business_address", "city"]} label={"City"} colProps={{ span: 8, offset: 0 }} />
					<ProFormText
						name={["business_address", "address"]}
						label={"Address"}
						colProps={{ span: 8, offset: 6 }}
					/>
					<ProFormText
						name={["business_address", "zip"]}
						colProps={{ span: 8, offset: 0 }}
						label={"Zip code"}
					/>
					<ProFormField label={"Images"} name="shoot_photo" colProps={{ span: 24, offset: 0 }}>
						<div style={{ display: "flex", gap: "8px" }}>
							{tenant?.shoot_pictures?.map((pic: any, index: number) =>
								pic?.url ? (
									<Image
										key={pic.id || pic.asset_id || index} // Use a more robust key
										src={pic.url}
										width={100}
										height={100}
									/>
								) : (
									<span key={index}>N/A</span>
								)
							)}
						</div>
					</ProFormField>
				</ProForm.Group>
			</>
			<Divider children="Others" orientation="left" orientationMargin={20} />

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Stripe customer id"} name="stripe_customer_id" colProps={leftFile} readonly />
				{/* <ProFormTextArea label={"Rating average"} name="rating_average" colProps={rightFile} /> */}
				<ProFormTextArea label={"Bio"} name="blurb" colProps={{ span: 24 }} />
			</ProForm.Group>
		</BaseModel>
	);
}
