globalThis.makoModuleHotUpdate('src/.umi/umi.ts?hmr', {
    modules: {
        "src/pages/Setting/faq/index.tsx": function(module, exports, __mako_require__) {
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
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _searchHelper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
            var _columns = __mako_require__("src/pages/Setting/faq/columns.tsx");
            var _faq = __mako_require__("src/services/setting/faq.ts");
            var _BaseModel = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
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
                        title: "FAQ page",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                                title: "Search bar",
                                submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                                inputProps: {
                                    value: searchKey,
                                    onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Setting/faq/index.tsx",
                                lineNumber: 36,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                                searchKey: searchKey,
                                props: {
                                    headerTitle: "Withdrawal approval List",
                                    actionRef: actionRef,
                                    optionsRender (props, defaultDom) {
                                        const createFaq = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            title: "New faq",
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {}, void 0, false, void 0, void 0)
                                        }, void 0, false, void 0, void 0);
                                        return [
                                            ...defaultDom
                                        ];
                                    },
                                    columns: (0, _columns.QuestionTableColumns)({
                                        mainTableReload: reload
                                    }),
                                    request: async ()=>{
                                        const dataSource = await (0, _faq._getAllFaq)().then(({ data })=>{
                                            console.log("withdrawal data: ", data);
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
                                fileName: "src/pages/Setting/faq/index.tsx",
                                lineNumber: 44,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/faq/index.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/index.tsx",
                    lineNumber: 34,
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
        "node_modules/@ant-design/pro-components/es/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            _export_star._(__mako_require__("node_modules/@ant-design/pro-card/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-descriptions/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-field/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-form/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-list/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-provider/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-skeleton/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-table/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-utils/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/es/version.js"), exports);
        },
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
                        className: "w-[auto] pl-[0px] pr-[68px] pb-4 flex justify-between",
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
                            overflow: "scroll",
                            overflowX: "hidden"
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
    runtime._h = '6614735900002356321';
    ;
});

//# sourceMappingURL=umi.18081201808887262699.hot-update.js.map