((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Org/index.tsx'],
{ "src/pages/Org/columns.tsx": function (module, exports, __mako_require__){
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
var _detailModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Org/detailModal.tsx"));
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
            title: "Account Status",
            dataIndex: "otpStatus",
            key: "otpStatus",
            valueType: "select",
            valueEnum: _commonType.OtpStatusType,
            align: "center"
        },
        {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    children: record.advanced_status !== _commonType.LandownerAdvancedStatus.APPROVED ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                        title: "Account is not approved yet",
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "text",
                            disabled: true,
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.InfoCircleOutlined, {}, void 0, false, void 0, void 0)
                        }, void 0, false, {
                            fileName: "src/pages/Org/columns.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Org/columns.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                        initData: record,
                        mainTableReload: mainTableReload
                    }, void 0, false, {
                        fileName: "src/pages/Org/columns.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Org/columns.tsx",
                    lineNumber: 80,
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
"src/pages/Org/detailModal.tsx": function (module, exports, __mako_require__){
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
var _info = __mako_require__("src/services/org/info.ts");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _charts = __mako_require__("node_modules/@ant-design/charts/es/index.js");
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
    /**********************************狀態管理**********************************/ const formRef = (0, _react.useRef)();
    const [org, setOrg] = (0, _react.useState)();
    const [ratingDistribution, setRatingDistribution] = (0, _react.useState)([]);
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
        modalFormProps: {
            formRef: {
                ...formRef
            },
            clearOnDestroy: true,
            onInit: async (values, form)=>{
                if (initData === null || initData === void 0 ? void 0 : initData._id) {
                    const res = await (0, _info._getOrgById)(initData._id);
                    // res.data.beFollowedCount = res.data.beFollowedCount.length;
                    console.log("res.data", res.data);
                    setOrg(res.data);
                    const rating_distribution = Object.keys(res.data.rating_distribution).map((key)=>{
                        return {
                            star: key,
                            count: res.data.rating_distribution[key]
                        };
                    });
                    setRatingDistribution(rating_distribution);
                    form.setFieldsValue(res.data);
                }
            }
        },
        allowUpdate: false,
        readOnly: true,
        initData: org,
        title: "Account Details",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Basic Information",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Id",
                        name: "_id",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Icon",
                        name: "icon_url",
                        colProps: {
                            span: 8,
                            offset: 6
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                            src: org === null || org === void 0 ? void 0 : org.icon_url.url,
                            width: 100
                        }, void 0, false, {
                            fileName: "src/pages/Org/detailModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Be followed count",
                        name: "be_followed_count",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                        label: "Account type",
                        name: "advanced_status",
                        fieldProps: {
                            labelInValue: false
                        },
                        colProps: {
                            span: 8,
                            offset: 6
                        },
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
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Email",
                        name: "email",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "phone pre",
                        name: "phone_pre",
                        colProps: {
                            span: 8,
                            offset: 6
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "phone",
                        name: "phone",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Wallet",
                        name: "wallet",
                        colProps: {
                            span: 8,
                            offset: 6
                        },
                        valueType: "money"
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Event count",
                        proFieldProps: {
                            render: ()=>{
                                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    children: org === null || org === void 0 ? void 0 : org.events.length
                                }, void 0, false, void 0, void 0);
                            }
                        },
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Event operation license",
                        name: "event_operation_license",
                        colProps: {
                            span: 8,
                            offset: 6
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                            src: org === null || org === void 0 ? void 0 : org.event_operation_license.url,
                            width: 100
                        }, void 0, false, {
                            fileName: "src/pages/Org/detailModal.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Business info",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business name",
                        name: "business_name",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business full name",
                        name: "business_full_name",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business url",
                        name: "business_url",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Facebook url",
                        name: "facebook_url",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Instagram url",
                        name: "ins_url",
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "X url",
                        name: "x_url",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Legal person name",
                        fieldProps: {
                            value: (org === null || org === void 0 ? void 0 : org.legal_person_first_name) + " " + (org === null || org === void 0 ? void 0 : org.legal_person_last_name)
                        },
                        colProps: {
                            span: 8,
                            offset: 0
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                    colProps: {
                        span: 24
                    },
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
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
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Org/detailModal.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Business address info",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        colProps: {
                            span: 4,
                            offset: 0
                        },
                        label: "Country",
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.country
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "City",
                        colProps: {
                            span: 4,
                            offset: 6
                        },
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.city
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Address",
                        colProps: {
                            span: 4,
                            offset: 6
                        },
                        fieldProps: {
                            value: org === null || org === void 0 ? void 0 : org.business_address.address
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Shoot photo",
                        name: "shoot_photo",
                        colProps: {
                            span: 8,
                            offset: 0
                        },
                        children: org === null || org === void 0 ? void 0 : org.pictures.map((pic)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                src: pic.url,
                                width: 100
                            }, void 0, false, {
                                fileName: "src/pages/Org/detailModal.tsx",
                                lineNumber: 263,
                                columnNumber: 44
                            }, this))
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Others",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        label: "Bio",
                        name: "blurb",
                        colProps: {
                            span: 8
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        label: "Rating average",
                        name: "rating_average",
                        colProps: {
                            span: 8,
                            offset: 6
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Rating average",
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Line, {
                            data: ratingDistribution,
                            height: 200,
                            width: 700,
                            xField: "star",
                            yField: "count"
                        }, void 0, false, {
                            fileName: "src/pages/Org/detailModal.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Org/detailModal.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Org/detailModal.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Org/detailModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "dvW4dlbW+KUET1J5m0kxW+gQAes=");
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
"src/pages/Org/index.tsx": function (module, exports, __mako_require__){
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
var _info = __mako_require__("src/services/org/info.ts");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _columns = __mako_require__("src/pages/Org/columns.tsx");
var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _commonType = __mako_require__("src/services/commonType.ts");
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
            title: "Org account page",
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Org/index.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Account List",
                        actionRef: actionRef,
                        columns: (0, _columns.OrgTableColumns)({
                            mainTableReload: reload
                        }),
                        request: async ()=>{
                            const dataSource = await (0, _info._getAllOrg)().then(({ data })=>{
                                data = data.filter((item)=>item.advanced_status != _commonType.LandownerAdvancedStatus.WAITING);
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
                    fileName: "src/pages/Org/index.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Org/index.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Org/index.tsx",
        lineNumber: 30,
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
//# sourceMappingURL=src_pages_Org_index_tsx-async.js.map