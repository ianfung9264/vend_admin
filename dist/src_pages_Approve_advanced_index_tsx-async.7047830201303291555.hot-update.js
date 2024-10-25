globalThis.makoModuleHotUpdate('src/pages/Approve/advanced/index.tsx', {
    modules: {
        "src/pages/Approve/advanced/columns.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "OrgTableColumns", {
                enumerable: true,
                get: function() {
                    return OrgTableColumns;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _detailModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Approve/advanced/detailModal.tsx"));
            var _commonType = __mako_require__("src/services/commonType.ts");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function OrgTableColumns({ mainTableReload }) {
                // console.log("mainTableReload", mainTableReload);
                // const [tableReload, setTableReload] = useState(() => mainTableReload);
                // useEffect(() => {
                //   setTableReload(() => mainTableReload);
                // }, [mainTableReload]);
                return [
                    {
                        title: "Business Name",
                        dataIndex: "business_name",
                        key: "business_name",
                        align: "center"
                    },
                    {
                        title: "Full Business Name",
                        dataIndex: "business_full_name",
                        key: "business_full_name",
                        align: "center"
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                        key: "email",
                        align: "center"
                    },
                    {
                        title: "Wallet Balance",
                        dataIndex: "wallet",
                        key: "wallet",
                        render: (text)=>{
                            var _Number;
                            return `$${(_Number = Number(text)) === null || _Number === void 0 ? void 0 : _Number.toFixed(2)}`;
                        },
                        align: "center"
                    },
                    {
                        title: "Event Count",
                        dataIndex: "eventCount",
                        key: "eventCount",
                        align: "center"
                    },
                    {
                        title: "Followers Count",
                        dataIndex: "be_followed_count",
                        key: "be_followed_count",
                        align: "center"
                    },
                    {
                        title: "Type",
                        dataIndex: "advanced_status",
                        key: "advanced_status",
                        valueType: "select",
                        valueEnum: {
                            0: {
                                text: "Normal",
                                status: "Default"
                            },
                            2: {
                                text: "Advanced",
                                status: "Success"
                            }
                        },
                        align: "center"
                    },
                    {
                        title: "Actions",
                        dataIndex: "action",
                        key: "action",
                        render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                children: record.advanced_status === _commonType.LandownerAdvancedStatus.APPROVED ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                                    title: "Account is not approved yet",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "text",
                                        disabled: true,
                                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.InfoCircleOutlined, {}, void 0, false, void 0, void 0)
                                    }, void 0, false, {
                                        fileName: "src/pages/Approve/advanced/columns.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/columns.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                                    initData: record,
                                    mainTableReload: mainTableReload
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/columns.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Approve/advanced/columns.tsx",
                                lineNumber: 73,
                                columnNumber: 9
                            }, this),
                        align: "center"
                    }
                ];
            }
            _c = OrgTableColumns;
            var _c;
            $RefreshReg$(_c, "OrgTableColumns");
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
    runtime._h = '1157967515027622929';
    ;
});

//# sourceMappingURL=src_pages_Approve_advanced_index_tsx-async.7047830201303291555.hot-update.js.map