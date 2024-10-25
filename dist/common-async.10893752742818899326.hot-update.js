globalThis.makoModuleHotUpdate('common', {
    modules: {
        "src/components/Base/BaseModel.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return BaseModel;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
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
            function BaseModel({ children, modalFormProps, title, initData, readOnly, modalProps, loading = false, allowUpdate = true, submit }) {
                _s();
                /**********************************狀態管理**********************************/ const [readonly, setReadonly] = (0, _react.useState)(true);
                const formRef = (0, _react.useRef)();
                //   useEffect(() => {
                //     formRef.current?.setFieldsValue(initData);
                //   }, [initData]);
                /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ModalForm, {
                    autoComplete: "nope",
                    trigger: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "text",
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.InfoCircleOutlined, {}, void 0, false, void 0, void 0)
                    }, void 0, false, void 0, void 0),
                    title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "w-[auto] pl-[12px] pr-[68px] pb-4 flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: "py-[4px]",
                                children: title
                            }, void 0, false, void 0, void 0),
                            allowUpdate && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: "flex gap-[8px]",
                                children: [
                                    readonly ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {}, void 0, false) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "primary",
                                        onClick: ()=>{
                                            if (submit) submit();
                                            setReadonly(true);
                                        },
                                        children: "提交"
                                    }, void 0, false, void 0, void 0),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "text",
                                        style: {
                                            display: "flex",
                                            color: readonly ? "#1890FF" : "black",
                                            backgroundColor: readonly ? "" : "#CCCCCC",
                                            alignItems: "start"
                                        },
                                        onClick: ()=>{
                                            setReadonly((pre)=>!pre);
                                        },
                                        children: readonly ? "修改" : "取消"
                                    }, void 0, false, void 0, void 0)
                                ]
                            }, void 0, true, void 0, void 0)
                        ]
                    }, void 0, true, void 0, void 0),
                    modalProps: {
                        destroyOnClose: true,
                        centered: true,
                        bodyStyle: {
                            maxHeight: "55vh",
                            overflow: "scroll"
                        },
                        onCancel: ()=>{
                            setReadonly(true);
                        },
                        ...modalProps
                    },
                    grid: true,
                    readonly: readOnly ?? readonly,
                    submitter: false,
                    ...modalFormProps,
                    children: children
                }, void 0, false, {
                    fileName: "src/components/Base/BaseModel.tsx",
                    lineNumber: 45,
                    columnNumber: 5
                }, this);
            }
            _s(BaseModel, "rDh5Tlpb78bdv+ZZy7y/j+qsLHw=");
            _c = BaseModel;
            var _c;
            $RefreshReg$(_c, "BaseModel");
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
    runtime._h = '3687092967647840396';
    ;
});

//# sourceMappingURL=common-async.10893752742818899326.hot-update.js.map