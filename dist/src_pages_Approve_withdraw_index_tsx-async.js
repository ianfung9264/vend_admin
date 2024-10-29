((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Approve/withdraw/index.tsx'],
{ "src/pages/Approve/withdraw/columns.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _detailModal = _interop_require_default._(__mako_require__("src/pages/Approve/withdraw/detailModal.tsx"));
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
function WithdrawalTableColumns({ mainTableReload }) {
    return [
        {
            title: "Landowner email",
            dataIndex: "landowner",
            key: "landowner",
            render: (_, record)=>{
                return record.landowner.email;
            },
            align: "center"
        },
        {
            title: "Landowner wallet",
            dataIndex: "landowner",
            key: "landowner",
            render: (_, record)=>{
                return record.landowner.wallet;
            },
            align: "center"
        },
        {
            title: "Withdrawal Amount",
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
            title: "Date",
            dataIndex: "createdAt",
            key: "created_at",
            align: "center",
            valueType: "dateTime"
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
            render: (_, record)=>(0, _jsxdevruntime.jsxDEV)("span", {
                    children: record.progress === _commonType.WithdrawalProgress.WAITING_FOR_APPROVE || record.progress === _commonType.WithdrawalProgress.APPROVED_PROGRESSING ? (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                        initData: record,
                        mainTableReload: mainTableReload
                    }, void 0, false, {
                        fileName: "src/pages/Approve/withdraw/columns.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this) : (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "text",
                        icon: (0, _jsxdevruntime.jsxDEV)(_icons.InfoCircleOutlined, {}, void 0, false, void 0, void 0),
                        disabled: true
                    }, void 0, false, {
                        fileName: "src/pages/Approve/withdraw/columns.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Approve/withdraw/columns.tsx",
                    lineNumber: 84,
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
"src/pages/Approve/withdraw/detailModal.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return DetailModal;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _BaseModel = _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _commonType = __mako_require__("src/services/commonType.ts");
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
function DetailModal({ initData, mainTableReload }) {
    _s();
    const formRef = (0, _react.useRef)();
    const leftFile = {
        span: 8,
        offset: 0
    };
    const rightFile = {
        span: 8,
        offset: 6
    };
    const [statusSelection, setStatusSelection] = (0, _react.useState)([]);
    const groupStyle = {
        backgroundColor: "white",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "6px",
        borderBottom: 3,
        borderColor: "black"
    };
    return (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
        modalFormProps: {
            submitter: {
                searchConfig: {
                    resetText: "Reject",
                    submitText: "Confirm"
                },
                resetButtonProps: {
                    preventDefault: false
                },
                render: (_, dom)=>{
                    const restButton = dom[0];
                    const newRestButton = (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                        children: (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                            allowUpdate: false,
                            readOnly: false,
                            title: "Confirmation reject",
                            modalFormProps: {
                                onFinish: async (values)=>{
                                    try {
                                        await (0, _info._rejectWithdrawal)({
                                            withdrawalId: initData._id,
                                            reason: values.reason
                                        });
                                        _antd.message.success("Reject success");
                                    } catch (error) {
                                        _antd.message.error("Reject failed" + error);
                                    } finally{
                                        var _formRef_current;
                                        console.log("formRef.current", formRef.current);
                                        (_formRef_current = formRef.current) === null || _formRef_current === void 0 || _formRef_current.submit();
                                        await (mainTableReload === null || mainTableReload === void 0 ? void 0 : mainTableReload());
                                        return true;
                                    }
                                },
                                width: "650px",
                                submitter: {
                                    searchConfig: {
                                        submitText: "Yes",
                                        resetText: "No"
                                    }
                                },
                                trigger: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                    children: "Reject"
                                }, void 0, false, void 0, void 0)
                            },
                            children: [
                                (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                                    children: "Reason",
                                    orientation: "left",
                                    orientationMargin: 20
                                }, void 0, false, void 0, void 0),
                                (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                    required: true,
                                    rules: [
                                        {
                                            required: true,
                                            message: "Please enter the reason for rejection"
                                        }
                                    ],
                                    fieldProps: {
                                        placeholder: "Please enter the reason for rejection"
                                    },
                                    name: "reason",
                                    colProps: {
                                        span: 18
                                    }
                                }, void 0, false, void 0, void 0)
                            ]
                        }, void 0, true, void 0, void 0)
                    }, void 0, false);
                    return [
                        newRestButton,
                        dom[1]
                    ];
                }
            },
            formRef: {
                ...formRef
            },
            clearOnDestroy: true,
            onInit (values, form) {
                formRef.current = form;
                switch(initData.progress){
                    case _commonType.WithdrawalProgress.WAITING_FOR_APPROVE:
                        setStatusSelection([
                            {
                                label: "Progressing",
                                value: _commonType.WithdrawalProgress.APPROVED_PROGRESSING
                            }
                        ]);
                        break;
                    case _commonType.WithdrawalProgress.APPROVED_PROGRESSING:
                        setStatusSelection([
                            {
                                label: "Approve",
                                value: _commonType.WithdrawalProgress.APPROVED_COMPLETED
                            }
                        ]);
                        break;
                    case _commonType.WithdrawalProgress.APPROVED_COMPLETED:
                        setStatusSelection([]);
                        break;
                    case _commonType.WithdrawalProgress.REJECTED:
                        setStatusSelection([]);
                        break;
                }
            },
            onFinish: async (values)=>{
                console.log("values", values);
                if (!values.progress) return true;
                if (initData) try {
                    await (0, _info._updateWithdrawalProgress)({
                        withdrawalId: initData._id,
                        progress: values.progress
                    });
                    _antd.message.success("Update success");
                } catch (error) {
                    _antd.message.error("Update failed");
                } finally{
                    await (mainTableReload === null || mainTableReload === void 0 ? void 0 : mainTableReload());
                    return true;
                }
            }
        },
        allowUpdate: false,
        readOnly: false,
        title: "Approve withdrawal",
        children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
            style: groupStyle,
            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                label: "Chose withdrawal status",
                name: "progress",
                colProps: leftFile,
                options: statusSelection
            }, void 0, false, {
                fileName: "src/pages/Approve/withdraw/detailModal.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Approve/withdraw/detailModal.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Approve/withdraw/detailModal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "DmYGWn2nTQ5Thj7/tnal7N68Byc=");
_c = DetailModal;
var _c;
$RefreshReg$(_c, "DetailModal");
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
"src/pages/Approve/withdraw/index.tsx": function (module, exports, __mako_require__){
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
var _columns = __mako_require__("src/pages/Approve/withdraw/columns.tsx");
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
            title: "Org withdrawal approval page",
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
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
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        tooltip: (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                "- When this application is Waiting, you can only change to Progressing or Rejected.",
                                (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, void 0, void 0),
                                "- When this application is Progressing, you can only change to Approved or Rejected.",
                                (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, void 0, void 0),
                                "- When this application is Approved or Rejected, you can't change anything."
                            ]
                        }, void 0, true),
                        headerTitle: "Withdrawal approval List",
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

},
 }]);
//# sourceMappingURL=src_pages_Approve_withdraw_index_tsx-async.js.map