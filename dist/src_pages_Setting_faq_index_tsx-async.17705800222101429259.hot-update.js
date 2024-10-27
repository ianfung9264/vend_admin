globalThis.makoModuleHotUpdate('src/pages/Setting/faq/index.tsx', {
    modules: {
        "src/pages/Setting/faq/columns.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "QuestionTableColumns", {
                enumerable: true,
                get: function() {
                    return QuestionTableColumns;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            function QuestionTableColumns({ mainTableReload }) {
                // console.log("mainTableReload", mainTableReload);
                // const [tableReload, setTableReload] = useState(() => mainTableReload);
                // useEffect(() => {
                //   setTableReload(() => mainTableReload);
                // }, [mainTableReload]);
                return [
                    {
                        title: "Question",
                        dataIndex: "question",
                        key: "landowner",
                        align: "center"
                    },
                    {
                        title: "Answer",
                        dataIndex: "answer",
                        key: "answer",
                        align: "center"
                    },
                    {
                        title: "Status",
                        dataIndex: "isDisplay",
                        key: "isDisplay",
                        align: "center",
                        valueEnum: {
                            true: {
                                text: "Show",
                                key: "true"
                            },
                            false: {
                                text: "Hidden",
                                key: "false"
                            }
                        }
                    },
                    {
                        title: "_id",
                        dataIndex: "event_idCount",
                        key: "_id",
                        align: "center",
                        hidden: true
                    },
                    {
                        title: "Actions",
                        dataIndex: "action",
                        key: "action",
                        render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {}, void 0, false, {
                                fileName: "src/pages/Setting/faq/columns.tsx",
                                lineNumber: 55,
                                columnNumber: 9
                            }, this),
                        align: "center"
                    }
                ];
            }
            _c = QuestionTableColumns;
            var _c;
            $RefreshReg$(_c, "QuestionTableColumns");
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
    runtime._h = '3374814081112501040';
    ;
});

//# sourceMappingURL=src_pages_Setting_faq_index_tsx-async.17705800222101429259.hot-update.js.map