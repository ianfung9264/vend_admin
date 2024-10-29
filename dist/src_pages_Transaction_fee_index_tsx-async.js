((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Transaction/fee/index.tsx'],
{ "src/pages/Transaction/fee/index.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _BaseIndex = _interop_require_default._(__mako_require__("src/components/Base/BaseIndex.tsx"));
var _BaseSearch = _interop_require_default._(__mako_require__("src/components/Base/BaseSearch.tsx"));
var _BaseTable = _interop_require_default._(__mako_require__("src/components/Base/BaseTable.tsx"));
var _fee = __mako_require__("src/services/setting/fee.ts");
var _searchHelper = _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _charts = __mako_require__("node_modules/@ant-design/charts/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _dayjs = _interop_require_default._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
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
    const [tab, setTab] = (0, _react.useState)("tab1");
    const { refresh: TransactionFeeDataRefresh } = (0, _max.useRequest)(_fee._getAllTransactionFee, {
        onSuccess: (res)=>{
            console.log("res", res);
            setCommission(res.commission);
            setApplicationFee(res.application_fee_list);
        }
    });
    const actionRef = (0, _react.useRef)();
    const feeActionRef = (0, _react.useRef)();
    const [commission, setCommission] = (0, _react.useState)([]);
    const [applicationFee, setApplicationFee] = (0, _react.useState)([]);
    const [commissionSearchKey, setCommissionSearchKey] = (0, _react.useState)("");
    const [transactionFeeSearchKey, setTransactionFeeSearchKey] = (0, _react.useState)("");
    (0, _react.useEffect)(()=>{
        TransactionFeeDataRefresh();
    }, []);
    const CommissionElement = ()=>{
        var _actionRef_current;
        return (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: commissionSearchKey,
                        onChange: ({ currentTarget: { value } })=>setCommissionSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Transaction/fee/index.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: commissionSearchKey,
                    props: {
                        headerTitle: "Commission List",
                        actionRef: actionRef,
                        columns: [
                            {
                                key: "id",
                                title: "Application Session Id",
                                dataIndex: "application_fee_session_id",
                                width: "10%",
                                align: "center",
                                ellipsis: true,
                                copyable: true
                            },
                            {
                                key: "event_id",
                                title: "Event Id",
                                dataIndex: "event_id",
                                align: "center",
                                copyable: true,
                                ellipsis: true
                            },
                            {
                                title: "Schedule ",
                                dataIndex: "schedule",
                                align: "center",
                                copyable: true,
                                ellipsis: true,
                                render: (text, record)=>{
                                    const mockData = [
                                        {
                                            start_time: "2024-10-28T00:30:00.000Z",
                                            end_time: "2024-10-28T12:55:00.000Z"
                                        },
                                        {
                                            start_time: "2024-10-28T00:30:00.000Z",
                                            end_time: "2024-10-28T12:55:00.000Z"
                                        }
                                    ];
                                    if (Array.isArray(record.schedule)) return record.schedule.map((item, Index)=>{
                                        const startTime = new Date(item.start_time).toLocaleString();
                                        const endTime = new Date(item.end_time).toLocaleString();
                                        return (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                            children: [
                                                Index + 1,
                                                " : ",
                                                startTime.toString(),
                                                " -",
                                                endTime.toString(),
                                                (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true);
                                    });
                                    return "";
                                }
                            },
                            {
                                title: "Commission",
                                dataIndex: "commission",
                                key: "commission",
                                align: "center",
                                render: (text, record)=>{
                                    return record.stall_payment_summary.vendpopups_commission.total_amount;
                                }
                            },
                            {
                                title: "Commission percentage",
                                dataIndex: "commission",
                                key: "commission",
                                align: "center",
                                valueType: "percent",
                                render: (text, record)=>{
                                    return record.stall_payment_summary.vendpopups_commission.percentage + "%";
                                }
                            },
                            {
                                title: "Created At",
                                dataIndex: "createdAt",
                                align: "center",
                                valueType: "dateTime"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await TransactionFeeDataRefresh().then((res)=>{
                                return {
                                    success: true,
                                    data: res.commission
                                };
                            });
                            if (commissionSearchKey) {
                                dataSource.data = (0, _searchHelper.default)({
                                    dataSource: dataSource.data,
                                    keyWord: commissionSearchKey
                                });
                                console.log("dataSource", dataSource);
                                return dataSource;
                            } else return dataSource;
                        }
                    }
                }, void 0, false, {
                    fileName: "src/pages/Transaction/fee/index.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Transaction/fee/index.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    };
    const TransactionFeeElement = ()=>{
        var _feeActionRef_current;
        return (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_feeActionRef_current = feeActionRef.current) === null || _feeActionRef_current === void 0 ? void 0 : _feeActionRef_current.reload,
                    inputProps: {
                        value: transactionFeeSearchKey,
                        onChange: ({ currentTarget: { value } })=>setTransactionFeeSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Transaction/fee/index.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: transactionFeeSearchKey,
                    props: {
                        headerTitle: "Transaction fee List",
                        actionRef: feeActionRef,
                        columns: [
                            {
                                key: "id",
                                title: "Application Session Id",
                                dataIndex: "application_fee_session_id",
                                width: "10%",
                                align: "center",
                                ellipsis: true,
                                copyable: true
                            },
                            {
                                key: "event_id",
                                title: "Event Id",
                                dataIndex: "event_id",
                                align: "center",
                                copyable: true,
                                ellipsis: true
                            },
                            {
                                key: "amount",
                                title: "Amount",
                                dataIndex: "event_id",
                                align: "center",
                                copyable: true,
                                ellipsis: true,
                                render: (text, record)=>{
                                    return "$2";
                                }
                            },
                            {
                                title: "Created At",
                                dataIndex: "createdAt",
                                align: "center",
                                valueType: "dateTime"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await TransactionFeeDataRefresh().then((res)=>{
                                return {
                                    success: true,
                                    data: res.application_fee_list
                                };
                            });
                            if (transactionFeeSearchKey) {
                                dataSource.data = (0, _searchHelper.default)({
                                    dataSource: dataSource.data,
                                    keyWord: transactionFeeSearchKey
                                });
                                return dataSource;
                            } else return dataSource;
                        }
                    }
                }, void 0, false, {
                    fileName: "src/pages/Transaction/fee/index.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Transaction/fee/index.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, this);
    };
    const DashboardElement = ()=>{
        const config = {
            title: {
                visible: true,
                text: "水波图"
            },
            description: {
                visible: true,
                text: "水波图 - 百分比显示"
            },
            min: 0,
            max: 10000,
            value: 5639
        };
        const totalVendpopupsCommission = commission.reduce((total, item)=>{
            if (item.stall_payment_summary && item.stall_payment_summary.vendpopups_commission) return total + item.stall_payment_summary.vendpopups_commission.total_amount;
            return total;
        }, 0);
        const applicationFeeTotalAmount = applicationFee.length * 2;
        const totalAmount = applicationFeeTotalAmount + totalVendpopupsCommission;
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Dashboard",
            extra: (0, _dayjs.default)().format("YYYY-MM-DD HH:mm"),
            split: "horizontal",
            bordered: true,
            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                split: "horizontal",
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                        split: "horizontal",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                                split: "vertical",
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                        statistic: {
                                            title: "Application total quantity",
                                            value: applicationFee.length
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/Transaction/fee/index.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                        statistic: {
                                            title: "Commission total quantity",
                                            value: commission.length
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/Transaction/fee/index.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Transaction/fee/index.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                                split: "vertical",
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                        statistic: {
                                            title: "Application total amount",
                                            value: applicationFeeTotalAmount,
                                            suffix: "$"
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/Transaction/fee/index.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                        statistic: {
                                            title: "Commission total amount",
                                            value: totalVendpopupsCommission,
                                            suffix: "$"
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/Transaction/fee/index.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Transaction/fee/index.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Transaction/fee/index.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                        split: "vertical",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                title: "Application fee percentage",
                                chart: (0, _jsxdevruntime.jsxDEV)(_charts.Liquid, {
                                    height: 400,
                                    width: 400,
                                    label: {
                                        visible: true,
                                        formatter: (text)=>{
                                            return Number((applicationFeeTotalAmount / totalAmount).toFixed(2)) * 100 + "%";
                                        }
                                    },
                                    percent: Number((applicationFeeTotalAmount / totalAmount).toFixed(2))
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/Transaction/fee/index.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.StatisticCard, {
                                title: "Percentage summary",
                                chart: (0, _jsxdevruntime.jsxDEV)(_charts.Pie, {
                                    forceFit: true,
                                    radius: 0.8,
                                    angleField: "value",
                                    colorField: "label",
                                    label: {
                                        visible: true,
                                        type: "spider"
                                    },
                                    type: "view",
                                    data: [
                                        {
                                            value: Number((totalVendpopupsCommission / totalAmount).toFixed(2)) * 100,
                                            label: "Commission"
                                        },
                                        {
                                            value: Number((applicationFeeTotalAmount / totalAmount).toFixed(2)) * 100,
                                            label: "Application"
                                        }
                                    ]
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/Transaction/fee/index.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Transaction/fee/index.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Transaction/fee/index.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Transaction/fee/index.tsx",
            lineNumber: 304,
            columnNumber: 7
        }, this);
    };
    return (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
        title: "Commission & fee page",
        children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "",
            headStyle: {
                paddingBottom: 24
            },
            style: {
                minHeight: "90vh"
            },
            tabs: {
                tabPosition: "left",
                activeKey: tab,
                items: [
                    {
                        label: `Dashboard`,
                        key: "dashboard",
                        children: DashboardElement()
                    },
                    {
                        label: `Commission`,
                        key: "tab1",
                        children: CommissionElement()
                    },
                    {
                        label: `Application fee`,
                        key: "tab2",
                        children: TransactionFeeElement()
                    }
                ],
                onChange: (key)=>{
                    setTab(key);
                }
            }
        }, void 0, false, {
            fileName: "src/pages/Transaction/fee/index.tsx",
            lineNumber: 411,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Transaction/fee/index.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
_s(Index, "5b6OhmL5NOI0aEchWxSpD7DmoTQ=", false, function() {
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
 }]);
//# sourceMappingURL=src_pages_Transaction_fee_index_tsx-async.js.map