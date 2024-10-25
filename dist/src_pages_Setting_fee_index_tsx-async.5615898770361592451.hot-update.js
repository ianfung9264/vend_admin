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
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function Index() {
                /**********************************狀態管理**********************************/ /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                    title: "Fee setting",
                    className: "min-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Stripe Fee",
                            colSpan: "50%",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm, {
                                readonly: true,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Fee Percentage",
                                        name: "percentage"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 14,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Fee Fixed dollar",
                                        name: "fixed_dollar"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 15,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Billing Percentage",
                                        name: "billing_percentage"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 16,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 12,
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
                                lineNumber: 20,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 19,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/fee/index.tsx",
                    lineNumber: 11,
                    columnNumber: 5
                }, this);
            }
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
    runtime._h = '11678321718817891047';
    ;
});

//# sourceMappingURL=src_pages_Setting_fee_index_tsx-async.5615898770361592451.hot-update.js.map