globalThis.makoModuleHotUpdate('src/pages/Setting/fee/index.tsx', {
    modules: {
        "src/pages/Setting/fee/index.tsx": function(module, exports, __mako_require__) {
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
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _fee = __mako_require__("src/services/setting/fee.ts");
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
                /**********************************狀態管理**********************************/ const [stripeFee, setStripeFee] = (0, _react.useState)();
                const formRef = (0, _react.useRef)();
                const [readOnly, setReadOnly] = (0, _react.useState)(true);
                const [loading, setLoading] = (0, _react.useState)(false);
                const [messageApi, contextHolder] = _antd.message.useMessage();
                (0, _max.useRequest)(_fee._getAllFee, {
                    onSuccess: (res)=>{
                        var _formRef_current;
                        setStripeFee(res.stripe);
                        (_formRef_current = formRef.current) === null || _formRef_current === void 0 || _formRef_current.setFieldsValue(res.vendpopups);
                    }
                });
                /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                    title: "Fee setting",
                    className: "min-h-[90vh]",
                    children: [
                        contextHolder,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                children: [
                                    "Stripe Fee",
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                                        title: "Stripe Fee can not be changed",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.QuestionCircleOutlined, {
                                            className: "ml-2 opacity-50"
                                        }, void 0, false, void 0, void 0)
                                    }, void 0, false, void 0, void 0)
                                ]
                            }, void 0, true),
                            colSpan: "50%",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions, {
                                dataSource: stripeFee,
                                column: 1,
                                layout: "horizontal",
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Fee Percentage",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.percentage
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 50,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Fee Fixed dollar",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.fixed_dollar
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 53,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Billing Percentage",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.billing_percentage
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 56,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 38,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                            type: "vertical",
                            className: "min-h-[90vh]"
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 62,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Vend Popups Fee",
                            extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: "flex gap-2",
                                children: [
                                    !readOnly && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "primary",
                                        htmlType: "submit",
                                        loading: loading,
                                        onClick: ()=>{
                                            var _formRef_current;
                                            setLoading(true);
                                            messageApi.loading("Updating...");
                                            (_formRef_current = formRef.current) === null || _formRef_current === void 0 || _formRef_current.submit();
                                        },
                                        children: "Save"
                                    }, void 0, false, void 0, void 0),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "primary",
                                        onClick: ()=>setReadOnly(!readOnly),
                                        children: readOnly ? "Edit" : "Cancel"
                                    }, void 0, false, void 0, void 0)
                                ]
                            }, void 0, true, void 0, void 0),
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm, {
                                formRef: formRef,
                                disabled: readOnly,
                                readonly: readOnly,
                                submitter: false,
                                layout: "horizontal",
                                grid: true,
                                onFinish: async (values)=>{
                                    setInterval(()=>{
                                        messageApi.success("Success...");
                                    }, 1000);
                                // await _updateVendPopupsFee(values);
                                },
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    colProps: {
                                        span: 8
                                    },
                                    name: "percentage",
                                    label: "Fee Percentage"
                                }, void 0, false, {
                                    fileName: "src/pages/Setting/fee/index.tsx",
                                    lineNumber: 101,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 87,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 63,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/fee/index.tsx",
                    lineNumber: 36,
                    columnNumber: 5
                }, this);
            }
            _s(Index, "MI/whesQcT1iekRul0+E8OBRO8A=", false, function() {
                return [
                    _antd.message.useMessage,
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
        }
    }
}, function(runtime) {
    runtime._h = '12848726091337757827';
    ;
});

//# sourceMappingURL=src_pages_Setting_fee_index_tsx-async.16481440886735709298.hot-update.js.map