import { _blockOrg } from "@/services/org/info";
import { sign_in } from "@/services/sign-in";
import { ModalForm, ProFormText } from "@ant-design/pro-components";
import { Button, ButtonProps, message } from "antd";
import { BaseButtonProps } from "antd/es/button/button";

export const StrictVerifyButton = ({
  initData,
  trigger,
  title,
}: {
  initData?: {
    actionFuncParams: any;
    actionFunc: (params: any) => Promise<any>;
    mainTableReload: (() => void) | undefined;
  };
  trigger: JSX.Element;
  title?: string;
}) => {
  const { actionFunc, actionFuncParams } = initData || {};
  return (
    <>
      <ModalForm
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
        onFinish={async (values: API.SignInData) => {
          try {
            const isPass = await sign_in(values).then((res) => {
              if (res.code == 200) {
                return true;
              } else {
                return false;
              }
            });
            if (isPass) {
              console.log("actionFuncParams", actionFuncParams);
              await actionFunc?.(actionFuncParams).then((res) => {
                if (res.code == 200) {
                  message.success("Executed successfully");
                } else {
                  message.error("Execution failed , please try again");
                }
              });
            } else {
              message.error("Execution failed: wrong account info");
            }
          } catch (error) {
            message.error("Execution failed: wrong account info");
          }
          initData?.mainTableReload?.();
          return true; //在此返回true是为了关闭modal
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
      </ModalForm>
    </>
  );
};
