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
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Approve/withdraw/columns.tsx",
                                lineNumber: 64,
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
        }
    }
}, function(runtime) {
    runtime._h = '10740499908230290439';
    ;
});

//# sourceMappingURL=src_pages_Approve_withdraw_index_tsx-async.12245386130925984781.hot-update.js.map