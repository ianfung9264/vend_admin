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
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _fee = __mako_require__("src/services/setting/fee.ts");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
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
                const [stripeFee, setStripeFee] = (0, _react.useState)();
                const [vendPopupsFee, setVendPopupsFee] = (0, _react.useState)();
                (0, _max.useRequest)(_fee._getAllFee, {
                    onSuccess: (res)=>{
                        setStripeFee(res.data);
                    }
                });
                return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                    title: "Fee setting",
                    className: "min-h-[90vh]",
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Stripe Fee",
                            colSpan: "50%",
                            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm, {
                                readonly: true,
                                request: _fee._getAllFee,
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Fee Percentage",
                                        name: "percentage"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 24,
                                        columnNumber: 11
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Fee Fixed dollar",
                                        name: "fixed_dollar"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 25,
                                        columnNumber: 11
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                        label: "Billing Percentage",
                                        name: "billing_percentage"
                                    }, void 0, false, {
                                        fileName: "src/pages/Setting/fee/index.tsx",
                                        lineNumber: 26,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 23,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 22,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                            title: "Vend Popups Fee",
                            children: (0, _jsxdevruntime.jsxDEV)("div", {
                                style: {
                                    height: 360
                                },
                                children: "右侧内容"
                            }, void 0, false, {
                                fileName: "src/pages/Setting/fee/index.tsx",
                                lineNumber: 30,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/fee/index.tsx",
                            lineNumber: 29,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/fee/index.tsx",
                    lineNumber: 21,
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
        },
        "src/.umi/exports.ts": function(module, exports, __mako_require__) {
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
                Access: function() {
                    return _pluginaccess.Access;
                },
                ApplyPluginsType: function() {
                    return _plugin.ApplyPluginsType;
                },
                FormattedDate: function() {
                    return _pluginlocale.FormattedDate;
                },
                FormattedDateParts: function() {
                    return _pluginlocale.FormattedDateParts;
                },
                FormattedDisplayName: function() {
                    return _pluginlocale.FormattedDisplayName;
                },
                FormattedHTMLMessage: function() {
                    return _pluginlocale.FormattedHTMLMessage;
                },
                FormattedList: function() {
                    return _pluginlocale.FormattedList;
                },
                FormattedMessage: function() {
                    return _pluginlocale.FormattedMessage;
                },
                FormattedNumber: function() {
                    return _pluginlocale.FormattedNumber;
                },
                FormattedNumberParts: function() {
                    return _pluginlocale.FormattedNumberParts;
                },
                FormattedPlural: function() {
                    return _pluginlocale.FormattedPlural;
                },
                FormattedRelativeTime: function() {
                    return _pluginlocale.FormattedRelativeTime;
                },
                FormattedTime: function() {
                    return _pluginlocale.FormattedTime;
                },
                FormattedTimeParts: function() {
                    return _pluginlocale.FormattedTimeParts;
                },
                Helmet: function() {
                    return _rendererreact.Helmet;
                },
                HelmetProvider: function() {
                    return _rendererreact.HelmetProvider;
                },
                IntlProvider: function() {
                    return _pluginlocale.IntlProvider;
                },
                Link: function() {
                    return _rendererreact.Link;
                },
                NavLink: function() {
                    return _rendererreact.NavLink;
                },
                Navigate: function() {
                    return _rendererreact.Navigate;
                },
                Outlet: function() {
                    return _rendererreact.Outlet;
                },
                PluginManager: function() {
                    return _plugin.PluginManager;
                },
                Provider: function() {
                    return _pluginmodel.Provider;
                },
                RawIntlProvider: function() {
                    return _pluginlocale.RawIntlProvider;
                },
                SelectLang: function() {
                    return _pluginlocale.SelectLang;
                },
                TestBrowser: function() {
                    return _testBrowser.TestBrowser;
                },
                UseRequestProvider: function() {
                    return _pluginrequest.UseRequestProvider;
                },
                __getRoot: function() {
                    return _rendererreact.__getRoot;
                },
                __useFetcher: function() {
                    return _rendererreact.__useFetcher;
                },
                addLocale: function() {
                    return _pluginlocale.addLocale;
                },
                createBrowserHistory: function() {
                    return _rendererreact.createBrowserHistory;
                },
                createHashHistory: function() {
                    return _rendererreact.createHashHistory;
                },
                createHistory: function() {
                    return _history.createHistory;
                },
                createMemoryHistory: function() {
                    return _rendererreact.createMemoryHistory;
                },
                createSearchParams: function() {
                    return _rendererreact.createSearchParams;
                },
                defineApp: function() {
                    return _defineApp.defineApp;
                },
                formatMessage: function() {
                    return _pluginlocale.formatMessage;
                },
                generatePath: function() {
                    return _rendererreact.generatePath;
                },
                getAllLocales: function() {
                    return _pluginlocale.getAllLocales;
                },
                getIntl: function() {
                    return _pluginlocale.getIntl;
                },
                getLocale: function() {
                    return _pluginlocale.getLocale;
                },
                getRequestInstance: function() {
                    return _pluginrequest.getRequestInstance;
                },
                history: function() {
                    return _history.history;
                },
                injectIntl: function() {
                    return _pluginlocale.injectIntl;
                },
                matchPath: function() {
                    return _rendererreact.matchPath;
                },
                matchRoutes: function() {
                    return _rendererreact.matchRoutes;
                },
                renderClient: function() {
                    return _rendererreact.renderClient;
                },
                request: function() {
                    return _pluginrequest.request;
                },
                resolvePath: function() {
                    return _rendererreact.resolvePath;
                },
                setLocale: function() {
                    return _pluginlocale.setLocale;
                },
                terminal: function() {
                    return _terminal.terminal;
                },
                useAccess: function() {
                    return _pluginaccess.useAccess;
                },
                useAccessMarkedRoutes: function() {
                    return _pluginaccess.useAccessMarkedRoutes;
                },
                useAppData: function() {
                    return _rendererreact.useAppData;
                },
                useClientLoaderData: function() {
                    return _rendererreact.useClientLoaderData;
                },
                useIntl: function() {
                    return _pluginlocale.useIntl;
                },
                useLoaderData: function() {
                    return _rendererreact.useLoaderData;
                },
                useLocation: function() {
                    return _rendererreact.useLocation;
                },
                useMatch: function() {
                    return _rendererreact.useMatch;
                },
                useModel: function() {
                    return _pluginmodel.useModel;
                },
                useNavigate: function() {
                    return _rendererreact.useNavigate;
                },
                useOutlet: function() {
                    return _rendererreact.useOutlet;
                },
                useOutletContext: function() {
                    return _rendererreact.useOutletContext;
                },
                useParams: function() {
                    return _rendererreact.useParams;
                },
                useRequest: function() {
                    return _pluginrequest.useRequest;
                },
                useResolvedPath: function() {
                    return _rendererreact.useResolvedPath;
                },
                useRouteData: function() {
                    return _rendererreact.useRouteData;
                },
                useRouteProps: function() {
                    return _rendererreact.useRouteProps;
                },
                useRoutes: function() {
                    return _rendererreact.useRoutes;
                },
                useSearchParams: function() {
                    return _rendererreact.useSearchParams;
                },
                useSelectedRoutes: function() {
                    return _rendererreact.useSelectedRoutes;
                },
                useServerInsertedHTML: function() {
                    return useServerInsertedHTML;
                },
                useServerLoaderData: function() {
                    return _rendererreact.useServerLoaderData;
                },
                withRouter: function() {
                    return _rendererreact.withRouter;
                }
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _defineApp = __mako_require__("src/.umi/core/defineApp.ts");
            var _pluginaccess = __mako_require__("src/.umi/plugin-access/index.tsx");
            var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
            var _pluginmodel = __mako_require__("src/.umi/plugin-model/index.tsx");
            var _pluginrequest = __mako_require__("src/.umi/plugin-request/index.ts");
            _export_star._(__mako_require__("src/.umi/plugin-access/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-antd/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-layout/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-request/types.d.ts"), exports);
            var _rendererreact = __mako_require__("node_modules/@umijs/renderer-react/dist/index.js");
            var _plugin = __mako_require__("node_modules/umi/client/client/plugin.js");
            var _history = __mako_require__("src/.umi/core/history.ts");
            var _terminal = __mako_require__("src/.umi/core/terminal.ts");
            var _testBrowser = __mako_require__("src/.umi/testBrowser.tsx");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const useServerInsertedHTML = ()=>{};
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
    runtime._h = '15180079788263727740';
    ;
});

//# sourceMappingURL=src_pages_Setting_fee_index_tsx-async.901553081646664448.hot-update.js.map