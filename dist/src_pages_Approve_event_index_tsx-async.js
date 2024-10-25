((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Approve/event/index.tsx'],
{ "src/pages/Approve/event/columns.tsx": function (module, exports, __mako_require__){
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
    EventScheduleTableColumns: function() {
        return EventScheduleTableColumns;
    },
    EventTableColumns: function() {
        return EventTableColumns;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _StrictVerifyButton = __mako_require__("src/components/Base/StrictVerifyButton.tsx");
var _commonType = __mako_require__("src/services/commonType.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function EventTableColumns({ mainTableReload }) {
    return [
        {
            title: "Event Name",
            dataIndex: "name",
            key: "name",
            align: "center",
            ellipsis: true,
            copyable: true
        },
        {
            title: "Creator id",
            dataIndex: "creator",
            key: "creator",
            align: "center",
            ellipsis: true,
            copyable: true
        },
        {
            title: "Participants count",
            dataIndex: "participants",
            key: "participants",
            render: (text)=>text ? text.length : 0,
            align: "center"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (text)=>`$${Number(text).toFixed(2)}`,
            align: "center"
        },
        {
            title: "Liked Count",
            dataIndex: "liked_count",
            key: "liked_count",
            align: "center"
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (_, record)=>`${record.location.city}, ${record.location.state}, ${record.location.country}`,
            align: "center"
        },
        {
            title: "Event Type",
            dataIndex: "type",
            key: "event_type",
            filters: [
                {
                    text: "Multi-day",
                    value: _commonType.EventType.MULTI
                },
                {
                    text: "Single-day",
                    value: _commonType.EventType.SINGLE
                },
                {
                    text: "Recurring",
                    value: _commonType.EventType.RECURRING
                }
            ],
            onFilter: (value, record)=>record.type === value,
            valueEnum: {
                [_commonType.EventType.MULTI]: {
                    text: "Multi-day",
                    color: "blue"
                },
                [_commonType.EventType.SINGLE]: {
                    text: "Single-day",
                    color: "cyan"
                },
                [_commonType.EventType.RECURRING]: {
                    text: "Recurring",
                    color: "purple"
                }
            },
            align: "center"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            filters: [
                {
                    text: "Normal",
                    value: _commonType.EventStatus.NORMAL
                },
                {
                    text: "Cancel",
                    value: _commonType.EventStatus.CANCEL
                },
                {
                    text: "Suspend",
                    value: _commonType.EventStatus.SUSPEND
                }
            ],
            onFilter: (value, record)=>record.status === value,
            valueEnum: {
                [_commonType.EventStatus.NORMAL]: {
                    text: "Normal",
                    status: "Success"
                },
                [_commonType.EventStatus.CANCEL]: {
                    text: "Cancel",
                    status: "Error"
                },
                [_commonType.EventStatus.SUSPEND]: {
                    text: "Suspend",
                    status: "Warning"
                }
            },
            align: "center"
        },
        {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            render: (_, record)=>{
                const schedule = record.schedule;
                const latestScheduleItem = schedule.reduce((latest, current)=>{
                    return new Date(current.start_time) > new Date(latest.end_time) ? current : latest;
                });
                const now = new Date();
                const canCancelOrStop = latestScheduleItem && new Date(latestScheduleItem.start_time) > now;
                return (0, _jsxdevruntime.jsxDEV)("span", {
                    className: "flex flex-row gap-2 justify-center",
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_StrictVerifyButton.StrictVerifyButton, {
                            title: record.status == _commonType.EventStatus.NORMAL ? "Are you sure you want to stop the event?" : "Are you sure you want to start the event?",
                            trigger: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                disabled: !canCancelOrStop,
                                type: "primary",
                                size: "small",
                                icon: record.status == _commonType.EventStatus.NORMAL ? (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                                    title: "Click to stop the event",
                                    children: (0, _jsxdevruntime.jsxDEV)(_icons.PauseOutlined, {}, void 0, false, void 0, void 0)
                                }, void 0, false, void 0, void 0) : (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                                    title: "Click to stop the event",
                                    children: (0, _jsxdevruntime.jsxDEV)(_icons.PlayCircleOutlined, {}, void 0, false, void 0, void 0)
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, void 0, void 0),
                            initData: {
                                actionFuncParams: {
                                    id: record._id
                                },
                                actionFunc: async ()=>{}
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Approve/event/columns.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_StrictVerifyButton.StrictVerifyButton, {
                            title: "Are you sure you want to cancel the event?",
                            trigger: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                size: "small",
                                type: "primary",
                                icon: (0, _jsxdevruntime.jsxDEV)(_icons.StopOutlined, {}, void 0, false, void 0, void 0),
                                disabled: record.status == _commonType.EventStatus.CANCEL || !canCancelOrStop
                            }, void 0, false, void 0, void 0),
                            initData: {
                                actionFuncParams: {
                                    id: record._id
                                },
                                actionFunc: async ()=>{}
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Approve/event/columns.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Approve/event/columns.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this);
            },
            align: "center"
        }
    ];
}
_c = EventTableColumns;
function EventScheduleTableColumns({ mainTableReload }) {
    return [
        {
            title: "Event Name",
            dataIndex: "name",
            key: "name",
            align: "center",
            ellipsis: true,
            copyable: true
        },
        {
            title: "Creator id",
            dataIndex: "creator",
            key: "creator",
            align: "center",
            ellipsis: true,
            copyable: true
        }
    ];
}
_c1 = EventScheduleTableColumns;
var _c;
var _c1;
$RefreshReg$(_c, "EventTableColumns");
$RefreshReg$(_c1, "EventScheduleTableColumns");
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
"src/pages/Approve/event/index.tsx": function (module, exports, __mako_require__){
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
var _max = __mako_require__("src/.umi/exports.ts");
var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _searchHelper = _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _info = __mako_require__("src/services/event/info.ts");
var _columns = __mako_require__("src/pages/Approve/event/columns.tsx");
var _dayjs = _interop_require_default._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
var _utc = _interop_require_default._(__mako_require__("node_modules/dayjs/plugin/utc.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
_dayjs.default.extend(_utc.default);
function Index() {
    var _actionRef_current;
    _s();
    const { data, error, loading } = (0, _max.useRequest)(_info._getAllEvent);
    const actionRef = (0, _react.useRef)();
    const [searchKey, setSearchKey] = (0, _react.useState)("");
    const [reload, setReload] = (0, _react.useState)(()=>{
        var _actionRef_current;
        return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
    });
    const [currentEventSchedule, setCurrentEventSchedule] = (0, _react.useState)([]);
    const [currentEventName, setCurrentEventName] = (0, _react.useState)("");
    (0, _react.useEffect)(()=>{
        setReload(()=>{
            var _actionRef_current;
            return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
        });
    }, []);
    const [currentRowId, setCurrentRowId] = (0, _react.useState)(null);
    return (0, _jsxdevruntime.jsxDEV)("div", {
        children: (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
            title: "Approve Event page",
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Approve/event/index.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Event List",
                        actionRef: actionRef,
                        columns: (0, _columns.EventTableColumns)({
                            mainTableReload: reload
                        }),
                        request: async ()=>{
                            const dataSource = await (0, _info._getAllEvent)().then(({ data })=>{
                                console.log("data", data);
                                setCurrentEventSchedule(data[0].schedule);
                                setCurrentEventName(data[0].name);
                                setCurrentRowId(data[0]._id);
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
                    fileName: "src/pages/Approve/event/index.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Approve/event/index.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Approve/event/index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Index, "a2AdSNaYi6e6Xf0FuxLUBWAs2Js=", false, function() {
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
//# sourceMappingURL=src_pages_Approve_event_index_tsx-async.js.map