globalThis.makoModuleHotUpdate('src/.umi/umi.ts?hmr', {
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
                /**********************************狀態管理**********************************/ /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {}, void 0, false, {
                    fileName: "src/pages/Setting/fee/index.tsx",
                    lineNumber: 10,
                    columnNumber: 10
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
        }
    }
}, function(runtime) {
    runtime._h = '16017494984548748764';
    ;
});

//# sourceMappingURL=umi.8553190221322495735.hot-update.js.map