globalThis.makoModuleHotUpdate('src/pages/Setting/faq/index.tsx', {
    modules: {
        "src/pages/Setting/faq/detailModal.tsx": function(module, exports, __mako_require__) {
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
        }
    }
}, function(runtime) {
    runtime._h = '2522879876633177507';
    ;
});

//# sourceMappingURL=src_pages_Setting_faq_index_tsx-async.14603362232636693470.hot-update.js.map