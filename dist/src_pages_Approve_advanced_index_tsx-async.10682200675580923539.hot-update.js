globalThis.makoModuleHotUpdate('src/pages/Approve/advanced/index.tsx', {
    modules: {
        "src/pages/Approve/advanced/detailModal.tsx": function(module, exports, __mako_require__) {
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
                        submitter: {
                            searchConfig: {
                                resetText: "Reject",
                                submitText: "Approve"
                            },
                            resetButtonProps: {
                                preventDefault: false,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            }
                        },
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
                                form.setFieldsValue(res.data);
                                try {
                                    const rating_distribution = Object.keys(res.data.rating_distribution).map((key)=>{
                                        return {
                                            star: key,
                                            count: res.data.rating_distribution[key]
                                        };
                                    });
                                    setRatingDistribution(rating_distribution);
                                } catch (error) {
                                    console.log("获取评分分布失败:", error);
                                }
                            }
                        },
                        onReset: async (values)=>{
                            // values.preventDefault();
                            values.stopPropagation();
                            console.log("values", values);
                        },
                        onFinish: async (values)=>{
                            console.log("values", values);
                        }
                    },
                    allowUpdate: false,
                    readOnly: true,
                    // initData={org}
                    title: "Account Details",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                            children: "Basic Information",
                            orientation: "left",
                            orientationMargin: 20
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 111,
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
                                    // fieldProps={{
                                    //   value: initData?._id,
                                    // }}
                                    colProps: leftFile,
                                    readonly: true
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                                    label: "Icon",
                                    name: "icon_url",
                                    colProps: rightFile,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                        src: org === null || org === void 0 ? void 0 : org.icon_url.url,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
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
                                    lineNumber: 130,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    label: "Email",
                                    name: "email",
                                    colProps: rightFile,
                                    readonly: true
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    label: "phone pre",
                                    name: "phone_pre",
                                    colProps: leftFile,
                                    readonly: true
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    label: "phone",
                                    name: "phone",
                                    colProps: rightFile,
                                    readonly: true
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormField, {
                                    label: "Event operation license",
                                    name: "event_operation_license",
                                    colProps: leftFile,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                                        src: org === null || org === void 0 ? void 0 : org.event_operation_license.url,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 116,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                            children: "Business info",
                            orientation: "left",
                            orientationMargin: 20
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 172,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 179,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 184,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 189,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 195,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 200,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 205,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 178,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                                    children: "Bank info",
                                    orientation: "left",
                                    orientationMargin: 20
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 220,
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
                                            dataSource: org === null || org === void 0 ? void 0 : org.bank_info
                                        }, void 0, false, {
                                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                        lineNumber: 227,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 226,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                            children: "Business address info",
                            orientation: "left",
                            orientationMargin: 20
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 243,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 249,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 256,
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
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 263,
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
                                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 44
                                        }, this))
                                }, void 0, false, {
                                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                    lineNumber: 270,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 248,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                            children: "Others",
                            orientation: "left",
                            orientationMargin: 20
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 278,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                            style: {
                                ...groupStyle
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                label: "Bio",
                                name: "blurb",
                                colProps: {
                                    span: 8
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Approve/advanced/detailModal.tsx",
                                lineNumber: 281,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Approve/advanced/detailModal.tsx",
                            lineNumber: 280,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Approve/advanced/detailModal.tsx",
                    lineNumber: 58,
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
        }
    }
}, function(runtime) {
    runtime._h = '5470088988584556055';
    ;
});

//# sourceMappingURL=src_pages_Approve_advanced_index_tsx-async.10682200675580923539.hot-update.js.map