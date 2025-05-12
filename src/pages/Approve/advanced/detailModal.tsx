import BaseModel from "@/components/Base/BaseModel";
import { _getOrgById } from "@/services/org/info";
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
import { Divider, Image, message, Popconfirm, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { useModel } from "@umijs/max";
import { _passOrgAdvanceApprove, _rejectOrgAdvanceApprove } from "@/services/org/advanced";

export default function DetailModal({
	initData,
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;

	initData?: Page_org.mainTable;
}) {
	/**********************************狀態管理**********************************/
	const formRef = useRef<ProFormInstance>();
	const [org, setOrg] = useState<Record<string, any>>();
	const [rejectData, setRejectData] = useState<{
		orgId: string;
		reason: string;
	}>();
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
		<BaseModel<Page_org.mainTable>
			modalFormProps={{
				submitter: {
					searchConfig: {
						resetText: "Reject",
						submitText: "Approve",
					},
					resetButtonProps: {
						preventDefault: true,
						onClick: (e) => {
							// e.preventDefault();
						},
					},
					render: (_, dom) => {
						const restButton = dom[0];
						const newRestButton = (
							<>
								<BaseModel
									allowUpdate={false}
									readOnly={false}
									title="Confirmation reject"
									modalFormProps={{
										onFinish: async (values) => {
											// console.log("values", values);
											try {
												await _rejectOrgAdvanceApprove({
													id: org?._id,
													reason: values.reason,
												});
												message.success("Reject success");
											} catch (error) {
												message.error("Reject failed" + error);
											} finally {
												await mainTableReload?.();
												return true;
											}
										},
										width: "650px",
										submitter: {
											searchConfig: {
												submitText: "Yes",
												resetText: "No",
											},
										},
										trigger: restButton,
									}}
								>
									<Divider children="Reason" orientation="left" orientationMargin={20} />
									<ProFormTextArea
										required={true}
										rules={[
											{
												required: true,
												message: "Please enter the reason for rejection",
											},
										]}
										fieldProps={{
											placeholder: "Please enter the reason for rejection",
										}}
										name="reason"
										colProps={{ span: 18 }}
									/>
								</BaseModel>
								{/* <Popconfirm
                  title="Are you sure you want to reject this account?"
                  onConfirm={() => {
                    restButton.props.onClick(restButton.props.event);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  {restButton}
                </Popconfirm> */}
							</>
						);
						return [newRestButton, dom[1]];
					},
				},
				formRef: { ...formRef },
				clearOnDestroy: true,

				onInit: async (values, form) => {
					if (initData?._id) {
						const res = await _getOrgById(initData._id);
						// res.data.beFollowedCount = res.data.beFollowedCount.length;
						console.log("res.data", res.data);
						setOrg(res.data);
						form.setFieldsValue(res.data);
					}
				},

				onFinish: async (values) => {
					console.log("values", values);
					try {
						await _passOrgAdvanceApprove({ id: values._id });
						message.success("Pass success");
					} catch (error) {
						message.error("Pass failed");
					} finally {
						await mainTableReload?.();
						return true;
					}
				},
			}}
			allowUpdate={false}
			readOnly={true}
			// initData={org}

			title="Account Details"
		>
			<Divider children="Basic Information" orientation="left" orientationMargin={20} />
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText
					label={"Id"}
					name="_id"
					// fieldProps={{
					//   value: initData?._id,
					// }}
					colProps={leftFile}
					readonly
				/>
				<ProFormField label={"Icon"} name="icon_url" colProps={rightFile}>
					<Image src={org?.icon_url.url} width={100} />
				</ProFormField>

				<ProFormSelect
					label="Account Advanced Status"
					name="advanced_status"
					fieldProps={{
						labelInValue: false,
					}}
					colProps={leftFile}
					valueEnum={{
						0: { text: "Unapproved", status: "Error" },
						1: { text: "Waiting", status: "Processing" },
						2: { text: "Approved", status: "Success" },
					}}
				/>
				<ProFormText label={"Email"} name="email" colProps={rightFile} readonly />
				<ProFormText label={"phone pre"} name="phone_pre" colProps={leftFile} readonly />

				<ProFormText label={"phone"} name="phone" colProps={rightFile} readonly />

				<ProFormField label={"Event operation license"} name="event_operation_license" colProps={leftFile}>
					<Image src={org?.event_operation_license.url} width={100} />
				</ProFormField>
			</ProForm.Group>

			<Divider children="Business info" orientation="left" orientationMargin={20} />

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText label={"Business name"} name="business_name" colProps={{ span: 8, offset: 0 }} />
				<ProFormText label={"Business full name"} name="business_full_name" colProps={{ span: 8, offset: 6 }} />
				<ProFormText label={"Business url"} name="business_url" colProps={{ span: 8, offset: 0 }} />

				<ProFormText label={"Facebook url"} name="facebook_url" colProps={{ span: 8, offset: 6 }} />
				<ProFormText label={"Instagram url"} name="ins_url" colProps={{ span: 8, offset: 0 }} />
				<ProFormText label={"X url"} name="x_url" colProps={{ span: 8, offset: 6 }} />
				<ProFormText
					label={"Legal person name"}
					fieldProps={{
						value: org?.legal_person_first_name + " " + org?.legal_person_last_name,
					}}
					colProps={{ span: 8, offset: 0 }}
				/>
			</ProForm.Group>
			<>
				<Divider children="Bank info" orientation="left" orientationMargin={20} />

				<ProForm.Group style={{ ...groupStyle }}>
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
							dataSource={org?.bank_info}
						/>
					</ProFormField>
				</ProForm.Group>
			</>
			<Divider children="Business address info" orientation="left" orientationMargin={20} />
			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormText
					colProps={{ span: 4, offset: 0 }}
					label={"Country"}
					fieldProps={{
						value: org?.business_address.country,
					}}
				/>
				<ProFormText
					label={"City"}
					colProps={{ span: 4, offset: 6 }}
					fieldProps={{
						value: org?.business_address.city,
					}}
				/>
				<ProFormText
					label={"Address"}
					colProps={{ span: 4, offset: 6 }}
					fieldProps={{
						value: org?.business_address.address,
					}}
				/>
				<ProFormField label={"Shoot photo"} name="shoot_photo" colProps={{ span: 8, offset: 0 }}>
					{org?.pictures.map((pic: any) => <Image src={pic.url} width={100} />)}
				</ProFormField>
			</ProForm.Group>
			<Divider children="Others" orientation="left" orientationMargin={20} />

			<ProForm.Group style={{ ...groupStyle }}>
				<ProFormTextArea label={"Bio"} name="blurb" colProps={{ span: 8 }} />
			</ProForm.Group>
		</BaseModel>
	);
}
