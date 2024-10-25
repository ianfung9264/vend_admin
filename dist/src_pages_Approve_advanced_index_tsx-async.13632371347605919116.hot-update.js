globalThis.makoModuleHotUpdate('src/pages/Approve/advanced/index.tsx', {
    modules: {
        "src/services/org/advanced.ts": function(module, exports, __mako_require__) {
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
                _getAllWaitingAdvancedOrg: function() {
                    return _getAllWaitingAdvancedOrg;
                },
                _passOrgAdvanceApprove: function() {
                    return _passOrgAdvanceApprove;
                },
                _rejectOrgAdvanceApprove: function() {
                    return _rejectOrgAdvanceApprove;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _max = __mako_require__("src/.umi/exports.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const _passOrgAdvanceApprove = async (data)=>{
                return (0, _max.request)("/api/v1/admin/private/approve/advance/pass", {
                    method: "put",
                    data
                });
            };
            const _getAllWaitingAdvancedOrg = async ()=>{
                return (0, _max.request)("/api/v1/admin/private/approve/advance/all", {
                    method: "get"
                });
            };
            const _rejectOrgAdvanceApprove = async (data)=>{
                console.log("_rejectOrgAdvanceApprove.data", data);
                return (0, _max.request)("/api/v1/admin/private/approve/advance/reject", {
                    method: "put",
                    data
                });
            };
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
    runtime._h = '14898642308821280780';
    ;
});

//# sourceMappingURL=src_pages_Approve_advanced_index_tsx-async.13632371347605919116.hot-update.js.map