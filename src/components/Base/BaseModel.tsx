import { InfoCircleOutlined } from "@ant-design/icons";
import { ModalForm, ModalFormProps, ProFormInstance } from "@ant-design/pro-components";
import { Button, ModalProps } from "antd";
import { ReactElement, useRef, useState } from "react";
export default function BaseModel<T = Record<string, any>, U = Record<string, any>>({
	children,
	modalFormProps,
	title,
	initData,
	readOnly,
	modalProps,
	loading = false,
	allowUpdate = true,
	submit,
	trigger,
}: {
	modalFormProps?: ModalFormProps<T, U>;
	modalProps?: ModalProps;
	children: ReactElement[] | ReactElement;
	title: string;
	initData?: Record<string, any>;
	readOnly?: boolean;
	allowUpdate?: boolean;
	submit?: () => void;
	loading?: boolean;
	trigger?: ReactElement;
}) {
	/**********************************狀態管理**********************************/
	const [readonly, setReadonly] = useState(true);
	const formRef = useRef<ProFormInstance>();
	//   useEffect(() => {
	//     formRef.current?.setFieldsValue(initData);
	//   }, [initData]);
	/**********************************狀態管理**********************************/
	/**********************************組件初始化**********************************/
	/**********************************組件初始化**********************************/
	/**********************************異步函數**********************************/
	/**********************************異步函數**********************************/
	return (
		<ModalForm<T, U>
			autoComplete={"nope"}
			// trigger={<Button type="text" icon={<InfoCircleOutlined />}></Button>}
			trigger={
				trigger ?? <Button type="text" icon={<InfoCircleOutlined />}></Button>
			}
			title={
				<div className="w-[auto] pl-[0px] pr-[68px] pb-4 flex justify-between">
					<div className="py-[4px]">{title}</div>
					{allowUpdate && (
						<div className="flex gap-[8px]">
							{readonly ? (
								<></>
							) : (
								<Button
									type="primary"
									onClick={() => {
										if (submit) {
											submit();
										}
										setReadonly(true);
									}}
								>
									提交
								</Button>
							)}
							<Button
								type="text"
								style={{
									display: "flex",
									color: readonly ? "#1890FF" : "black",
									backgroundColor: readonly ? "" : "#CCCCCC",
									alignItems: "start",
								}}
								onClick={() => {
									setReadonly((pre) => !pre);
								}}
							>
								{readonly ? "修改" : "取消"}
							</Button>
						</div>
					)}
				</div>
			}
			modalProps={{
				destroyOnClose: true,
				centered: true,
				bodyStyle: {
					maxHeight: "55vh",
					overflow: "scroll",
					overflowX: "hidden",
				},
				onCancel: () => {
					setReadonly(true);
				},
				...modalProps,
			}}
			grid={true}
			readonly={readOnly ?? readonly}
			submitter={false}
			{...modalFormProps}
		>
			{children}
		</ModalForm>
	);
}
