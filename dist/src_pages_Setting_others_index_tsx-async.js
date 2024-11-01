((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Setting/others/index.tsx'],
{ "src/pages/Setting/others/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default" //
, {
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
var _BaseModel = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
var _BaseSearch = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseSearch.tsx"));
var _BaseTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseTable.tsx"));
var _others = __mako_require__("src/services/setting/others.ts");
var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
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
    _s();
    /**********************************狀態管理**********************************/ const [tab, setTab] = (0, _react.useState)("tab1");
    const [bannerFormReadOnly, setBannerFormReadOnly] = (0, _react.useState)(true);
    const bannerFormRef = (0, _react.useRef)();
    const { refresh: BannerFormDataRefresh } = (0, _max.useRequest)(_others._getBannerVideo, {
        onSuccess: (res)=>{
            var _data_children, _data_children1, _data_children2, _data_children_, _data_children3, _data_children_1, _data_children4, _data_children_2, _data_children5, _data_children_3, _data_children6, _data_children_4, _data_children7, _data_children_5, _data_children8, _data_children_6, _data_children9, _data_children_7, _data_children10, _data_children_8, _data_children11, _bannerFormRef_current;
            console.log("获取到的原始数据:", res); // 调试用
            if (!res || !res[0]) {
                console.warn("没有获取到数据");
                return;
            }
            const data = res[0];
            console.log("要设置的数据:", {
                url: Array.isArray(data.youtube_url) ? data.youtube_url[0] : data.youtube_url,
                description1: (_data_children = data.children) === null || _data_children === void 0 ? void 0 : _data_children[0],
                description2: (_data_children1 = data.children) === null || _data_children1 === void 0 ? void 0 : _data_children1[1],
                description3: (_data_children2 = data.children) === null || _data_children2 === void 0 ? void 0 : _data_children2[2]
            });
            (_bannerFormRef_current = bannerFormRef.current) === null || _bannerFormRef_current === void 0 || _bannerFormRef_current.setFieldsValue({
                url: data.youtube_url[0],
                description1: {
                    title: ((_data_children3 = data.children) === null || _data_children3 === void 0 ? void 0 : (_data_children_ = _data_children3[0]) === null || _data_children_ === void 0 ? void 0 : _data_children_.title) ?? "",
                    subtitle: ((_data_children4 = data.children) === null || _data_children4 === void 0 ? void 0 : (_data_children_1 = _data_children4[0]) === null || _data_children_1 === void 0 ? void 0 : _data_children_1.subtitle) ?? "",
                    body: ((_data_children5 = data.children) === null || _data_children5 === void 0 ? void 0 : (_data_children_2 = _data_children5[0]) === null || _data_children_2 === void 0 ? void 0 : _data_children_2.body) ?? ""
                },
                description2: {
                    title: ((_data_children6 = data.children) === null || _data_children6 === void 0 ? void 0 : (_data_children_3 = _data_children6[1]) === null || _data_children_3 === void 0 ? void 0 : _data_children_3.title) ?? "",
                    subtitle: ((_data_children7 = data.children) === null || _data_children7 === void 0 ? void 0 : (_data_children_4 = _data_children7[1]) === null || _data_children_4 === void 0 ? void 0 : _data_children_4.subtitle) ?? "",
                    body: ((_data_children8 = data.children) === null || _data_children8 === void 0 ? void 0 : (_data_children_5 = _data_children8[1]) === null || _data_children_5 === void 0 ? void 0 : _data_children_5.body) ?? ""
                },
                description3: {
                    title: ((_data_children9 = data.children) === null || _data_children9 === void 0 ? void 0 : (_data_children_6 = _data_children9[2]) === null || _data_children_6 === void 0 ? void 0 : _data_children_6.title) ?? "",
                    subtitle: ((_data_children10 = data.children) === null || _data_children10 === void 0 ? void 0 : (_data_children_7 = _data_children10[2]) === null || _data_children_7 === void 0 ? void 0 : _data_children_7.subtitle) ?? "",
                    body: ((_data_children11 = data.children) === null || _data_children11 === void 0 ? void 0 : (_data_children_8 = _data_children11[2]) === null || _data_children_8 === void 0 ? void 0 : _data_children_8.body) ?? ""
                }
            });
        }
    });
    const actionRef = (0, _react.useRef)();
    const [searchKey, setSearchKey] = (0, _react.useState)("");
    const [reload, setReload] = (0, _react.useState)(()=>{
        var _actionRef_current;
        return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
    });
    const termsConditionActionRef = (0, _react.useRef)();
    const [termsConditionSearchKey, setTermsConditionSearchKey] = (0, _react.useState)("");
    const [termsConditionReload, setTermsConditionReload] = (0, _react.useState)(()=>{
        var _termsConditionActionRef_current;
        return (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 ? void 0 : _termsConditionActionRef_current.reload;
    });
    (0, _react.useEffect)(()=>{
        setReload(()=>{
            var _actionRef_current;
            return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
        });
    }, []);
    /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ const BannerVideoElement = ()=>{
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm, {
            formRef: bannerFormRef,
            onFinish: async (values)=>{
                try {
                    var _values_description1, _values_description11, _values_description12, _values_description2, _values_description21, _values_description22, _values_description3, _values_description31, _values_description32;
                    // 过滤空的描述对象
                    const children = [
                        {
                            title: (_values_description1 = values.description1) === null || _values_description1 === void 0 ? void 0 : _values_description1.title,
                            subtitle: (_values_description11 = values.description1) === null || _values_description11 === void 0 ? void 0 : _values_description11.subtitle,
                            body: (_values_description12 = values.description1) === null || _values_description12 === void 0 ? void 0 : _values_description12.body
                        },
                        {
                            title: (_values_description2 = values.description2) === null || _values_description2 === void 0 ? void 0 : _values_description2.title,
                            subtitle: (_values_description21 = values.description2) === null || _values_description21 === void 0 ? void 0 : _values_description21.subtitle,
                            body: (_values_description22 = values.description2) === null || _values_description22 === void 0 ? void 0 : _values_description22.body
                        },
                        {
                            title: (_values_description3 = values.description3) === null || _values_description3 === void 0 ? void 0 : _values_description3.title,
                            subtitle: (_values_description31 = values.description3) === null || _values_description31 === void 0 ? void 0 : _values_description31.subtitle,
                            body: (_values_description32 = values.description3) === null || _values_description32 === void 0 ? void 0 : _values_description32.body
                        }
                    ].filter((item)=>item.title || item.subtitle || item.body);
                    const formData = {
                        youtube_url: values.url || "",
                        children: children
                    };
                    await (0, _others._updateBannerVideo)(formData);
                    _antd.message.success("Update banner success");
                } catch (error) {
                    console.log("error", error);
                    _antd.message.error("Update banner failed");
                } finally{
                    BannerFormDataRefresh();
                    setBannerFormReadOnly(true);
                    return true;
                }
            },
            submitter: {
                searchConfig: {
                    resetText: "Cancel",
                    submitText: "Save"
                },
                onReset: ()=>{
                    setBannerFormReadOnly(true);
                },
                render (props, dom) {
                    const editButton = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "primary",
                        onClick: ()=>setBannerFormReadOnly(false),
                        children: "Edit"
                    }, void 0, false, void 0, void 0);
                    if (bannerFormReadOnly) return editButton;
                    else return dom;
                }
            },
            grid: true,
            readonly: bannerFormReadOnly,
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                    colProps: {
                        span: 12
                    },
                    label: "Youtube url",
                    name: "url"
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                    title: "Description one",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Title",
                            name: [
                                "description1",
                                "title"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Subtitle",
                            name: [
                                "description1",
                                "subtitle"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                            colProps: {
                                span: 12
                            },
                            label: "body",
                            name: [
                                "description1",
                                "body"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                    title: "Description two",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Title",
                            name: [
                                "description2",
                                "title"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Subtitle",
                            name: [
                                "description2",
                                "subtitle"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                            colProps: {
                                span: 12
                            },
                            label: "body",
                            name: [
                                "description2",
                                "body"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                    title: "Description three",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Title",
                            name: [
                                "description3",
                                "title"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                            colProps: {
                                span: 12
                            },
                            label: "Subtitle",
                            name: [
                                "description3",
                                "subtitle"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                            colProps: {
                                span: 12
                            },
                            label: "body",
                            name: [
                                "description3",
                                "body"
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this);
    };
    const CategoryElement = ()=>{
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.EditableProTable, {
            rowKey: "_id",
            editable: {
                type: "single",
                onSave: async (key, record, originRow, newLineConfig)=>{
                    console.log("record", record);
                    if (record.isCreate) await (0, _others._createCategory)({
                        name: record.name
                    });
                    else await (0, _others._updateCategory)({
                        _id: record._id,
                        name: record.name,
                        isDisplay: record.isDisplay
                    });
                    return true;
                }
            },
            recordCreatorProps: {
                creatorButtonText: "Create",
                record: (Index)=>({
                        _id: Index,
                        isCreate: true,
                        name: "default name",
                        isDisplay: true
                    })
            },
            request: async ()=>{
                const res = await (0, _others._getCategory)();
                return {
                    data: res.data,
                    success: true
                };
            },
            columns: [
                {
                    title: "Category name",
                    dataIndex: "name"
                },
                {
                    title: "IsDisplay",
                    dataIndex: "isDisplay",
                    valueEnum: {
                        true: "Show",
                        false: "Hidden"
                    }
                },
                {
                    title: "Action",
                    valueType: "option",
                    width: 200,
                    render: (text, record, _, action)=>[
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                onClick: ()=>{
                                    var _action_startEditable;
                                    action === null || action === void 0 || (_action_startEditable = action.startEditable) === null || _action_startEditable === void 0 || _action_startEditable.call(action, record._id, record);
                                },
                                children: "Edit"
                            }, "editable", false, void 0, void 0)
                        ]
                }
            ]
        }, void 0, false, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, this);
    };
    const PrivacyPolicyElement = ()=>{
        var _actionRef_current;
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Privacy policy List",
                        actionRef: actionRef,
                        optionsRender (props, defaultDom) {
                            const createFaq = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                allowUpdate: false,
                                readOnly: false,
                                modalFormProps: {
                                    onFinish: async (value)=>{
                                        try {
                                            await (0, _others._postPrivacyPolicy)({
                                                context: value.context
                                            });
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
                                            resetText: "Cancel",
                                            submitText: "Confirm"
                                        }
                                    }
                                },
                                title: "New Part",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                    colProps: {
                                        span: 18
                                    },
                                    label: "Context",
                                    name: "context"
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, void 0, void 0);
                            return [
                                createFaq,
                                ...defaultDom
                            ];
                        },
                        columns: [
                            {
                                key: "part",
                                title: "Part",
                                dataIndex: "part",
                                width: "10%",
                                align: "center",
                                sorter: (a, b)=>a.part - b.part
                            },
                            {
                                key: "context",
                                title: "Context",
                                dataIndex: "context",
                                align: "center",
                                copyable: true,
                                width: "80%",
                                valueType: "textarea",
                                ellipsis: true
                            },
                            {
                                title: "Actions",
                                dataIndex: "action",
                                key: "action",
                                render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            allowUpdate: false,
                                            readOnly: false,
                                            modalFormProps: {
                                                onFinish: async (value)=>{
                                                    try {
                                                        await (0, _others._putPrivacyPolicy)({
                                                            part: value.part,
                                                            context: value.context
                                                        });
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
                                                submitter: {
                                                    searchConfig: {
                                                        resetText: "Cancel",
                                                        submitText: "Confirm"
                                                    }
                                                }
                                            },
                                            title: "New Part",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Part",
                                                    name: "part",
                                                    readonly: true,
                                                    initialValue: record.part
                                                }, void 0, false, void 0, void 0),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Context",
                                                    initialValue: record.context,
                                                    name: "context"
                                                }, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true, void 0, void 0)
                                    }, void 0, false, void 0, void 0),
                                align: "center"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await (0, _others._getPrivacyPolicy)().then(({ data })=>{
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
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, this);
    };
    const TermsConditionElement = ()=>{
        var _termsConditionActionRef_current;
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 ? void 0 : _termsConditionActionRef_current.reload,
                    inputProps: {
                        value: termsConditionSearchKey,
                        onChange: ({ currentTarget: { value } })=>setTermsConditionSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: termsConditionSearchKey,
                    props: {
                        headerTitle: "Terms & Conditions List",
                        actionRef: termsConditionActionRef,
                        optionsRender (props, defaultDom) {
                            const createTermsCondition = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                allowUpdate: false,
                                readOnly: false,
                                modalFormProps: {
                                    onFinish: async (value)=>{
                                        try {
                                            await (0, _others._postTermsCondition)({
                                                context: value.context
                                            });
                                            _antd.message.success("Create faq success");
                                        } catch (error) {
                                            _antd.message.error("Create faq failed");
                                        } finally{
                                            var _termsConditionActionRef_current;
                                            (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 || _termsConditionActionRef_current.reload();
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
                                            resetText: "Cancel",
                                            submitText: "Confirm"
                                        }
                                    }
                                },
                                title: "New Part",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                    colProps: {
                                        span: 18
                                    },
                                    label: "Context",
                                    name: "context"
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, void 0, void 0);
                            return [
                                createTermsCondition,
                                ...defaultDom
                            ];
                        },
                        columns: [
                            {
                                key: "part",
                                title: "Part",
                                dataIndex: "part",
                                width: "10%",
                                align: "center",
                                sorter: (a, b)=>a.part - b.part
                            },
                            {
                                key: "context",
                                title: "Context",
                                dataIndex: "context",
                                align: "center",
                                copyable: true,
                                width: "80%",
                                valueType: "textarea",
                                ellipsis: true
                            },
                            {
                                title: "Actions",
                                dataIndex: "action",
                                key: "action",
                                render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            allowUpdate: false,
                                            readOnly: false,
                                            modalFormProps: {
                                                onFinish: async (value)=>{
                                                    try {
                                                        await (0, _others._putTermsCondition)({
                                                            part: value.part,
                                                            context: value.context
                                                        });
                                                        _antd.message.success("Create faq success");
                                                    } catch (error) {
                                                        _antd.message.error("Create faq failed");
                                                    } finally{
                                                        var _termsConditionActionRef_current;
                                                        (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 || _termsConditionActionRef_current.reload();
                                                        return true;
                                                    }
                                                },
                                                grid: true,
                                                submitter: {
                                                    searchConfig: {
                                                        resetText: "Cancel",
                                                        submitText: "Confirm"
                                                    }
                                                }
                                            },
                                            title: "New Part",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Part",
                                                    name: "part",
                                                    readonly: true,
                                                    initialValue: record.part
                                                }, void 0, false, void 0, void 0),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Context",
                                                    initialValue: record.context,
                                                    name: "context"
                                                }, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true, void 0, void 0)
                                    }, void 0, false, void 0, void 0),
                                align: "center"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await (0, _others._getTermsCondition)().then(({ data })=>{
                                return {
                                    success: true,
                                    data: data
                                };
                            });
                            if (termsConditionSearchKey) {
                                dataSource.data = (0, _searchHelper.default)({
                                    dataSource: dataSource.data,
                                    keyWord: termsConditionSearchKey
                                });
                                return dataSource;
                            } else return dataSource;
                        }
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, this);
    };
    /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
        title: "Other settings",
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Settings card",
            headStyle: {
                paddingBottom: 24
            },
            style: {
                minHeight: "90vh"
            },
            tabs: {
                tabPosition: "left",
                activeKey: tab,
                items: [
                    {
                        label: `Banner video`,
                        key: "tab1",
                        children: BannerVideoElement()
                    },
                    {
                        label: `Category`,
                        key: "tab2",
                        children: CategoryElement()
                    },
                    {
                        label: `Privacy policy`,
                        key: "tab3",
                        children: PrivacyPolicyElement()
                    },
                    {
                        label: `Terms & Conditions`,
                        key: "tab4",
                        children: TermsConditionElement()
                    }
                ],
                onChange: (key)=>{
                    setTab(key);
                }
            }
        }, void 0, false, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 596,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Setting/others/index.tsx",
        lineNumber: 595,
        columnNumber: 5
    }, this);
}
_s(Index, "nKO2rsYdDnJZ2qNXpogTNG6Chsc=", false, function() {
    return [
        _max.useRequest
    ];
});
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
"src/services/setting/others.ts": function (module, exports, __mako_require__){
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
    _createCategory: function() {
        return _createCategory;
    },
    _getBannerVideo: function() {
        return _getBannerVideo;
    },
    _getCategory: function() {
        return _getCategory;
    },
    _getPrivacyPolicy: function() {
        return _getPrivacyPolicy;
    },
    _getTermsCondition: function() {
        return _getTermsCondition;
    },
    _postPrivacyPolicy: function() {
        return _postPrivacyPolicy;
    },
    _postTermsCondition: function() {
        return _postTermsCondition;
    },
    _putPrivacyPolicy: function() {
        return _putPrivacyPolicy;
    },
    _putTermsCondition: function() {
        return _putTermsCondition;
    },
    _updateBannerVideo: function() {
        return _updateBannerVideo;
    },
    _updateCategory: function() {
        return _updateCategory;
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
const _getBannerVideo = async ()=>{
    const result = await (0, _max.request)(`/api/v1/global/public/cms/9527`, {
        method: "get"
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _getCategory = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "get"
    });
};
const _updateBannerVideo = async (data)=>{
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/banner`, {
        method: "put",
        data: data
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _updateCategory = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "put",
        data: {
            ...values,
            isDisplay: JSON.parse(values.isDisplay)
        }
    });
};
const _createCategory = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "post",
        params: {
            name: values.name
        }
    });
};
const _getPrivacyPolicy = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "get"
    });
};
const _postPrivacyPolicy = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "post",
        data: {
            context: values.context
        }
    });
};
const _putPrivacyPolicy = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "put",
        data: {
            context: values.context,
            part: values.part
        }
    });
};
const _getTermsCondition = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "get"
    });
};
const _postTermsCondition = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "post",
        data: {
            context: values.context
        }
    });
};
const _putTermsCondition = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "put",
        data: {
            context: values.context,
            part: values.part
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
 }]);
//# sourceMappingURL=src_pages_Setting_others_index_tsx-async.js.map