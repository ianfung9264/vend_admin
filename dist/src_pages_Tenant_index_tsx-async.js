((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Tenant/index.tsx'],
{ "src/pages/Tenant/columns.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "TenantTableColumns", {
    enumerable: true,
    get: function() {
        return TenantTableColumns;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _detailModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Tenant/detailModal.tsx"));
var _commonType = __mako_require__("src/services/commonType.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function TenantTableColumns({ mainTableReload }) {
    // console.log("mainTableReload", mainTableReload);
    // const [tableReload, setTableReload] = useState(() => mainTableReload);
    // useEffect(() => {
    //   setTableReload(() => mainTableReload);
    // }, [mainTableReload]);
    return [
        {
            title: "First Name",
            dataIndex: "firstname",
            key: "firstname",
            align: "center"
        },
        {
            title: "Last Name",
            dataIndex: "lastname",
            key: "lastname",
            align: "center"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            align: "center"
        },
        {
            title: "Joined Events Count",
            dataIndex: "joined_events_count",
            key: "joined_events_count",
            align: "center"
        },
        {
            title: "Be Followers Count",
            dataIndex: "be_followed_count",
            key: "be_followed_count",
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
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_detailModal.default, {
                        initData: record,
                        mainTableReload: mainTableReload
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/columns.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Tenant/columns.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
            align: "center"
        }
    ];
}
_c = TenantTableColumns;
var _c;
$RefreshReg$(_c, "TenantTableColumns");
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
"src/pages/Tenant/detailModal.tsx": function (module, exports, __mako_require__){
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
var _charts = __mako_require__("node_modules/@ant-design/charts/es/index.js");
var _info = __mako_require__("src/services/tenant/info.ts");
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
    const [tenant, setTenant] = (0, _react.useState)();
    const [ratingDistribution, setRatingDistribution] = (0, _react.useState)([]);
    const leftFile = {
        span: 8,
        offset: 0
    };
    const rightFile = {
        span: 8,
        offset: 6
    };
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
                    const res = await (0, _info._getTenantById)(initData._id);
                    // res.data.beFollowedCount = res.data.beFollowedCount.length;
                    console.log("res.data", res.data);
                    setTenant(res.data);
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
        initData: tenant,
        title: "Account Details",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Basic Information",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Tenant/detailModal.tsx",
                lineNumber: 87,
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
                        colProps: leftFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Be followed count",
                        name: "first_name",
                        colProps: rightFile,
                        fieldProps: {
                            value: (tenant === null || tenant === void 0 ? void 0 : tenant.firstname) + " " + (tenant === null || tenant === void 0 ? void 0 : tenant.lastname)
                        },
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                        label: "Icon",
                        name: "icon_url",
                        colProps: leftFile,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                            src: tenant && (tenant === null || tenant === void 0 ? void 0 : tenant.icon_url.url),
                            width: 100
                        }, void 0, false, {
                            fileName: "src/pages/Tenant/detailModal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Be followed count",
                        name: "be_followed_count",
                        colProps: rightFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Email",
                        name: "email",
                        colProps: leftFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Joined Event count",
                        proFieldProps: {
                            render: ()=>{
                                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    children: tenant === null || tenant === void 0 ? void 0 : tenant.joined_events.length
                                }, void 0, false, void 0, void 0);
                            }
                        },
                        colProps: rightFile,
                        readonly: true
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Tenant/detailModal.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                        children: "Bank info",
                        orientation: "left",
                        orientationMargin: 20
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 133,
                        columnNumber: 9
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
                                dataSource: tenant === null || tenant === void 0 ? void 0 : tenant.bank_info
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Tenant/detailModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                        children: "Product info",
                        orientation: "left",
                        orientationMargin: 20
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 157,
                        columnNumber: 9
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
                                        title: "Product name",
                                        dataIndex: "name"
                                    },
                                    {
                                        title: "Price",
                                        dataIndex: "price"
                                    },
                                    {
                                        title: "Product photo example",
                                        dataIndex: "pictures.url",
                                        valueType: "image",
                                        render: (_, record)=>{
                                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: record.pictures.map((_record, index)=>{
                                                    if (index < 3) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                                        src: _record.url,
                                                        width: 50,
                                                        height: 50
                                                    }, _record.url, false, void 0, void 0);
                                                })
                                            }, void 0, false, void 0, void 0);
                                        }
                                    },
                                    {
                                        title: "Create time",
                                        dataIndex: "createdAt"
                                    }
                                ],
                                dataSource: tenant === null || tenant === void 0 ? void 0 : tenant.products
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Tenant/detailModal.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business name",
                        name: "business_name",
                        colProps: leftFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Business url",
                        name: "business_url",
                        colProps: rightFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        fieldProps: {
                            type: "url"
                        },
                        label: "Facebook url",
                        name: "facebook_url",
                        colProps: leftFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Instagram url",
                        name: "ins_url",
                        colProps: rightFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "X url",
                        name: "x_url",
                        colProps: leftFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Tenant/detailModal.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                        children: "Business address info",
                        orientation: "left",
                        orientationMargin: 20
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                        style: {
                            ...groupStyle
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 8,
                                    offset: 0
                                },
                                label: "Country",
                                fieldProps: {
                                    value: tenant === null || tenant === void 0 ? void 0 : tenant.business_address.country
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                label: "City",
                                colProps: {
                                    span: 8,
                                    offset: 6
                                },
                                fieldProps: {
                                    value: tenant === null || tenant === void 0 ? void 0 : tenant.business_address.city
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                label: "Address",
                                colProps: {
                                    span: 24,
                                    offset: 0
                                },
                                fieldProps: {
                                    value: tenant === null || tenant === void 0 ? void 0 : tenant.business_address.address
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                                label: "Shoot photo",
                                name: "shoot_photo",
                                colProps: {
                                    span: 24,
                                    offset: 0
                                },
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px"
                                    },
                                    children: tenant === null || tenant === void 0 ? void 0 : tenant.shoot_pictures.map((pic)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                            src: pic.url,
                                            width: 100,
                                            height: 100
                                        }, void 0, false, {
                                            fileName: "src/pages/Tenant/detailModal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "src/pages/Tenant/detailModal.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Tenant/detailModal.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                children: "Others",
                orientation: "left",
                orientationMargin: 20
            }, void 0, false, {
                fileName: "src/pages/Tenant/detailModal.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                style: {
                    ...groupStyle
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        label: "Stripe customer id",
                        name: "stripe_customer_id",
                        colProps: leftFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        label: "Rating average",
                        name: "rating_average",
                        colProps: rightFile
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        label: "Bio",
                        name: "blurb",
                        colProps: {
                            span: 24
                        }
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 285,
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
                            fileName: "src/pages/Tenant/detailModal.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Tenant/detailModal.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Tenant/detailModal.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Tenant/detailModal.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "/eJDeLlEOq57fQN8/Mc5Kyjv0iM=");
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
"src/pages/Tenant/index.tsx": function (module, exports, __mako_require__){
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
var _columns = __mako_require__("src/pages/Tenant/columns.tsx");
var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _commonType = __mako_require__("src/services/commonType.ts");
var _info = __mako_require__("src/services/tenant/info.ts");
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
    (0, _react.useEffect)(()=>{
        setReload(()=>{
            var _actionRef_current;
            return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
        });
    }, []);
    /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
            title: "Tenant account page",
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Tenant/index.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Account List",
                        actionRef: actionRef,
                        columns: (0, _columns.TenantTableColumns)({
                            mainTableReload: reload
                        }),
                        request: async ()=>{
                            const dataSource = await (0, _info._getAllTenant)().then(({ data })=>{
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
                    fileName: "src/pages/Tenant/index.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Tenant/index.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Tenant/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Index, "nnSFd6HJIztOfOyc5bTp8WPpCqw=");
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
"src/services/tenant/info.ts": function (module, exports, __mako_require__){
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
    _blockTenant: function() {
        return _blockTenant;
    },
    _getAllTenant: function() {
        return _getAllTenant;
    },
    _getTenantById: function() {
        return _getTenantById;
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
const _blockTenant = async (data)=>{
    return (0, _max.request)("/api/v1/admin/private/Tenant/block/by-id", {
        method: "put",
        data
    });
};
const _getAllTenant = async ()=>{
    return (0, _max.request)("/api/v1/admin/private/tenant/all", {
        method: "get"
    });
};
const _getTenantById = async (id)=>{
    return (0, _max.request)("/api/v1/admin/private/tenant/by-id", {
        method: "get",
        params: {
            id
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
//# sourceMappingURL=src_pages_Tenant_index_tsx-async.js.map