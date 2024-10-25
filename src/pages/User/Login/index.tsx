import { Footer } from "@/components";
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import {
  FormattedMessage,
  Helmet,
  history,
  SelectLang,
  useIntl,
  useModel,
} from "@umijs/max";
import { Alert, message, Tabs } from "antd";
import { createStyles } from "antd-style";
import React, { useState } from "react";
import { flushSync } from "react-dom";
import Settings from "../../../../config/defaultSettings";
import { sign_in } from "@/services/sign-in";

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: "8px",
      color: "rgba(0, 0, 0, 0.2)",
      fontSize: "24px",
      verticalAlign: "middle",
      cursor: "pointer",
      transition: "color 0.3s",
      "&:hover": {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: "42px",
      position: "fixed",
      right: 16,
      borderRadius: token.borderRadius,
      ":hover": {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "auto",
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: "100% 100%",
    },
  };
});

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] =
    useState<API.DefaultObjectResponse<API.Staff>>();
  const [type, setType] = useState<string>("account");
  const { initialState, setInitialState } = useModel("@@initialState");
  const { styles } = useStyles();
  const intl = useIntl();

  const fetchUserInfo = async (values: any) => {
    const userInfo = (await sign_in(values)).data;
    // if (userInfo) {
    //   console.log("userInfo", userInfo);
    //   setInitialState((s) => ({
    //     ...s,
    //     currentUser: { id: userInfo.id, token: userInfo.token },
    //   }));
    // }
    return userInfo;
  };

  const handleSubmit = async (values: API.SignInData) => {
    try {
      // 登录
      console.log("handleSubmit");
      await fetchUserInfo(values);
      const msg = await sign_in(values);
      console.log("msg", msg);
      if (msg) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: "pages.login.success",
          defaultMessage: "登录成功！",
        });
        message.success(defaultLoginSuccessMessage);
        const urlParams = new URL(window.location.href).searchParams;
        localStorage.setItem("account", values.account);
        localStorage.setItem("password", values.password);
        localStorage.setItem("token", msg.data.token);
        localStorage.setItem("id", msg.data.id);

        history.push("/org");

        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: "pages.login.failure",
        defaultMessage: "登录失败，请重试！",
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          flex: "1",
          padding: "32px 0",
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: "75vw",
          }}
          title="Vend admin"
          subTitle={"The best vend platform of the word"}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.SignInData);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: "account",
                label: intl.formatMessage({
                  id: "pages.login.accountLogin.tab",
                  defaultMessage: "Account Login ",
                }),
              },
            ]}
          />

          <>
            <ProFormText
              name="account"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: "pages.login.username.placeholder",
                defaultMessage: "account",
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="Account is required"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: "pages.login.password.placeholder",
                defaultMessage: "password",
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="Please input password"
                    />
                  ),
                },
              ]}
            />
          </>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
