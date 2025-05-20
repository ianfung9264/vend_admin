import { _blockOrg } from "@/services/org/info";
import { sign_in } from "@/services/sign-in";
import { ModalForm, ProFormInstance, ProFormText, ProFormTextArea } from "@ant-design/pro-components";
import { Button, ButtonProps, message } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import { useRef } from "react";

export const StrictVerifyButton = ({
	initData,
	trigger,
	title,
	reasonInputLabel,
}: {
	initData?: {
		actionFuncParams: any;
		actionFunc: (params: any) => Promise<any>;
		mainTableReload: (() => void) | undefined;
	};
	trigger: JSX.Element;
	title?: string;
	reasonInputLabel?: string;
}) => {
	const { actionFunc, actionFuncParams } = initData || {};
	const formRef = useRef<ProFormInstance>();

	return (
		<>
			<ModalForm
				formRef={formRef}
				title={title || "Are you sure you want to block this organizer?"}
				trigger={trigger}
				modalProps={{
					destroyOnClose: true,
					centered: true,
					bodyStyle: {
						maxHeight: "55vh",
						overflow: "scroll",
					},
				}}
				grid={true}
				onFinish={async (values: API.SignInData & { reason?: string }) => {
					try {
						const signInPayload = { account: values.account, password: values.password };
						const isPass = await sign_in(signInPayload).then((res) => {
							if (res.code == 200) {
								return true;
							} else {
								return false;
							}
						});
						if (isPass) {
							const finalActionFuncParams = {
								...actionFuncParams,
								...(values.reason && { reason: values.reason }),
							};
							console.log("finalActionFuncParams", finalActionFuncParams);
							await actionFunc?.(finalActionFuncParams).then((res) => {
								if (Array.isArray(res) || res?.success || res.code == 200 || res.code == 201) {
									message.success("Executed successfully");
								} else {
									message.error("Execution failed, please try again");
								}
							});
						} else {
							message.error("Execution failed: wrong account info");
						}
					} catch (error) {
						message.error("Execution failed: wrong account info");
					}
					initData?.mainTableReload?.();
					return true;
				}}
			>
				<ProFormText
					name={"account"}
					colProps={{ span: 8 }}
					label={"Account"}
					placeholder={"This is a dangerous action, please input your account"}
				/>
				<ProFormText.Password
					colProps={{ span: 8, offset: 5 }}
					name={"password"}
					label={"Password"}
					placeholder={"This is a dangerous action, please input your password"}
				/>
				{reasonInputLabel && (
					<ProFormTextArea
						name={"reason"}
						label={reasonInputLabel}
						placeholder={`Please enter the ${reasonInputLabel.toLowerCase()}`}
						colProps={{ span: 24 }}
						fieldProps={{ rows: 3 }}
					/>
				)}
			</ModalForm>
		</>
	);
};
