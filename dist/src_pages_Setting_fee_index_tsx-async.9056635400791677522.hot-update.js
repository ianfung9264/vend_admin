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
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
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
                const [vendPopupsFee, setVendPopupsFee] = (0, _react.useState)();
                (0, _max.useRequest)(_fee._getAllFee, {
                    onSuccess: (res)=>{
                        setStripeFee(res.data.stripe);
                        setVendPopupsFee(res.data.vendpopups);
                    }
                });
                /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                    title: "Fee setting",
                    className: "min-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Stripe Fee",
                            colSpan: "50%",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions, {
                                dataSource: stripeFee,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Fee Percentage",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.percentage
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 30,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Fee Fixed dollar",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.fixed_dollar
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 33,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions.Item, {
                                        label: "Billing Percentage",
                                        children: stripeFee === null || stripeFee === void 0 ? void 0 : stripeFee.billing_percentage
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 36,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 28,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Vend Popups Fee",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                style: {
                                    height: 360
                                },
                                children: "右侧内容"
                            }, void 0, false, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 42,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 41,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/fee/index.tsx",
                    lineNumber: 27,
                    columnNumber: 5
                }, this);
            }
            _s(Index, "k/sdyl4PVTIH85vmtyUAw1RuFls=", false, function() {
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
        }
    }
}, function(runtime) {
    runtime._h = '10072131664254379858';
    ;
});

//# sourceMappingURL=src_pages_Setting_fee_index_tsx-async.9056635400791677522.hot-update.js.map