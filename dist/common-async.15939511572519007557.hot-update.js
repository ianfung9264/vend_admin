globalThis.makoModuleHotUpdate('common', {
    modules: {
        "src/services/withdrawal/info.ts": function(module, exports, __mako_require__) {
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
                _getAlWithdrawal: function() {
                    return _getAlWithdrawal;
                },
                _getTenantById: function() {
                    return _getTenantById;
                },
                _rejectWithdrawal: function() {
                    return _rejectWithdrawal;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _max = __mako_require__("src/.umi/exports.ts");
            var _commonType = __mako_require__("src/services/commonType.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const _getAlWithdrawal = async ()=>{
                return (0, _max.request)(" /api/v1/admin/private/withdrawal/all", {
                    method: "get"
                });
            };
            const _rejectWithdrawal = async (data)=>{
                return (0, _max.request)("/api/v1/admin/private/withdrawal/{id}", {
                    method: "put",
                    params: {
                        id: data.withdrawalId
                    },
                    data: {
                        reason: data.reason,
                        progress: _commonType.WithdrawalProgress.REJECTED
                    }
                });
            };
            const _getTenantById = async (id)=>{
                return (0, _max.request)("/api/v1/admin/private/tenant/by-id", {
                    method: "get",
                    params: {
                        id
                    }
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
        },
        "src/services/commonType.ts": function(module, exports, __mako_require__) {
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
                EApplicationFeeStatus: function() {
                    return EApplicationFeeStatus;
                },
                ELogType: function() {
                    return ELogType;
                },
                ERateStatus: function() {
                    return ERateStatus;
                },
                EStallPaymentStatus: function() {
                    return EStallPaymentStatus;
                },
                EWebhookEvents: function() {
                    return EWebhookEvents;
                },
                EventStatus: function() {
                    return EventStatus;
                },
                EventType: function() {
                    return EventType;
                },
                Gender: function() {
                    return Gender;
                },
                LandownerAdvancedStatus: function() {
                    return LandownerAdvancedStatus;
                },
                LandownerWithdrawApprovalStatus: function() {
                    return LandownerWithdrawApprovalStatus;
                },
                OtpRole: function() {
                    return OtpRole;
                },
                OtpStatusType: function() {
                    return OtpStatusType;
                },
                Role: function() {
                    return Role;
                },
                WithdrawalProgress: function() {
                    return WithdrawalProgress;
                },
                WithdrawalProgressNoRejected: function() {
                    return WithdrawalProgressNoRejected;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var EventStatus;
            (function(EventStatus) {
                EventStatus[EventStatus["NORMAL"] = 0] = "NORMAL";
                EventStatus[EventStatus["CANCEL"] = 1] = "CANCEL";
                EventStatus[EventStatus["SUSPEND"] = 2] = "SUSPEND";
            })(EventStatus || (EventStatus = {}));
            var LandownerAdvancedStatus;
            (function(LandownerAdvancedStatus) {
                LandownerAdvancedStatus[LandownerAdvancedStatus["UNAPPROVED"] = 0] = "UNAPPROVED";
                LandownerAdvancedStatus[LandownerAdvancedStatus["WAITING"] = 1] = "WAITING";
                LandownerAdvancedStatus[LandownerAdvancedStatus["APPROVED"] = 2] = "APPROVED";
            })(LandownerAdvancedStatus || (LandownerAdvancedStatus = {}));
            var LandownerWithdrawApprovalStatus;
            (function(LandownerWithdrawApprovalStatus) {
                LandownerWithdrawApprovalStatus[LandownerWithdrawApprovalStatus["WAITING"] = 0] = "WAITING";
                LandownerWithdrawApprovalStatus[LandownerWithdrawApprovalStatus["APPROVED"] = 1] = "APPROVED";
                LandownerWithdrawApprovalStatus[LandownerWithdrawApprovalStatus["DENIED"] = 2] = "DENIED";
                LandownerWithdrawApprovalStatus[LandownerWithdrawApprovalStatus["COMPLETED"] = 3] = "COMPLETED";
            })(LandownerWithdrawApprovalStatus || (LandownerWithdrawApprovalStatus = {}));
            var Role;
            (function(Role) {
                Role[Role["LANDOWNER"] = 0] = "LANDOWNER";
                Role[Role["PLATFORM"] = 1] = "PLATFORM";
                Role[Role["TENANT"] = 2] = "TENANT";
            })(Role || (Role = {}));
            var Gender;
            (function(Gender) {
                Gender[Gender["MAN"] = 0] = "MAN";
                Gender[Gender["WOMAN"] = 1] = "WOMAN";
                Gender[Gender["OTHER"] = 2] = "OTHER";
            })(Gender || (Gender = {}));
            var EventType;
            (function(EventType) {
                EventType["SINGLE"] = "single";
                EventType["MULTI"] = "multi";
                EventType["RECURRING"] = "recurring";
            })(EventType || (EventType = {}));
            var OtpStatusType;
            (function(OtpStatusType) {
                OtpStatusType[OtpStatusType["UNVERIFIED"] = 0] = "UNVERIFIED";
                OtpStatusType[OtpStatusType["VERIFIED"] = 1] = "VERIFIED";
                OtpStatusType[OtpStatusType["REGISTERED"] = 2] = "REGISTERED";
                OtpStatusType[OtpStatusType["FORGET_PASSWORD"] = 3] = "FORGET_PASSWORD";
            })(OtpStatusType || (OtpStatusType = {}));
            var OtpRole;
            (function(OtpRole) {
                OtpRole[OtpRole["LANDOWNER"] = 0] = "LANDOWNER";
                OtpRole[OtpRole["TENANT"] = 1] = "TENANT";
            })(OtpRole || (OtpRole = {}));
            var EStallPaymentStatus;
            (function(EStallPaymentStatus) {
                EStallPaymentStatus["Waiting"] = "Waiting";
                EStallPaymentStatus["Accept"] = "Accept";
                EStallPaymentStatus["Denied"] = "Denied";
                EStallPaymentStatus["Paid"] = "Paid";
                EStallPaymentStatus["Refunded"] = "Refunded";
                EStallPaymentStatus["Expired"] = "Expired";
            })(EStallPaymentStatus || (EStallPaymentStatus = {}));
            var EApplicationFeeStatus;
            (function(EApplicationFeeStatus) {
                EApplicationFeeStatus["Waiting"] = "Waiting";
                EApplicationFeeStatus["Paid"] = "Paid";
                EApplicationFeeStatus["Fee_Not_Enough"] = "Fee_Not_Enough";
            })(EApplicationFeeStatus || (EApplicationFeeStatus = {}));
            var ELogType;
            (function(ELogType) {
                ELogType["STRIPE_WEB_HOOK"] = "STRIPE_WEB_HOOK";
            })(ELogType || (ELogType = {}));
            var EWebhookEvents;
            (function(EWebhookEvents) {
                EWebhookEvents["CHECKOUT_SESSION_ASYNC_PAYMENT_FAILED"] = "checkout.session.async_payment_failed";
                EWebhookEvents["CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED"] = "checkout.session.async_payment_succeeded";
                EWebhookEvents["CHECKOUT_SESSION_COMPLETED"] = "checkout.session.completed";
                EWebhookEvents["CHECKOUT_SESSION_EXPIRED"] = "checkout.session.expired";
                EWebhookEvents["REFUND_UPDATED"] = "refund.updated";
                EWebhookEvents["REFUND_CREATED"] = "refund.created";
                EWebhookEvents["REFUND_FAILED"] = "refund.failed";
                EWebhookEvents["CHARGE_REFUNDED"] = "charge.refunded";
            })(EWebhookEvents || (EWebhookEvents = {}));
            var ERateStatus;
            (function(ERateStatus) {
                ERateStatus["READY"] = "READY";
                ERateStatus["COMMENTED"] = "COMMENTED";
                ERateStatus["NOT_READY"] = "NOT_READY";
            })(ERateStatus || (ERateStatus = {}));
            var WithdrawalProgress;
            (function(WithdrawalProgress) {
                WithdrawalProgress["WAITING_FOR_APPROVE"] = "WAITING_FOR_APPROVE";
                WithdrawalProgress["APPROVED_PROGRESSING"] = "APPROVED_PROGRESSING";
                WithdrawalProgress["APPROVED_COMPLETED"] = "APPROVED_COMPLETED";
                WithdrawalProgress["REJECTED"] = "REJECTED";
            })(WithdrawalProgress || (WithdrawalProgress = {}));
            var WithdrawalProgressNoRejected;
            (function(WithdrawalProgressNoRejected) {
                WithdrawalProgressNoRejected["WAITING_FOR_APPROVE"] = "WAITING_FOR_APPROVE";
                WithdrawalProgressNoRejected["APPROVED_PROGRESSING"] = "APPROVED_PROGRESSING";
                WithdrawalProgressNoRejected["APPROVED_COMPLETED"] = "APPROVED_COMPLETED";
            })(WithdrawalProgressNoRejected || (WithdrawalProgressNoRejected = {}));
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
    runtime._h = '6183339269812796068';
    ;
});

//# sourceMappingURL=common-async.15939511572519007557.hot-update.js.map