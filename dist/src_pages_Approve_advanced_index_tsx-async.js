((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Approve/advanced/index.tsx'],
{ "src/pages/Approve/advanced/columns.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _detailModal = _interop_require_default._(__mako_require__("src/pages/Approve/advanced/detailModal.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function OrgTableColumns({ mainTableReload }) {
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
            render: (_, record)=>(0, _jsxdevruntime.jsxDEV)("span", {
                    children: (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                        initData: record,
                        mainTableReload: mainTableReload
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/columns.tsx",
                        lineNumber: 74,
                        columnNumber: 11
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

},
"src/pages/Approve/advanced/detailModal.tsx": function (module, exports, __mako_require__){
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
var _info = __mako_require__("src/services/org/info.ts");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _advanced = __mako_require__("src/services/org/advanced.ts");
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
    const [org, setOrg] = (0, _react.useState)();
    const [rejectData, setRejectData] = (0, _react.useState)();
    const leftFile = {
        span: 8,
        offset: 0
    };
    const rightFile = {
        span: 8,
        offset: 6
    };
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
                    submitText: "Approve"
                },
                resetButtonProps: {
                    preventDefault: true,
                    onClick: (e)=>{}
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
                                        await (0, _advanced._rejectOrgAdvanceApprove)({
                                            id: org === null || org === void 0 ? void 0 : org._id,
                                            reason: values.reason
                                        });
                                        _antd.message.success("Reject success");
                                    } catch (error) {
                                        _antd.message.error("Reject failed" + error);
                                    } finally{
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
                                trigger: restButton
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
            onInit: async (values, form)=>{
                if (initData === null || initData === void 0 ? void 0 : initData._id) {
                    const res = await (0, _info._getOrgById)(initData._id);
                    console.log("res.data", res.data);
                    setOrg(res.data);
                    form.setFieldsValue(res.data);
                }
            },
            onFinish: async (values)=>{
                console.log("values", values);
                try {
                    await (0, _advanced._passOrgAdvanceApprove)({
                        id: values._id
                    });
                    _antd.message.success("Pass success");
                } catch (error) {
                    _antd.message.error("Pass failed");
                } finally{
                    await (mainTableReload === null || mainTableReload === void 0 ? void 0 : mainTableReload());
                    return true;
                }
            }
        },
        allowUpdate: false,
        readOnly: true,
        title: "Account Details",
        children: [
            (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Basic Information",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Id",
                        name: "_id",
                        colProps: leftFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Icon",
                        name: "icon_url",
                        colProps: rightFile,
                        children: (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                            src: org === null || org === void 0 ? void 0 : org.icon_url.url,
                            width: 100
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                        label: "Account Advanced Status",
                        name: "advanced_status",
                        fieldProps: {
                            labelInValue: false
                        },
                        colProps: leftFile,
                        valueEnum: {
                            0: {
                                text: "Unapproved",
                                status: "Error"
                            },
                            1: {
                                text: "Waiting",
                                status: "Processing"
                            },
                            2: {
                                text: "Approved",
                                status: "Success"
                            }
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Email",
                        name: "email",
                        colProps: rightFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "phone pre",
                        name: "phone_pre",
                        colProps: leftFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "phone",
                        name: "phone",
                        colProps: rightFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Event operation license",
                        name: "event_operation_license",
                        colProps: leftFile,
                        children: (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                            src: org === null || org === void 0 ? void 0 : org.event_operation_license.url,
                            width: 100
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Business info",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business name",
                        name: "business_name",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business full name",
                        name: "business_full_name",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business url",
                        name: "business_url",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Facebook url",
                        name: "facebook_url",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Instagram url",
                        name: "ins_url",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "X url",
                        name: "x_url",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Legal person name",
                        fieldProps: {
                            value: (org === null || org === void 0 ? void 0 : org.legal_person_first_name) + " " + (org === null || org === void 0 ? void 0 : org.legal_person_last_name)
                        },
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                        children: "Bank info",
                        orientation: "left",
                        orientationMargin: 20
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                        style: {
                            ...groupStyle
                        },
                        children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                            colProps: {
                                span: 24
                            },
                            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
                                search: false,
                                toolBarRender: false,
                                pagination: false,
                                columns: [
                                    {
                                        title: "Card name",
                                        dataIndex: "card_type"
                                    },
                                    {
                                        title: "Card info",
                                        dataIndex: "card_info"
                                    },
                                    {
                                        title: "Card cvv code",
                                        dataIndex: "cvv_code"
                                    },
                                    {
                                        title: "Card expiration date",
                                        dataIndex: "expire_date"
                                    }
                                ],
                                dataSource: org === null || org === void 0 ? void 0 : org.bank_info
                            }, void 0, false, {
                                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Business address info",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        colProps: {
                            span: 4,
                            offset: 0
                        },
                        label: "Country",
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.country
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "City",
                        colProps: {
                            span: 4,
                            offset: 6
                        },
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.city
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Address",
                        colProps: {
                            span: 4,
                            offset: 6
                        },
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.address
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Shoot photo",
                        name: "shoot_photo",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        children: org === null || org === void 0 ? void 0 : org.pictures.map((pic)=>(0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                src: pic.url,
                                width: 100
                            }, void 0, false, {
                                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                lineNumber: 342,
                                columnNumber: 44
                            }, this))
                    }, void 0, false, {
                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Others",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                    label: "Bio",
                    name: "blurb",
                    colProps: {
                        span: 8
                    }
                }, void 0, false, {
                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Approve/advanced/detailModal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "ynBqSX0sTGMw5nm+JzmHN/3k12s=");
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
"src/pages/Approve/advanced/index.tsx": function (module, exports, __mako_require__){
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
var _columns = __mako_require__("src/pages/Approve/advanced/columns.tsx");
var _searchHelper = _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _advanced = __mako_require__("src/services/org/advanced.ts");
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
            title: "Org advanced approval page",
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Approve/advanced/index.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Advanced approval List",
                        actionRef: actionRef,
                        columns: (0, _columns.OrgTableColumns)({
                            mainTableReload: reload
                        }),
                        request: async ()=>{
                            const dataSource = await (0, _advanced._getAllWaitingAdvancedOrg)().then(({ data })=>{
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
                    fileName: "src/pages/Approve/advanced/index.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Approve/advanced/index.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Approve/advanced/index.tsx",
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
"src/services/org/advanced.ts": function (module, exports, __mako_require__){
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
    _getAllWaitingAdvancedOrg: function() {
        return _getAllWaitingAdvancedOrg;
    },
    _passOrgAdvanceApprove: function() {
        return _passOrgAdvanceApprove;
    },
    _rejectOrgAdvanceApprove: function() {
        return _rejectOrgAdvanceApprove;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const _passOrgAdvanceApprove = async (data)=>{
    return (0, _max.request)("/api/v1/admin/private/approve/advance/pass", {
        method: "put",
        data
    });
};
const _getAllWaitingAdvancedOrg = async ()=>{
    return (0, _max.request)("/api/v1/admin/private/approve/advance/all", {
        method: "get"
    });
};
const _rejectOrgAdvanceApprove = async (data)=>{
    console.log("_rejectOrgAdvanceApprove.data", data);
    return (0, _max.request)("/api/v1/admin/private/approve/advance/reject", {
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
//# sourceMappingURL=src_pages_Approve_advanced_index_tsx-async.js.map