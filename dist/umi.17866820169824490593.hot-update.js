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
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _columns = __mako_require__("src/pages/Setting/faq/columns.tsx");
            var _faq = __mako_require__("src/services/setting/faq.ts");
            var _BaseModel = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
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
                                lineNumber: 37,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                                searchKey: searchKey,
                                props: {
                                    headerTitle: "Withdrawal approval List",
                                    actionRef: actionRef,
                                    optionsRender (props, defaultDom) {
                                        const createFaq = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            modalFormProps: {
                                                trigger: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                    icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.PlusSquareOutlined, {}, void 0, false, void 0, void 0)
                                                }, void 0, false, void 0, void 0)
                                            },
                                            title: "New faq",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    label: "Question",
                                                    name: "question"
                                                }, void 0, false, void 0, void 0),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    label: "Answer",
                                                    name: "answer"
                                                }, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true, void 0, void 0);
                                        return [
                                            createFaq,
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
                                lineNumber: 45,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/faq/index.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Setting/faq/index.tsx",
                    lineNumber: 35,
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
        "node_modules/@ant-design/icons/es/index.js": function(module, exports, __mako_require__) {
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
                IconProvider: function() {
                    return IconProvider;
                },
                createFromIconfontCN: function() {
                    return _IconFont.default;
                },
                default: function() {
                    return _Icon.default;
                }
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _Context = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/Context.js"));
            _export_star._(__mako_require__("node_modules/@ant-design/icons/es/icons/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js"), exports);
            var _IconFont = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/IconFont.js"));
            var _Icon = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/Icon.js"));
            var IconProvider = _Context.default.Provider;
        },
        "node_modules/antd/es/index.js": function(module, exports, __mako_require__) {
            "use client";
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
                Affix: function() {
                    return _affix.default;
                },
                Alert: function() {
                    return _alert.default;
                },
                Anchor: function() {
                    return _anchor.default;
                },
                App: function() {
                    return _app.default;
                },
                AutoComplete: function() {
                    return _autocomplete.default;
                },
                Avatar: function() {
                    return _avatar.default;
                },
                BackTop: function() {
                    return _backtop.default;
                },
                Badge: function() {
                    return _badge.default;
                },
                Breadcrumb: function() {
                    return _breadcrumb.default;
                },
                Button: function() {
                    return _button.default;
                },
                Calendar: function() {
                    return _calendar.default;
                },
                Card: function() {
                    return _card.default;
                },
                Carousel: function() {
                    return _carousel.default;
                },
                Cascader: function() {
                    return _cascader.default;
                },
                Checkbox: function() {
                    return _checkbox.default;
                },
                Col: function() {
                    return _col.default;
                },
                Collapse: function() {
                    return _collapse.default;
                },
                ColorPicker: function() {
                    return _colorpicker.default;
                },
                ConfigProvider: function() {
                    return _configprovider.default;
                },
                DatePicker: function() {
                    return _datepicker.default;
                },
                Descriptions: function() {
                    return _descriptions.default;
                },
                Divider: function() {
                    return _divider.default;
                },
                Drawer: function() {
                    return _drawer.default;
                },
                Dropdown: function() {
                    return _dropdown.default;
                },
                Empty: function() {
                    return _empty.default;
                },
                Flex: function() {
                    return _flex.default;
                },
                FloatButton: function() {
                    return _floatbutton.default;
                },
                Form: function() {
                    return _form.default;
                },
                Grid: function() {
                    return _grid.default;
                },
                Image: function() {
                    return _image.default;
                },
                Input: function() {
                    return _input.default;
                },
                InputNumber: function() {
                    return _inputnumber.default;
                },
                Layout: function() {
                    return _layout.default;
                },
                List: function() {
                    return _list.default;
                },
                Mentions: function() {
                    return _mentions.default;
                },
                Menu: function() {
                    return _menu.default;
                },
                Modal: function() {
                    return _modal.default;
                },
                Pagination: function() {
                    return _pagination.default;
                },
                Popconfirm: function() {
                    return _popconfirm.default;
                },
                Popover: function() {
                    return _popover.default;
                },
                Progress: function() {
                    return _progress.default;
                },
                QRCode: function() {
                    return _qrcode.default;
                },
                Radio: function() {
                    return _radio.default;
                },
                Rate: function() {
                    return _rate.default;
                },
                Result: function() {
                    return _result.default;
                },
                Row: function() {
                    return _row.default;
                },
                Segmented: function() {
                    return _segmented.default;
                },
                Select: function() {
                    return _select.default;
                },
                Skeleton: function() {
                    return _skeleton.default;
                },
                Slider: function() {
                    return _slider.default;
                },
                Space: function() {
                    return _space.default;
                },
                Spin: function() {
                    return _spin.default;
                },
                Splitter: function() {
                    return _splitter.default;
                },
                Statistic: function() {
                    return _statistic.default;
                },
                Steps: function() {
                    return _steps.default;
                },
                Switch: function() {
                    return _switch.default;
                },
                Table: function() {
                    return _table.default;
                },
                Tabs: function() {
                    return _tabs.default;
                },
                Tag: function() {
                    return _tag.default;
                },
                TimePicker: function() {
                    return _timepicker.default;
                },
                Timeline: function() {
                    return _timeline.default;
                },
                Tooltip: function() {
                    return _tooltip.default;
                },
                Tour: function() {
                    return _tour.default;
                },
                Transfer: function() {
                    return _transfer.default;
                },
                Tree: function() {
                    return _tree.default;
                },
                TreeSelect: function() {
                    return _treeselect.default;
                },
                Typography: function() {
                    return _typography.default;
                },
                Upload: function() {
                    return _upload.default;
                },
                Watermark: function() {
                    return _watermark.default;
                },
                message: function() {
                    return _message.default;
                },
                notification: function() {
                    return _notification.default;
                },
                theme: function() {
                    return _theme.default;
                },
                version: function() {
                    return _version.default;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _affix = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/affix/index.js"));
            var _alert = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/alert/index.js"));
            var _anchor = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/anchor/index.js"));
            var _app = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/app/index.js"));
            var _autocomplete = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/auto-complete/index.js"));
            var _avatar = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/avatar/index.js"));
            var _backtop = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/back-top/index.js"));
            var _badge = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/badge/index.js"));
            var _breadcrumb = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/breadcrumb/index.js"));
            var _button = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/button/index.js"));
            var _calendar = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/calendar/index.js"));
            var _card = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/card/index.js"));
            var _carousel = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/carousel/index.js"));
            var _cascader = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/cascader/index.js"));
            var _checkbox = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/checkbox/index.js"));
            var _col = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/col/index.js"));
            var _collapse = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/collapse/index.js"));
            var _colorpicker = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/color-picker/index.js"));
            var _configprovider = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/config-provider/index.js"));
            var _datepicker = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/date-picker/index.js"));
            var _descriptions = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/descriptions/index.js"));
            var _divider = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/divider/index.js"));
            var _drawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/drawer/index.js"));
            var _dropdown = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/dropdown/index.js"));
            var _empty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/empty/index.js"));
            var _flex = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/flex/index.js"));
            var _floatbutton = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/float-button/index.js"));
            var _form = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/form/index.js"));
            var _grid = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/grid/index.js"));
            var _image = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/image/index.js"));
            var _input = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/input/index.js"));
            var _inputnumber = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/input-number/index.js"));
            var _layout = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/layout/index.js"));
            var _list = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/list/index.js"));
            var _mentions = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/mentions/index.js"));
            var _menu = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/menu/index.js"));
            var _message = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/message/index.js"));
            var _modal = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/modal/index.js"));
            var _notification = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/notification/index.js"));
            var _pagination = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/pagination/index.js"));
            var _popconfirm = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/popconfirm/index.js"));
            var _popover = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/popover/index.js"));
            var _progress = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/progress/index.js"));
            var _qrcode = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/qr-code/index.js"));
            var _radio = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/radio/index.js"));
            var _rate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/rate/index.js"));
            var _result = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/result/index.js"));
            var _row = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/row/index.js"));
            var _segmented = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/segmented/index.js"));
            var _select = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/select/index.js"));
            var _skeleton = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/skeleton/index.js"));
            var _slider = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/slider/index.js"));
            var _space = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/space/index.js"));
            var _spin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/spin/index.js"));
            var _statistic = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/statistic/index.js"));
            var _steps = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/steps/index.js"));
            var _switch = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/switch/index.js"));
            var _table = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/table/index.js"));
            var _tabs = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tabs/index.js"));
            var _tag = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tag/index.js"));
            var _theme = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/theme/index.js"));
            var _timepicker = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/time-picker/index.js"));
            var _timeline = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/timeline/index.js"));
            var _tooltip = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tooltip/index.js"));
            var _tour = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tour/index.js"));
            var _transfer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/transfer/index.js"));
            var _tree = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tree/index.js"));
            var _treeselect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/tree-select/index.js"));
            var _typography = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/typography/index.js"));
            var _upload = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/upload/index.js"));
            var _version = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/version/index.js"));
            var _watermark = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/watermark/index.js"));
            var _splitter = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/antd/es/splitter/index.js"));
        }
    }
}, function(runtime) {
    runtime._h = '7003083259540931116';
    ;
});

//# sourceMappingURL=umi.17866820169824490593.hot-update.js.map