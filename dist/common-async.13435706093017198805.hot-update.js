globalThis.makoModuleHotUpdate('common', {
    modules: {
        "src/pages/Setting/faq/index.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return Index;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _BaseIndex = _interop_require_default._(__mako_require__("src/components/Base/BaseIndex.tsx"));
            var _BaseSearch = _interop_require_default._(__mako_require__("src/components/Base/BaseSearch.tsx"));
            var _BaseTable = _interop_require_default._(__mako_require__("src/components/Base/BaseTable.tsx"));
            var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _searchHelper = _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
            var _info = __mako_require__("src/services/withdrawal/info.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            function Index() {
                var _actionRef_current;
                _s();
                const actionRef = (0, _react.useRef)();
                const [searchKey, setSearchKey] = (0, _react.useState)("");
                const [reload, setReload] = (0, _react.useState)(()=>{
                    var _actionRef_current;
                    return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
                });
                const [allOrgData, setAllOrgData] = (0, _react.useState)([]);
                (0, _react.useEffect)(()=>{
                    setReload(()=>{
                        var _actionRef_current;
                        return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
                    });
                }, []);
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    children: (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
                        title: "FAQ page",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                                title: "Search bar",
                                submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                                inputProps: {
                                    value: searchKey,
                                    onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Setting/faq/index.tsx",
                                lineNumber: 33,
                                columnNumber: 9
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                                searchKey: searchKey,
                                props: {
                                    headerTitle: "Withdrawal approval List",
                                    actionRef: actionRef,
                                    columns: WithdrawalTableColumns({
                                        mainTableReload: reload
                                    }),
                                    request: async ()=>{
                                        const dataSource = await (0, _info._getAlWithdrawal)().then((data)=>{
                                            console.log("withdrawal data: ", data);
                                            return {
                                                success: true,
                                                data: data
                                            };
                                        });
                                        if (searchKey) {
                                            dataSource.data = (0, _searchHelper.default)({
                                                dataSource: dataSource.data,
                                                keyWord: searchKey
                                            });
                                            return dataSource;
                                        } else return dataSource;
                                    }
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Setting/faq/index.tsx",
                                lineNumber: 41,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/faq/index.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/index.tsx",
                    lineNumber: 31,
                    columnNumber: 5
                }, this);
            }
            _s(Index, "xZLVRbXBouwaYIFeFEB0d/mnvTs=");
            _c = Index;
            var _c;
            $RefreshReg$(_c, "Index");
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
        "src/util/searchHelper.ts": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return Helper;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function Helper({ dataSource, keyWord }) {
                const judgeReturn = (value, keyWordString)=>{
                    return value.toLowerCase().includes(keyWordString.toLowerCase());
                };
                return dataSource.filter((item)=>{
                    const keyList = Object.keys(item);
                    const judgeResout = keyList.map((key)=>{
                        if (item[key] && typeof item[key] == "string" && typeof keyWord == "string") return judgeReturn(item[key], keyWord);
                        else if (item[key] && typeof item[key] == "number" && typeof keyWord == "number") {
                            const valueString = item[key].toString();
                            const keyWordString = keyWord.toString();
                            return judgeReturn(valueString, keyWordString);
                        } else if (item[key] && typeof item[key] == "string" && typeof keyWord == "number") {
                            const keyWordString = keyWord.toString();
                            return judgeReturn(item[key], keyWordString);
                        } else if (item[key] && typeof item[key] == "number" && typeof keyWord == "string") {
                            const valueString = item[key].toString();
                            return judgeReturn(valueString, keyWord);
                        }
                    });
                    return judgeResout.includes(true);
                });
            }
            _c = Helper;
            var _c;
            $RefreshReg$(_c, "Helper");
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
        "src/services/withdrawal/info.ts": function(module, exports, __mako_require__) {
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
                _getAlWithdrawal: function() {
                    return _getAlWithdrawal;
                },
                _rejectWithdrawal: function() {
                    return _rejectWithdrawal;
                },
                _updateWithdrawalProgress: function() {
                    return _updateWithdrawalProgress;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _max = __mako_require__("src/.umi/exports.ts");
            var _commonType = __mako_require__("src/services/commonType.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const _getAlWithdrawal = async ()=>{
                return (0, _max.request)(" /api/v1/admin/private/withdrawal/all", {
                    method: "get"
                });
            };
            const _rejectWithdrawal = async (data)=>{
                return (0, _max.request)(`/api/v1/admin/private/withdrawal/${data.withdrawalId}`, {
                    method: "put",
                    data: {
                        rejected_reason: data.reason,
                        progress: _commonType.WithdrawalProgress.REJECTED
                    }
                });
            };
            const _updateWithdrawalProgress = async (data)=>{
                console.log("data", data);
                return (0, _max.request)(`/api/v1/admin/private/withdrawal/${data.withdrawalId}`, {
                    method: "put",
                    data: {
                        progress: data.progress
                    }
                });
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
        },
        "src/components/Base/BaseIndex.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return BaseIndex;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function BaseIndex({ title, children }) {
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "min-h-screen min-w",
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            className: "w-[100%] h-[80px] bg-[#FAFAFA] text-[18px] flex items-center pl-[24px] font-[400]",
                            children: title
                        }, void 0, false, {
                            fileName: "src/components/Base/BaseIndex.tsx",
                            lineNumber: 18,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            className: " min-h-[auto] m-[24px] flex flex-col gap-[24px]",
                            children: children
                        }, void 0, false, {
                            fileName: "src/components/Base/BaseIndex.tsx",
                            lineNumber: 21,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Base/BaseIndex.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this);
            }
            _c = BaseIndex;
            var _c;
            $RefreshReg$(_c, "BaseIndex");
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
        "src/components/Base/BaseSearch.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return BaseSearch;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function BaseSearch({ title, inputProps, submitFun }) {
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "w-auto h-[130px] bg-white p-[24px] rounded-[4px] flex gap-[24px] flex-col",
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            children: title
                        }, void 0, false, {
                            fileName: "src/components/Base/BaseSearch.tsx",
                            lineNumber: 21,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            className: "flex gap-[16px]",
                            children: [
                                (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                    prefix: (0, _jsxdevruntime.jsxDEV)(_icons.SearchOutlined, {
                                        className: "mr-[24px]"
                                    }, void 0, false, void 0, void 0),
                                    placeholder: "search...",
                                    onPressEnter: ()=>{
                                        if (submitFun) submitFun();
                                    },
                                    ...inputProps
                                }, void 0, false, {
                                    fileName: "src/components/Base/BaseSearch.tsx",
                                    lineNumber: 23,
                                    columnNumber: 9
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                    type: "primary",
                                    onClick: ()=>{
                                        if (submitFun) submitFun();
                                    },
                                    style: {
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: 6,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        padding: 16
                                    },
                                    children: "start"
                                }, void 0, false, {
                                    fileName: "src/components/Base/BaseSearch.tsx",
                                    lineNumber: 31,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Base/BaseSearch.tsx",
                            lineNumber: 22,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Base/BaseSearch.tsx",
                    lineNumber: 20,
                    columnNumber: 5
                }, this);
            }
            _c = BaseSearch;
            var _c;
            $RefreshReg$(_c, "BaseSearch");
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
    runtime._h = '16932741897677758714';
    ;
});

//# sourceMappingURL=common-async.13435706093017198805.hot-update.js.map