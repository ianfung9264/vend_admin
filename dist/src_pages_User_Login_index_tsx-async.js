((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/User/Login/index.tsx'],
{ "src/pages/User/Login/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _components = __mako_require__("src/components/index.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _signin = __mako_require__("src/services/sign-in.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        action: {
            marginLeft: "8px",
            color: "rgba(0, 0, 0, 0.2)",
            fontSize: "24px",
            verticalAlign: "middle",
            cursor: "pointer",
            transition: "color 0.3s",
            "&:hover": {
                color: token.colorPrimaryActive
            }
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: "42px",
            position: "fixed",
            right: 16,
            borderRadius: token.borderRadius,
            ":hover": {
                backgroundColor: token.colorBgTextHover
            }
        },
        container: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "auto",
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: "100% 100%"
        }
    };
});
const LoginMessage = ({ content })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
        style: {
            marginBottom: 24
        },
        message: content,
        type: "error",
        showIcon: true
    }, void 0, false, {
        fileName: "src/pages/User/Login/index.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
};
_c = LoginMessage;
const Login = ()=>{
    _s();
    const [userLoginState, setUserLoginState] = (0, _react.useState)();
    const [type, setType] = (0, _react.useState)("account");
    const { initialState, setInitialState } = (0, _max.useModel)("@@initialState");
    const { styles } = useStyles();
    const intl = (0, _max.useIntl)();
    const fetchUserInfo = async (values)=>{
        const userInfo = (await (0, _signin.sign_in)(values)).data;
        // if (userInfo) {
        //   console.log("userInfo", userInfo);
        //   setInitialState((s) => ({
        //     ...s,
        //     currentUser: { id: userInfo.id, token: userInfo.token },
        //   }));
        // }
        return userInfo;
    };
    const handleSubmit = async (values)=>{
        try {
            // 登录
            console.log("handleSubmit");
            await fetchUserInfo(values);
            const msg = await (0, _signin.sign_in)(values);
            console.log("msg", msg);
            if (msg) {
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: "pages.login.success",
                    defaultMessage: "登录成功！"
                });
                _antd.message.success(defaultLoginSuccessMessage);
                new URL(window.location.href).searchParams;
                localStorage.setItem("account", values.account);
                localStorage.setItem("password", values.password);
                localStorage.setItem("token", msg.data.token);
                localStorage.setItem("id", msg.data.id);
                _max.history.push("/org");
                return;
            }
            console.log(msg);
        // 如果失败去设置用户错误信息
        } catch (error) {
            const defaultLoginFailureMessage = intl.formatMessage({
                id: "pages.login.failure",
                defaultMessage: "登录失败，请重试！"
            });
            console.log(error);
            _antd.message.error(defaultLoginFailureMessage);
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    flex: "1",
                    padding: "32px 0"
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                    contentStyle: {
                        minWidth: 280,
                        maxWidth: "75vw"
                    },
                    title: "Vend admin",
                    subTitle: "The best vend platform of the word",
                    initialValues: {
                        autoLogin: true
                    },
                    onFinish: async (values)=>{
                        await handleSubmit(values);
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
                            activeKey: type,
                            onChange: setType,
                            centered: true,
                            items: [
                                {
                                    key: "account",
                                    label: intl.formatMessage({
                                        id: "pages.login.accountLogin.tab",
                                        defaultMessage: "Account Login "
                                    })
                                }
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "account",
                                    fieldProps: {
                                        size: "large",
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, void 0, void 0)
                                    },
                                    placeholder: intl.formatMessage({
                                        id: "pages.login.username.placeholder",
                                        defaultMessage: "account"
                                    }),
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.username.required",
                                                defaultMessage: "Account is required"
                                            }, void 0, false, void 0, void 0)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "password",
                                    fieldProps: {
                                        size: "large",
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, void 0, void 0)
                                    },
                                    placeholder: intl.formatMessage({
                                        id: "pages.login.password.placeholder",
                                        defaultMessage: "password"
                                    }),
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.password.required",
                                                defaultMessage: "Please input password"
                                            }, void 0, false, void 0, void 0)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.Footer, {}, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/User/Login/index.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
_s(Login, "oxR5jRNqOrQB33H5Bruja3ZGWt4=", false, function() {
    return [
        _max.useModel,
        useStyles,
        _max.useIntl
    ];
});
_c1 = Login;
var _default = Login;
var _c;
var _c1;
$RefreshReg$(_c, "LoginMessage");
$RefreshReg$(_c1, "Login");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=src_pages_User_Login_index_tsx-async.js.map