globalThis.makoModuleHotUpdate('src/.umi/umi.ts?hmr', {
    modules: {
        "src/app.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                getInitialState: function() {
                    return getInitialState;
                },
                layout: function() {
                    return layout;
                },
                request: function() {
                    return request;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _components = __mako_require__("src/components/index.ts");
            var _api = __mako_require__("src/services/ant-design-pro/api.ts");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
            var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
            var _requestErrorConfig = __mako_require__("src/requestErrorConfig.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const isDev = true;
            const loginPath = "/user/login";
            async function getInitialState() {
                const fetchUserInfo = async ()=>{
                    try {
                        const msg = await (0, _api.currentUser)({
                            skipErrorHandler: true
                        });
                        return msg.data;
                    } catch (error) {
                        _max.history.push(loginPath);
                    }
                    return undefined;
                };
                // 如果不是登录页面，执行
                const { location } = _max.history;
                if (location.pathname !== loginPath) {
                    const currentUser = await fetchUserInfo();
                    return {
                        fetchUserInfo,
                        currentUser,
                        settings: _defaultSettings.default
                    };
                }
                return {
                    fetchUserInfo,
                    settings: _defaultSettings.default
                };
            }
            const layout = ({ initialState, setInitialState })=>{
                var _initialState_currentUser, _initialState_currentUser1;
                return {
                    actionsRender: ()=>[
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.Question, {}, "doc", false, {
                                fileName: "src/app.tsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.SelectLang, {}, "SelectLang", false, {
                                fileName: "src/app.tsx",
                                lineNumber: 65,
                                columnNumber: 7
                            }, this)
                        ],
                    avatarProps: {
                        src: initialState === null || initialState === void 0 ? void 0 : (_initialState_currentUser = initialState.currentUser) === null || _initialState_currentUser === void 0 ? void 0 : _initialState_currentUser.avatar,
                        title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.AvatarName, {}, void 0, false, {
                            fileName: "src/app.tsx",
                            lineNumber: 69,
                            columnNumber: 14
                        }, this),
                        render: (_, avatarChildren)=>{
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.AvatarDropdown, {
                                children: avatarChildren
                            }, void 0, false, {
                                fileName: "src/app.tsx",
                                lineNumber: 71,
                                columnNumber: 16
                            }, this);
                        }
                    },
                    waterMarkProps: {
                        content: initialState === null || initialState === void 0 ? void 0 : (_initialState_currentUser1 = initialState.currentUser) === null || _initialState_currentUser1 === void 0 ? void 0 : _initialState_currentUser1.name
                    },
                    footerRender: ()=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.Footer, {}, void 0, false, {
                            fileName: "src/app.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                    onPageChange: ()=>{
                        const { location } = _max.history;
                        // 如果没有登录，重定向到 login
                        if (!(initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) && location.pathname !== loginPath) _max.history.push(loginPath);
                    },
                    bgLayoutImgList: [
                        {
                            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr",
                            left: 85,
                            bottom: 100,
                            height: "303px"
                        },
                        {
                            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr",
                            bottom: -68,
                            right: -45,
                            height: "303px"
                        },
                        {
                            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr",
                            bottom: 0,
                            left: 0,
                            width: "331px"
                        }
                    ],
                    links: isDev ? [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                            to: "/umi/plugin/openapi",
                            target: "_blank",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LinkOutlined, {}, void 0, false, {
                                    fileName: "src/app.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "OpenAPI 文档"
                                }, void 0, false, {
                                    fileName: "src/app.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, "openapi", true, {
                            fileName: "src/app.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ] : [],
                    menuHeaderRender: undefined,
                    // 自定义 403 页面
                    // unAccessible: <div>unAccessible</div>,
                    // 增加一个 loading 的状态
                    childrenRender: (children)=>{
                        // if (initialState?.loading) return <PageLoading />;
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                children,
                                isDev && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.SettingDrawer, {
                                    disableUrlParams: true,
                                    enableDarkTheme: true,
                                    settings: initialState === null || initialState === void 0 ? void 0 : initialState.settings,
                                    onSettingChange: (settings)=>{
                                        setInitialState((preInitialState)=>({
                                                ...preInitialState,
                                                settings
                                            }));
                                    }
                                }, void 0, false, {
                                    fileName: "src/app.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true);
                    },
                    ...initialState === null || initialState === void 0 ? void 0 : initialState.settings
                };
            };
            const request = {
                ..._requestErrorConfig.errorConfig,
                requestInterceptors: [
                    (_, opention)=>{}
                ]
            };
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
        }
    }
}, function(runtime) {
    runtime._h = '2232812592587723285';
    ;
});

//# sourceMappingURL=umi.2579400585710010057.hot-update.js.map