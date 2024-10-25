globalThis.makoModuleHotUpdate('src/.umi/umi.ts?hmr', {
    modules: {
        "src/.umi/core/route.tsx": function(module, exports, __mako_require__) {
            var interop = __mako_require__("@swc/helpers/_/_interop_require_wildcard")._;
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "getRoutes", {
                enumerable: true,
                get: function() {
                    return getRoutes;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            async function getRoutes() {
                const routes = {
                    "1": {
                        "path": "/user",
                        "layout": false,
                        "id": "1"
                    },
                    "2": {
                        "name": "login",
                        "path": "/user/login",
                        "parentId": "1",
                        "id": "2"
                    },
                    "3": {
                        "path": "/welcome",
                        "icon": "smile",
                        "parentId": "ant-design-pro-layout",
                        "id": "3"
                    },
                    "4": {
                        "path": "/org",
                        "icon": "team",
                        "name": "Org",
                        "parentId": "ant-design-pro-layout",
                        "id": "4"
                    },
                    "5": {
                        "path": "/tenant",
                        "icon": "userAdd",
                        "name": "Tenant",
                        "parentId": "ant-design-pro-layout",
                        "id": "5"
                    },
                    "6": {
                        "path": "/event",
                        "icon": "sound",
                        "name": "Event",
                        "parentId": "ant-design-pro-layout",
                        "id": "6"
                    },
                    "7": {
                        "path": "/transaction",
                        "icon": "dollar",
                        "name": "Transaction History",
                        "parentId": "ant-design-pro-layout",
                        "id": "7"
                    },
                    "8": {
                        "path": "/transaction/withdraw",
                        "name": "Withdraw",
                        "parentId": "7",
                        "id": "8"
                    },
                    "9": {
                        "path": "/transaction/fee",
                        "name": "Fee",
                        "parentId": "7",
                        "id": "9"
                    },
                    "10": {
                        "path": "/transaction/refund",
                        "name": "Refund",
                        "parentId": "7",
                        "id": "10"
                    },
                    "11": {
                        "path": "/approve",
                        "icon": "checkSquare",
                        "name": "Approve",
                        "parentId": "ant-design-pro-layout",
                        "id": "11"
                    },
                    "12": {
                        "path": "/approve/advanced",
                        "name": "Advanced",
                        "parentId": "11",
                        "id": "12"
                    },
                    "13": {
                        "path": "/approve/withdraw",
                        "name": "Withdraw",
                        "parentId": "11",
                        "id": "13"
                    },
                    "14": {
                        "path": "/setting",
                        "icon": "setting",
                        "name": "Setting",
                        "parentId": "ant-design-pro-layout",
                        "id": "14"
                    },
                    "15": {
                        "path": "/setting/termersCondition",
                        "name": "TermersCondition",
                        "parentId": "14",
                        "id": "15"
                    },
                    "16": {
                        "path": "/setting/privacy",
                        "name": "Privacy",
                        "parentId": "14",
                        "id": "16"
                    },
                    "17": {
                        "path": "/setting/faq",
                        "name": "FAQ",
                        "parentId": "14",
                        "id": "17"
                    },
                    "18": {
                        "path": "/setting/fee",
                        "name": "Fee",
                        "parentId": "14",
                        "id": "18"
                    },
                    "19": {
                        "path": "/setting/others",
                        "name": "Others",
                        "parentId": "14",
                        "id": "19"
                    },
                    "20": {
                        "path": "/",
                        "redirect": "/org",
                        "parentId": "ant-design-pro-layout",
                        "id": "20"
                    },
                    "21": {
                        "path": "*",
                        "layout": false,
                        "id": "21"
                    },
                    "ant-design-pro-layout": {
                        "id": "ant-design-pro-layout",
                        "path": "/",
                        "isLayout": true
                    }
                };
                return {
                    routes,
                    routeComponents: {
                        '1': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/core/EmptyRoute.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/core/EmptyRoute.tsx")))),
                        '2': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("vendors"),
                                __mako_require__.ensure("src/pages/User/Login/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/User/Login/index.tsx")))),
                        '3': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("vendors"),
                                __mako_require__.ensure("common"),
                                __mako_require__.ensure("src/pages/Org/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Org/index.tsx")))),
                        '4': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("vendors"),
                                __mako_require__.ensure("common"),
                                __mako_require__.ensure("src/pages/Org/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Org/index.tsx")))),
                        '5': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("vendors"),
                                __mako_require__.ensure("common"),
                                __mako_require__.ensure("src/pages/Tenant/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Tenant/index.tsx")))),
                        '6': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("vendors"),
                                __mako_require__.ensure("common"),
                                __mako_require__.ensure("src/pages/Event/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Event/index.tsx")))),
                        '7': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/core/EmptyRoute.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/core/EmptyRoute.tsx")))),
                        '8': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Transaction/withdraw/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Transaction/withdraw/index.tsx")))),
                        '9': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Transaction/fee/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Transaction/fee/index.tsx")))),
                        '10': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Transaction/refund/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Transaction/refund/index.tsx")))),
                        '11': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/core/EmptyRoute.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/core/EmptyRoute.tsx")))),
                        '12': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("common"),
                                __mako_require__.ensure("src/pages/Approve/advanced/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Approve/advanced/index.tsx")))),
                        '13': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Approve/withdraw/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Approve/withdraw/index.tsx")))),
                        '14': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/core/EmptyRoute.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/core/EmptyRoute.tsx")))),
                        '15': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Setting/termersCondition/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Setting/termersCondition/index.tsx")))),
                        '16': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Setting/privacy/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Setting/privacy/index.tsx")))),
                        '17': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Setting/faq/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Setting/faq/index.tsx")))),
                        '18': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Setting/fee/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Setting/fee/index.tsx")))),
                        '19': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/Setting/others/index.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/Setting/others/index.tsx")))),
                        '20': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/core/EmptyRoute.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/core/EmptyRoute.tsx")))),
                        '21': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/pages/404.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/pages/404.tsx")))),
                        'ant-design-pro-layout': /*#__PURE__*/ _react.default.lazy(()=>Promise.all([
                                __mako_require__.ensure("src/.umi/plugin-layout/Layout.tsx")
                            ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "src/.umi/plugin-layout/Layout.tsx"))))
                    }
                };
            }
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
    runtime._h = '8553190221322495735';
    ;
});

//# sourceMappingURL=umi.7708322268586403508.hot-update.js.map