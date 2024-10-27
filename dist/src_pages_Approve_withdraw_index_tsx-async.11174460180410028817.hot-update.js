globalThis.makoModuleHotUpdate('src/pages/Approve/withdraw/index.tsx', {
    modules: {
        "src/pages/Approve/withdraw/columns.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "WithdrawalTableColumns", {
                enumerable: true,
                get: function() {
                    return WithdrawalTableColumns;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _detailModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Approve/withdraw/detailModal.tsx"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function WithdrawalTableColumns({ mainTableReload }) {
                // console.log("mainTableReload", mainTableReload);
                // const [tableReload, setTableReload] = useState(() => mainTableReload);
                // useEffect(() => {
                //   setTableReload(() => mainTableReload);
                // }, [mainTableReload]);
                return [
                    {
                        title: "landowner",
                        dataIndex: "landowner",
                        key: "landowner",
                        render: (_, record)=>{
                            return record.landowner.email;
                        },
                        align: "center"
                    },
                    {
                        title: "Amount",
                        dataIndex: "amount",
                        key: "amount",
                        align: "center"
                    },
                    {
                        title: "Currency",
                        dataIndex: "currency",
                        key: "currency",
                        align: "center"
                    },
                    {
                        title: "Progress",
                        dataIndex: "progress",
                        key: "progress",
                        align: "center"
                    },
                    {
                        title: "Rejected Reason",
                        dataIndex: "rejected_reason",
                        key: "wallet",
                        align: "center"
                    },
                    {
                        title: "_id",
                        dataIndex: "event_idCount",
                        key: "_id",
                        align: "center",
                        hidden: true
                    },
                    {
                        title: "Actions",
                        dataIndex: "action",
                        key: "action",
                        render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                                    initData: record,
                                    mainTableReload: mainTableReload
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/withdraw/columns.tsx",
                                    lineNumber: 66,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Approve/withdraw/columns.tsx",
                                lineNumber: 65,
                                columnNumber: 9
                            }, this),
                        align: "center"
                    }
                ];
            }
            _c = WithdrawalTableColumns;
            var _c;
            $RefreshReg$(_c, "WithdrawalTableColumns");
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
        "src/pages/Approve/withdraw/index.tsx": function(module, exports, __mako_require__) {
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
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _BaseIndex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseIndex.tsx"));
            var _BaseSearch = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseSearch.tsx"));
            var _BaseTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseTable.tsx"));
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _columns = __mako_require__("src/pages/Approve/withdraw/columns.tsx");
            var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
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
                /**********************************狀態管理**********************************/ const actionRef = (0, _react.useRef)();
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
                /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
                        title: "Org advanced approval page",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                                title: "Search bar",
                                submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                                inputProps: {
                                    value: searchKey,
                                    onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Approve/withdraw/index.tsx",
                                lineNumber: 34,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                                searchKey: searchKey,
                                props: {
                                    headerTitle: "Advanced approval List",
                                    actionRef: actionRef,
                                    columns: (0, _columns.WithdrawalTableColumns)({
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
                                fileName: "src/pages/Approve/withdraw/index.tsx",
                                lineNumber: 42,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Approve/withdraw/index.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Approve/withdraw/index.tsx",
                    lineNumber: 32,
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
        }
    }
}, function(runtime) {
    runtime._h = '11048810256743656004';
    ;
});

//# sourceMappingURL=src_pages_Approve_withdraw_index_tsx-async.11174460180410028817.hot-update.js.map