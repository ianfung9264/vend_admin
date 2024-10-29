((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Setting/faq/index.tsx'],
{ "src/pages/Setting/faq/columns.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "QuestionTableColumns", {
    enumerable: true,
    get: function() {
        return QuestionTableColumns;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _detailModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Setting/faq/detailModal.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function QuestionTableColumns({ mainTableReload }) {
    // console.log("mainTableReload", mainTableReload);
    // const [tableReload, setTableReload] = useState(() => mainTableReload);
    // useEffect(() => {
    //   setTableReload(() => mainTableReload);
    // }, [mainTableReload]);
    return [
        {
            title: "Question",
            dataIndex: "question",
            key: "landowner",
            align: "center"
        },
        {
            title: "Answer",
            dataIndex: "answer",
            key: "answer",
            align: "center"
        },
        {
            title: "Status",
            dataIndex: "isDisplay",
            key: "isDisplay",
            align: "center",
            valueEnum: {
                true: {
                    text: "Show",
                    key: "true"
                },
                false: {
                    text: "Hidden",
                    key: "false"
                }
            }
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
                        fileName: "src/pages/Setting/faq/columns.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/columns.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
            align: "center"
        }
    ];
}
_c = QuestionTableColumns;
var _c;
$RefreshReg$(_c, "QuestionTableColumns");
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
"src/pages/Setting/faq/detailModal.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _BaseModel = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _faq = __mako_require__("src/services/setting/faq.ts");
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
    /**********************************狀態管理**********************************/ // const formRef = useRef<ProFormInstance>();
    const [formRef, setFormRef] = (0, _react.useState)();
    (0, _react.useEffect)(()=>{
        console.log("formRef", formRef);
    }, [
        initData
    ]);
    /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ const groupStyle = {
        backgroundColor: "white",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "6px",
        borderBottom: 3,
        borderColor: "black"
    };
    /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ // const fetchOrgData = async (id: string) => {
    //   try {
    //     const res = await _getOrgById(id);
    //     console.log("res.data", res.data);
    //     setOrg(res.data);
    //     formRef.current?.setFieldsValue(res.data);
    //   } catch (error) {
    //     console.error("获取组织数据失败:", error);
    //   }
    // };
    /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
        submit: formRef === null || formRef === void 0 ? void 0 : formRef.submit,
        allowUpdate: true,
        title: "Faq Details",
        modalFormProps: {
            initialValues: {
                initData
            },
            style: {
                minHeight: "20vh"
            },
            clearOnDestroy: true,
            onInit: async (values, form)=>{
                console.log("form", form);
                setFormRef(form);
                form.setFieldsValue(initData);
            },
            onFinish: async (value)=>{
                console.log("value", value);
                if (initData) {
                    value._id = initData === null || initData === void 0 ? void 0 : initData._id;
                    if (value.isDisplay) value.isDisplay = JSON.parse(value.isDisplay);
                    try {
                        await (0, _faq._updateFaq)(value);
                        _antd.message.success("Create faq success");
                    } catch (error) {
                        _antd.message.error("Create faq failed");
                    } finally{
                        mainTableReload === null || mainTableReload === void 0 || mainTableReload();
                        return true;
                    }
                }
            }
        },
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
            style: {
                ...groupStyle
            },
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                    label: "Question",
                    name: "question",
                    colProps: {
                        span: 8,
                        offset: 0
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/detailModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                    label: "IsDisplay",
                    name: "isDisplay",
                    fieldProps: {
                        defaultValue: initData === null || initData === void 0 ? void 0 : initData.isDisplay
                    },
                    options: [
                        {
                            label: "Show",
                            value: "true"
                        },
                        {
                            label: "Hidden",
                            value: "false"
                        }
                    ],
                    colProps: {
                        span: 8,
                        offset: 6
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/detailModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                    label: "Answer",
                    name: "answer",
                    colProps: {
                        span: 8,
                        offset: 0
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/detailModal.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/faq/detailModal.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Setting/faq/detailModal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "eRQzozOZ6WAWqnT5CCdzijtx9Tg=");
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
"src/pages/Setting/faq/index.tsx": function (module, exports, __mako_require__){
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
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _columns = __mako_require__("src/pages/Setting/faq/columns.tsx");
var _faq = __mako_require__("src/services/setting/faq.ts");
var _BaseModel = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
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
            title: "FAQ page",
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/index.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Withdrawal approval List",
                        actionRef: actionRef,
                        optionsRender (props, defaultDom) {
                            const createFaq = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                allowUpdate: false,
                                readOnly: false,
                                modalFormProps: {
                                    onFinish: async (value)=>{
                                        try {
                                            await (0, _faq._postFaq)(value);
                                            _antd.message.success("Create faq success");
                                        } catch (error) {
                                            _antd.message.error("Create faq failed");
                                        } finally{
                                            var _actionRef_current;
                                            (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 || _actionRef_current.reload();
                                            return true;
                                        }
                                    },
                                    grid: true,
                                    trigger: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.PlusSquareOutlined, {}, void 0, false, void 0, void 0),
                                        type: "text"
                                    }, void 0, false, void 0, void 0),
                                    submitter: {
                                        searchConfig: {
                                            resetText: "reset",
                                            submitText: "confirm"
                                        }
                                    }
                                },
                                title: "New faq",
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        colProps: {
                                            span: 18
                                        },
                                        label: "Question",
                                        name: "question"
                                    }, void 0, false, void 0, void 0),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        colProps: {
                                            span: 18
                                        },
                                        label: "Answer",
                                        name: "answer"
                                    }, void 0, false, void 0, void 0)
                                ]
                            }, void 0, true, void 0, void 0);
                            return [
                                createFaq,
                                ...defaultDom
                            ];
                        },
                        columns: (0, _columns.QuestionTableColumns)({
                            mainTableReload: reload
                        }),
                        request: async ()=>{
                            const dataSource = await (0, _faq._getAllFaq)().then(({ data })=>{
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
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/faq/index.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Setting/faq/index.tsx",
        lineNumber: 35,
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
"src/services/setting/faq.ts": function (module, exports, __mako_require__){
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
    _getAllFaq: function() {
        return _getAllFaq;
    },
    _postFaq: function() {
        return _postFaq;
    },
    _updateFaq: function() {
        return _updateFaq;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const _getAllFaq = async ()=>{
    return (0, _max.request)("/api/v1/admin/private/faq/all", {
        method: "get"
    });
};
const _postFaq = async (data)=>{
    return (0, _max.request)("/api/v1/admin/private/faq", {
        method: "post",
        data
    });
};
const _updateFaq = async (data)=>{
    return (0, _max.request)("/api/v1/admin/private/faq", {
        method: "put",
        data
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
 }]);
//# sourceMappingURL=src_pages_Setting_faq_index_tsx-async.js.map