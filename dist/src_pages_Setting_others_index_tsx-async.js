((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/pages/Setting/others/index.tsx'],
{ "src/pages/Setting/others/cms/HomeFooterImage.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return HomeFooterImage;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _others = __mako_require__("src/services/setting/others.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
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
function HomeFooterImage() {
    _s();
    const [signUpImage, setSignUpImage] = (0, _react.useState)("");
    const [loading, setLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        getSignUpImage();
    }, []);
    const props = {
        name: "file",
        showUploadList: false,
        beforeUpload: ()=>false,
        onChange: async (info)=>{
            var _info_fileList_;
            const file = (_info_fileList_ = info.fileList[0]) === null || _info_fileList_ === void 0 ? void 0 : _info_fileList_.originFileObj;
            if (file) {
                if (!file.type.startsWith("image/")) {
                    _antd.message.error("请上传图片文件");
                    return;
                }
                try {
                    setLoading(true);
                    const response = await (0, _others._updateSignupImage)({
                        file: file
                    });
                    if (response.status) {
                        _antd.message.success("上传成功");
                        getSignUpImage();
                    } else _antd.message.error("上传失败");
                } catch (error) {
                    _antd.message.error("上传失败");
                    console.error(error);
                } finally{
                    setLoading(false);
                }
            }
        }
    };
    const HomeFooterImage = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Home footer image",
            headerBordered: true,
            boxShadow: true,
            loading: loading,
            extra: (0, _jsxdevruntime.jsxDEV)(_antd.Upload, {
                ...props,
                children: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    icon: (0, _jsxdevruntime.jsxDEV)(_icons.UploadOutlined, {}, void 0, false, void 0, void 0),
                    children: "Click to Upload"
                }, void 0, false, void 0, void 0)
            }, void 0, false, void 0, void 0),
            collapsible: true,
            defaultCollapsed: true,
            children: (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                height: "100%",
                src: signUpImage,
                width: "100%",
                fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",
                style: {
                    objectFit: "contain",
                    maxHeight: "500px"
                }
            }, void 0, false, {
                fileName: "src/pages/Setting/others/cms/HomeFooterImage.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Setting/others/cms/HomeFooterImage.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    const getSignUpImage = async ()=>{
        await (0, _others._getSignupImage)().then((res)=>{
            setSignUpImage(res.data[0].images[0]);
        });
    };
    return (0, _jsxdevruntime.jsxDEV)(HomeFooterImage, {}, void 0, false, {
        fileName: "src/pages/Setting/others/cms/HomeFooterImage.tsx",
        lineNumber: 124,
        columnNumber: 10
    }, this);
}
_s(HomeFooterImage, "EoP+Lb1E64m4yVVxId+uGED7shE=");
_c = HomeFooterImage;
var _c;
$RefreshReg$(_c, "HomeFooterImage");
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
"src/pages/Setting/others/cms/HomeTitileImage.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return HomeTitleImage;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _others = __mako_require__("src/services/setting/others.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
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
function HomeTitleImage() {
    _s();
    const [signUpImage, setSignUpImage] = (0, _react.useState)("");
    const [loading, setLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        getSignUpImage();
    }, []);
    const props = {
        name: "file",
        showUploadList: false,
        beforeUpload: ()=>false,
        onChange: async (info)=>{
            var _info_fileList_;
            const file = (_info_fileList_ = info.fileList[0]) === null || _info_fileList_ === void 0 ? void 0 : _info_fileList_.originFileObj;
            if (file) {
                if (!file.type.startsWith("image/")) {
                    _antd.message.error("请上传图片文件");
                    return;
                }
                try {
                    setLoading(true);
                    const response = await (0, _others._updateSignupImage)({
                        file: file
                    });
                    if (response.status) {
                        _antd.message.success("上传成功");
                        getSignUpImage();
                    } else _antd.message.error("上传失败");
                } catch (error) {
                    _antd.message.error("上传失败");
                    console.error(error);
                } finally{
                    setLoading(false);
                }
            }
        }
    };
    const HomeTitleImage = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Home title image",
            headerBordered: true,
            boxShadow: true,
            loading: loading,
            extra: (0, _jsxdevruntime.jsxDEV)(_antd.Upload, {
                ...props,
                children: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    icon: (0, _jsxdevruntime.jsxDEV)(_icons.UploadOutlined, {}, void 0, false, void 0, void 0),
                    children: "Click to Upload"
                }, void 0, false, void 0, void 0)
            }, void 0, false, void 0, void 0),
            collapsible: true,
            defaultCollapsed: true,
            children: (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                height: "100%",
                src: signUpImage,
                width: "100%",
                fallback: "data:image/png;base64,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",
                style: {
                    objectFit: "contain",
                    maxHeight: "500px"
                }
            }, void 0, false, {
                fileName: "src/pages/Setting/others/cms/HomeTitileImage.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Setting/others/cms/HomeTitileImage.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    const getSignUpImage = async ()=>{
        await (0, _others._getSignupImage)().then((res)=>{
            setSignUpImage(res.data[0].images[0]);
        });
    };
    return (0, _jsxdevruntime.jsxDEV)(HomeTitleImage, {}, void 0, false, {
        fileName: "src/pages/Setting/others/cms/HomeTitileImage.tsx",
        lineNumber: 124,
        columnNumber: 10
    }, this);
}
_s(HomeTitleImage, "EoP+Lb1E64m4yVVxId+uGED7shE=");
_c = HomeTitleImage;
var _c;
$RefreshReg$(_c, "HomeTitleImage");
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
"src/pages/Setting/others/cms/LoginImageElement.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default" //
, {
    enumerable: true,
    get: function() {
        return Index;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _others = __mako_require__("src/services/setting/others.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
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
    /**********************************狀態管理**********************************/ const [loginImage, setLoginImage] = (0, _react.useState)("");
    const [loading, setLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        getLoginImage();
    }, []);
    /**********************************狀態管理**********************************/ /**********************************組件初始化**********************************/ const props = {
        name: "file",
        showUploadList: false,
        beforeUpload: ()=>false,
        onChange: async (info)=>{
            var _info_fileList_;
            const file = (_info_fileList_ = info.fileList[0]) === null || _info_fileList_ === void 0 ? void 0 : _info_fileList_.originFileObj;
            if (file) {
                // 验证是否为图片
                if (!file.type.startsWith("image/")) {
                    _antd.message.error("请上传图片文件");
                    return;
                }
                try {
                    setLoading(true);
                    const response = await (0, _others._updateLoginImage)({
                        file: file
                    });
                    if (response.status) {
                        _antd.message.success("上传成功");
                        getLoginImage();
                    } else _antd.message.error("上传失败");
                } catch (error) {
                    _antd.message.error("上传失败");
                    console.error(error);
                } finally{
                    setLoading(false);
                }
            }
        }
    };
    const LoginImageElement = ()=>{
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Login image",
            headerBordered: true,
            boxShadow: true,
            loading: loading,
            extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Upload, {
                ...props,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UploadOutlined, {}, void 0, false, void 0, void 0),
                    children: "Click to Upload"
                }, void 0, false, void 0, void 0)
            }, void 0, false, void 0, void 0),
            collapsible: true,
            defaultCollapsed: true,
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                src: loginImage,
                width: "100%",
                height: "100%",
                style: {
                    objectFit: "contain",
                    maxHeight: "500px"
                }
            }, void 0, false, {
                fileName: "src/pages/Setting/others/cms/LoginImageElement.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Setting/others/cms/LoginImageElement.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    };
    /**********************************組件初始化**********************************/ /**********************************異步函數**********************************/ const getLoginImage = async ()=>{
        await (0, _others._getLoginImage)().then((res)=>{
            setLoginImage(res.data[0].images[0]);
        });
    };
    /**********************************異步函數**********************************/ return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginImageElement, {}, void 0, false, {
        fileName: "src/pages/Setting/others/cms/LoginImageElement.tsx",
        lineNumber: 121,
        columnNumber: 10
    }, this);
}
_s(Index, "+aij3AmWXYMJLb34J1JVwsbheVI=");
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
"src/pages/Setting/others/cms/SignUpImageElement.tsx": function (module, exports, __mako_require__){
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
var _others = __mako_require__("src/services/setting/others.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
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
    const [signUpImage, setSignUpImage] = (0, _react.useState)("");
    const [loading, setLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        getSignUpImage();
    }, []);
    const props = {
        name: "file",
        showUploadList: false,
        beforeUpload: ()=>false,
        onChange: async (info)=>{
            var _info_fileList_;
            const file = (_info_fileList_ = info.fileList[0]) === null || _info_fileList_ === void 0 ? void 0 : _info_fileList_.originFileObj;
            if (file) {
                if (!file.type.startsWith("image/")) {
                    _antd.message.error("请上传图片文件");
                    return;
                }
                try {
                    setLoading(true);
                    const response = await (0, _others._updateSignupImage)({
                        file: file
                    });
                    if (response.status) {
                        _antd.message.success("上传成功");
                        getSignUpImage();
                    } else _antd.message.error("上传失败");
                } catch (error) {
                    _antd.message.error("上传失败");
                    console.error(error);
                } finally{
                    setLoading(false);
                }
            }
        }
    };
    const SignUpImageElement = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Signup image",
            headerBordered: true,
            boxShadow: true,
            loading: loading,
            extra: (0, _jsxdevruntime.jsxDEV)(_antd.Upload, {
                ...props,
                children: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    icon: (0, _jsxdevruntime.jsxDEV)(_icons.UploadOutlined, {}, void 0, false, void 0, void 0),
                    children: "Click to Upload"
                }, void 0, false, void 0, void 0)
            }, void 0, false, void 0, void 0),
            collapsible: true,
            defaultCollapsed: true,
            children: (0, _jsxdevruntime.jsxDEV)(_antd.Image, {
                height: "100%",
                src: signUpImage,
                width: "100%",
                fallback: "data:image/png;base64,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",
                style: {
                    objectFit: "contain",
                    maxHeight: "500px"
                }
            }, void 0, false, {
                fileName: "src/pages/Setting/others/cms/SignUpImageElement.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Setting/others/cms/SignUpImageElement.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    const getSignUpImage = async ()=>{
        await (0, _others._getSignupImage)().then((res)=>{
            setSignUpImage(res.data[0].images[0]);
        });
    };
    return (0, _jsxdevruntime.jsxDEV)(SignUpImageElement, {}, void 0, false, {
        fileName: "src/pages/Setting/others/cms/SignUpImageElement.tsx",
        lineNumber: 124,
        columnNumber: 10
    }, this);
}
_s(Index, "EoP+Lb1E64m4yVVxId+uGED7shE=");
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
"src/pages/Setting/others/index.tsx": function (module, exports, __mako_require__){
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
var _BaseModel = _interop_require_default._(__mako_require__("src/components/Base/BaseModel.tsx"));
var _BaseSearch = _interop_require_default._(__mako_require__("src/components/Base/BaseSearch.tsx"));
var _BaseTable = _interop_require_default._(__mako_require__("src/components/Base/BaseTable.tsx"));
var _others = __mako_require__("src/services/setting/others.ts");
var _searchHelper = _interop_require_default._(__mako_require__("src/util/searchHelper.ts"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _LoginImageElement = _interop_require_default._(__mako_require__("src/pages/Setting/others/cms/LoginImageElement.tsx"));
var _SignUpImageElement = _interop_require_default._(__mako_require__("src/pages/Setting/others/cms/SignUpImageElement.tsx"));
var _HomeTitileImage = _interop_require_default._(__mako_require__("src/pages/Setting/others/cms/HomeTitileImage.tsx"));
var _HomeFooterImage = _interop_require_default._(__mako_require__("src/pages/Setting/others/cms/HomeFooterImage.tsx"));
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
    const [bannerFormReadOnly, setBannerFormReadOnly] = (0, _react.useState)(true);
    const bannerFormRef = (0, _react.useRef)();
    const { refresh: BannerFormDataRefresh } = (0, _max.useRequest)(_others._getBannerContext, {
        onSuccess: async (res)=>{
            var _data_children, _data_children1, _data_children2, _data_children_, _data_children3, _data_children_1, _data_children4, _data_children_2, _data_children5, _data_children_3, _data_children6, _data_children_4, _data_children7, _data_children_5, _data_children8, _data_children_6, _data_children9, _data_children_7, _data_children10, _data_children_8, _data_children11, _bannerFormRef_current;
            console.log("获取到的原始数据:", res);
            if (!res || !res[0]) {
                console.warn("没有获取到数据");
                return;
            }
            const videoRes = await (0, _others._getBannerVideo)();
            console.log("videoRes", videoRes);
            const data = res[0];
            console.log("要设置的数据:", {
                url: Array.isArray(data.youtube_url) ? data.youtube_url[0] : data.youtube_url,
                description1: (_data_children = data.children) === null || _data_children === void 0 ? void 0 : _data_children[0],
                description2: (_data_children1 = data.children) === null || _data_children1 === void 0 ? void 0 : _data_children1[1],
                description3: (_data_children2 = data.children) === null || _data_children2 === void 0 ? void 0 : _data_children2[2]
            });
            (_bannerFormRef_current = bannerFormRef.current) === null || _bannerFormRef_current === void 0 || _bannerFormRef_current.setFieldsValue({
                url: videoRes.data,
                description1: {
                    title: ((_data_children3 = data.children) === null || _data_children3 === void 0 ? void 0 : (_data_children_ = _data_children3[0]) === null || _data_children_ === void 0 ? void 0 : _data_children_.title) ?? "",
                    subtitle: ((_data_children4 = data.children) === null || _data_children4 === void 0 ? void 0 : (_data_children_1 = _data_children4[0]) === null || _data_children_1 === void 0 ? void 0 : _data_children_1.subtitle) ?? "",
                    body: ((_data_children5 = data.children) === null || _data_children5 === void 0 ? void 0 : (_data_children_2 = _data_children5[0]) === null || _data_children_2 === void 0 ? void 0 : _data_children_2.body) ?? ""
                },
                description2: {
                    title: ((_data_children6 = data.children) === null || _data_children6 === void 0 ? void 0 : (_data_children_3 = _data_children6[1]) === null || _data_children_3 === void 0 ? void 0 : _data_children_3.title) ?? "",
                    subtitle: ((_data_children7 = data.children) === null || _data_children7 === void 0 ? void 0 : (_data_children_4 = _data_children7[1]) === null || _data_children_4 === void 0 ? void 0 : _data_children_4.subtitle) ?? "",
                    body: ((_data_children8 = data.children) === null || _data_children8 === void 0 ? void 0 : (_data_children_5 = _data_children8[1]) === null || _data_children_5 === void 0 ? void 0 : _data_children_5.body) ?? ""
                },
                description3: {
                    title: ((_data_children9 = data.children) === null || _data_children9 === void 0 ? void 0 : (_data_children_6 = _data_children9[2]) === null || _data_children_6 === void 0 ? void 0 : _data_children_6.title) ?? "",
                    subtitle: ((_data_children10 = data.children) === null || _data_children10 === void 0 ? void 0 : (_data_children_7 = _data_children10[2]) === null || _data_children_7 === void 0 ? void 0 : _data_children_7.subtitle) ?? "",
                    body: ((_data_children11 = data.children) === null || _data_children11 === void 0 ? void 0 : (_data_children_8 = _data_children11[2]) === null || _data_children_8 === void 0 ? void 0 : _data_children_8.body) ?? ""
                }
            });
        }
    });
    const actionRef = (0, _react.useRef)();
    const [searchKey, setSearchKey] = (0, _react.useState)("");
    const [reload, setReload] = (0, _react.useState)(()=>{
        var _actionRef_current;
        return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
    });
    const termsConditionActionRef = (0, _react.useRef)();
    const [termsConditionSearchKey, setTermsConditionSearchKey] = (0, _react.useState)("");
    const [termsConditionReload, setTermsConditionReload] = (0, _react.useState)(()=>{
        var _termsConditionActionRef_current;
        return (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 ? void 0 : _termsConditionActionRef_current.reload;
    });
    const [loading, setLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        setReload(()=>{
            var _actionRef_current;
            return (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload;
        });
    }, []);
    const uploadProps = {
        name: "file",
        showUploadList: false,
        beforeUpload: ()=>false,
        accept: "video/*",
        onChange: async (info)=>{
            var _info_fileList_;
            const file = (_info_fileList_ = info.fileList[0]) === null || _info_fileList_ === void 0 ? void 0 : _info_fileList_.originFileObj;
            if (file) {
                if (!file.type.startsWith("video/")) {
                    _antd.message.error("请上传视频文件");
                    return;
                }
                const maxSize = 104857600;
                if (file.size > maxSize) {
                    _antd.message.error("视频文件不能超过 100MB");
                    return;
                }
                try {
                    setLoading(true);
                    const response = await (0, _others._updateBannerVideo)({
                        youtube_url: file
                    });
                    if (response.status) {
                        _antd.message.success("上传成功");
                        BannerFormDataRefresh();
                    } else _antd.message.error("上传失败");
                } catch (error) {
                    _antd.message.error("上传失败");
                    console.error(error);
                } finally{
                    setLoading(false);
                }
            }
        }
    };
    const BannerVideoElement = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
            spinning: loading,
            tip: "视频上传中...",
            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm, {
                formRef: bannerFormRef,
                onFinish: async (values)=>{
                    try {
                        var _values_description1, _values_description11, _values_description12, _values_description2, _values_description21, _values_description22, _values_description3, _values_description31, _values_description32;
                        const children = [
                            {
                                title: (_values_description1 = values.description1) === null || _values_description1 === void 0 ? void 0 : _values_description1.title,
                                subtitle: (_values_description11 = values.description1) === null || _values_description11 === void 0 ? void 0 : _values_description11.subtitle,
                                body: (_values_description12 = values.description1) === null || _values_description12 === void 0 ? void 0 : _values_description12.body
                            },
                            {
                                title: (_values_description2 = values.description2) === null || _values_description2 === void 0 ? void 0 : _values_description2.title,
                                subtitle: (_values_description21 = values.description2) === null || _values_description21 === void 0 ? void 0 : _values_description21.subtitle,
                                body: (_values_description22 = values.description2) === null || _values_description22 === void 0 ? void 0 : _values_description22.body
                            },
                            {
                                title: (_values_description3 = values.description3) === null || _values_description3 === void 0 ? void 0 : _values_description3.title,
                                subtitle: (_values_description31 = values.description3) === null || _values_description31 === void 0 ? void 0 : _values_description31.subtitle,
                                body: (_values_description32 = values.description3) === null || _values_description32 === void 0 ? void 0 : _values_description32.body
                            }
                        ].filter((item)=>item.title || item.subtitle || item.body);
                        const formData = {
                            youtube_url: values.url || "",
                            children: children
                        };
                        await (0, _others._updateBannerVideo)(formData);
                        _antd.message.success("Update banner success");
                    } catch (error) {
                        console.log("error", error);
                        _antd.message.error("Update banner failed");
                    } finally{
                        BannerFormDataRefresh();
                        setBannerFormReadOnly(true);
                        return true;
                    }
                },
                submitter: {
                    searchConfig: {
                        resetText: "Cancel",
                        submitText: "Save"
                    },
                    onReset: (e)=>{
                        setBannerFormReadOnly(true);
                        BannerFormDataRefresh();
                    },
                    render (props, dom) {
                        const editButton = (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "primary",
                            onClick: ()=>setBannerFormReadOnly(false),
                            children: "Edit"
                        }, void 0, false, void 0, void 0);
                        if (bannerFormReadOnly) return editButton;
                        else return dom;
                    }
                },
                grid: true,
                readonly: bannerFormReadOnly,
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        colProps: {
                            span: 16
                        },
                        label: "Video url",
                        readonly: true,
                        fieldProps: {
                            style: {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }
                        },
                        name: "url",
                        extra: (0, _jsxdevruntime.jsxDEV)(_antd.Upload, {
                            ...uploadProps,
                            children: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                icon: (0, _jsxdevruntime.jsxDEV)(_icons.UploadOutlined, {}, void 0, false, void 0, void 0),
                                children: "Click to Update Video"
                            }, void 0, false, void 0, void 0)
                        }, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/pages/Setting/others/index.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                        title: "Description one",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Title",
                                name: [
                                    "description1",
                                    "title"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Subtitle",
                                name: [
                                    "description1",
                                    "subtitle"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                colProps: {
                                    span: 12
                                },
                                label: "body",
                                name: [
                                    "description1",
                                    "body"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/others/index.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                        title: "Description two",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Title",
                                name: [
                                    "description2",
                                    "title"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Subtitle",
                                name: [
                                    "description2",
                                    "subtitle"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                colProps: {
                                    span: 12
                                },
                                label: "body",
                                name: [
                                    "description2",
                                    "body"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/others/index.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_procomponents.ProForm.Group, {
                        title: "Description three",
                        children: [
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Title",
                                name: [
                                    "description3",
                                    "title"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                colProps: {
                                    span: 12
                                },
                                label: "Subtitle",
                                name: [
                                    "description3",
                                    "subtitle"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                colProps: {
                                    span: 12
                                },
                                label: "body",
                                name: [
                                    "description3",
                                    "body"
                                ]
                            }, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Setting/others/index.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Setting/others/index.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    };
    const CategoryElement = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.EditableProTable, {
            rowKey: "_id",
            editable: {
                type: "single",
                onSave: async (key, record, originRow, newLineConfig)=>{
                    console.log("record", record);
                    if (record.isCreate) await (0, _others._createCategory)({
                        name: record.name
                    });
                    else await (0, _others._updateCategory)({
                        _id: record._id,
                        name: record.name,
                        isDisplay: record.isDisplay
                    });
                    return true;
                }
            },
            recordCreatorProps: {
                creatorButtonText: "Create",
                record: (Index)=>({
                        _id: Index,
                        isCreate: true,
                        name: "default name",
                        isDisplay: true
                    })
            },
            request: async ()=>{
                const res = await (0, _others._getCategory)();
                return {
                    data: res.data,
                    success: true
                };
            },
            columns: [
                {
                    title: "Category name",
                    dataIndex: "name"
                },
                {
                    title: "IsDisplay",
                    dataIndex: "isDisplay",
                    valueEnum: {
                        true: "Show",
                        false: "Hidden"
                    }
                },
                {
                    title: "Action",
                    valueType: "option",
                    width: 200,
                    render: (text, record, _, action)=>[
                            (0, _jsxdevruntime.jsxDEV)("a", {
                                onClick: ()=>{
                                    var _action_startEditable;
                                    action === null || action === void 0 || (_action_startEditable = action.startEditable) === null || _action_startEditable === void 0 || _action_startEditable.call(action, record._id, record);
                                },
                                children: "Edit"
                            }, "editable", false, void 0, void 0)
                        ]
                }
            ]
        }, void 0, false, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 301,
            columnNumber: 7
        }, this);
    };
    const PrivacyPolicyElement = ()=>{
        var _actionRef_current;
        return (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 ? void 0 : _actionRef_current.reload,
                    inputProps: {
                        value: searchKey,
                        onChange: ({ currentTarget: { value } })=>setSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: searchKey,
                    props: {
                        headerTitle: "Privacy policy List",
                        actionRef: actionRef,
                        optionsRender (props, defaultDom) {
                            const createFaq = (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                allowUpdate: false,
                                readOnly: false,
                                modalFormProps: {
                                    onFinish: async (value)=>{
                                        try {
                                            await (0, _others._postPrivacyPolicy)({
                                                context: value.context
                                            });
                                            _antd.message.success("Create faq success");
                                        } catch (error) {
                                            _antd.message.error("Create faq failed");
                                        } finally{
                                            var _actionRef_current;
                                            (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 || _actionRef_current.reload();
                                            return true;
                                        }
                                    },
                                    grid: true,
                                    trigger: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        icon: (0, _jsxdevruntime.jsxDEV)(_icons.PlusSquareOutlined, {}, void 0, false, void 0, void 0),
                                        type: "text"
                                    }, void 0, false, void 0, void 0),
                                    submitter: {
                                        searchConfig: {
                                            resetText: "Cancel",
                                            submitText: "Confirm"
                                        }
                                    }
                                },
                                title: "New Part",
                                children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                    colProps: {
                                        span: 18
                                    },
                                    label: "Context",
                                    name: "context"
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, void 0, void 0);
                            return [
                                createFaq,
                                ...defaultDom
                            ];
                        },
                        columns: [
                            {
                                key: "part",
                                title: "Part",
                                dataIndex: "part",
                                width: "10%",
                                align: "center",
                                sorter: (a, b)=>a.part - b.part
                            },
                            {
                                key: "context",
                                title: "Context",
                                dataIndex: "context",
                                align: "center",
                                copyable: true,
                                width: "80%",
                                valueType: "textarea",
                                ellipsis: true
                            },
                            {
                                title: "Actions",
                                dataIndex: "action",
                                key: "action",
                                render: (_, record)=>(0, _jsxdevruntime.jsxDEV)("span", {
                                        children: (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            allowUpdate: false,
                                            readOnly: false,
                                            modalFormProps: {
                                                onFinish: async (value)=>{
                                                    try {
                                                        await (0, _others._putPrivacyPolicy)({
                                                            part: value.part,
                                                            context: value.context
                                                        });
                                                        _antd.message.success("Create faq success");
                                                    } catch (error) {
                                                        _antd.message.error("Create faq failed");
                                                    } finally{
                                                        var _actionRef_current;
                                                        (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 || _actionRef_current.reload();
                                                        return true;
                                                    }
                                                },
                                                grid: true,
                                                submitter: {
                                                    searchConfig: {
                                                        resetText: "Cancel",
                                                        submitText: "Confirm"
                                                    }
                                                }
                                            },
                                            title: "New Part",
                                            children: [
                                                (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Part",
                                                    name: "part",
                                                    readonly: true,
                                                    initialValue: record.part
                                                }, void 0, false, void 0, void 0),
                                                (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Context",
                                                    initialValue: record.context,
                                                    name: "context"
                                                }, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true, void 0, void 0)
                                    }, void 0, false, void 0, void 0),
                                align: "center"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await (0, _others._getPrivacyPolicy)().then(({ data })=>{
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
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 368,
            columnNumber: 7
        }, this);
    };
    const TermsConditionElement = ()=>{
        var _termsConditionActionRef_current;
        return (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_BaseSearch.default, {
                    title: "Search bar",
                    submitFun: (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 ? void 0 : _termsConditionActionRef_current.reload,
                    inputProps: {
                        value: termsConditionSearchKey,
                        onChange: ({ currentTarget: { value } })=>setTermsConditionSearchKey(value)
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_BaseTable.default, {
                    searchKey: termsConditionSearchKey,
                    props: {
                        headerTitle: "Terms & Conditions List",
                        actionRef: termsConditionActionRef,
                        optionsRender (props, defaultDom) {
                            const createTermsCondition = (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                allowUpdate: false,
                                readOnly: false,
                                modalFormProps: {
                                    onFinish: async (value)=>{
                                        try {
                                            await (0, _others._postTermsCondition)({
                                                context: value.context
                                            });
                                            _antd.message.success("Create faq success");
                                        } catch (error) {
                                            _antd.message.error("Create faq failed");
                                        } finally{
                                            var _termsConditionActionRef_current;
                                            (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 || _termsConditionActionRef_current.reload();
                                            return true;
                                        }
                                    },
                                    grid: true,
                                    trigger: (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        icon: (0, _jsxdevruntime.jsxDEV)(_icons.PlusSquareOutlined, {}, void 0, false, void 0, void 0),
                                        type: "text"
                                    }, void 0, false, void 0, void 0),
                                    submitter: {
                                        searchConfig: {
                                            resetText: "Cancel",
                                            submitText: "Confirm"
                                        }
                                    }
                                },
                                title: "New Part",
                                children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                    colProps: {
                                        span: 18
                                    },
                                    label: "Context",
                                    name: "context"
                                }, void 0, false, void 0, void 0)
                            }, void 0, false, void 0, void 0);
                            return [
                                createTermsCondition,
                                ...defaultDom
                            ];
                        },
                        columns: [
                            {
                                key: "part",
                                title: "Part",
                                dataIndex: "part",
                                width: "10%",
                                align: "center",
                                sorter: (a, b)=>a.part - b.part
                            },
                            {
                                key: "context",
                                title: "Context",
                                dataIndex: "context",
                                align: "center",
                                copyable: true,
                                width: "80%",
                                valueType: "textarea",
                                ellipsis: true
                            },
                            {
                                title: "Actions",
                                dataIndex: "action",
                                key: "action",
                                render: (_, record)=>(0, _jsxdevruntime.jsxDEV)("span", {
                                        children: (0, _jsxdevruntime.jsxDEV)(_BaseModel.default, {
                                            allowUpdate: false,
                                            readOnly: false,
                                            modalFormProps: {
                                                onFinish: async (value)=>{
                                                    try {
                                                        await (0, _others._putTermsCondition)({
                                                            part: value.part,
                                                            context: value.context
                                                        });
                                                        _antd.message.success("Create faq success");
                                                    } catch (error) {
                                                        _antd.message.error("Create faq failed");
                                                    } finally{
                                                        var _termsConditionActionRef_current;
                                                        (_termsConditionActionRef_current = termsConditionActionRef.current) === null || _termsConditionActionRef_current === void 0 || _termsConditionActionRef_current.reload();
                                                        return true;
                                                    }
                                                },
                                                grid: true,
                                                submitter: {
                                                    searchConfig: {
                                                        resetText: "Cancel",
                                                        submitText: "Confirm"
                                                    }
                                                }
                                            },
                                            title: "New Part",
                                            children: [
                                                (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Part",
                                                    name: "part",
                                                    readonly: true,
                                                    initialValue: record.part
                                                }, void 0, false, void 0, void 0),
                                                (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                                                    colProps: {
                                                        span: 18
                                                    },
                                                    label: "Context",
                                                    initialValue: record.context,
                                                    name: "context"
                                                }, void 0, false, void 0, void 0)
                                            ]
                                        }, void 0, true, void 0, void 0)
                                    }, void 0, false, void 0, void 0),
                                align: "center"
                            }
                        ],
                        request: async ()=>{
                            const dataSource = await (0, _others._getTermsCondition)().then(({ data })=>{
                                return {
                                    success: true,
                                    data: data
                                };
                            });
                            if (termsConditionSearchKey) {
                                dataSource.data = (0, _searchHelper.default)({
                                    dataSource: dataSource.data,
                                    keyWord: termsConditionSearchKey
                                });
                                return dataSource;
                            } else return dataSource;
                        }
                    }
                }, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 519,
            columnNumber: 7
        }, this);
    };
    const CmsElement = ()=>{
        return (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "CMS",
            headerBordered: true,
            ghost: true,
            children: [
                (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                    gutter: 16,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: (0, _jsxdevruntime.jsxDEV)(_LoginImageElement.default, {}, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 675,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: (0, _jsxdevruntime.jsxDEV)(_SignUpImageElement.default, {}, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 677,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 673,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 681,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                    gutter: 16,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: (0, _jsxdevruntime.jsxDEV)(_HomeTitileImage.default, {}, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: (0, _jsxdevruntime.jsxDEV)(_HomeFooterImage.default, {}, void 0, false, {
                                fileName: "src/pages/Setting/others/index.tsx",
                                lineNumber: 687,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Setting/others/index.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Setting/others/index.tsx",
                    lineNumber: 682,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 672,
            columnNumber: 7
        }, this);
    };
    return (0, _jsxdevruntime.jsxDEV)(_BaseIndex.default, {
        title: "Other settings",
        children: (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
            title: "Settings card",
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
                        label: `Banner video`,
                        key: "tab1",
                        children: BannerVideoElement()
                    },
                    {
                        label: `Category`,
                        key: "tab2",
                        children: CategoryElement()
                    },
                    {
                        label: `Privacy policy`,
                        key: "tab3",
                        children: PrivacyPolicyElement()
                    },
                    {
                        label: `Terms & Conditions`,
                        key: "tab4",
                        children: TermsConditionElement()
                    },
                    {
                        label: `CMS`,
                        key: "tab5",
                        children: CmsElement()
                    }
                ],
                onChange: (key)=>{
                    setTab(key);
                }
            }
        }, void 0, false, {
            fileName: "src/pages/Setting/others/index.tsx",
            lineNumber: 698,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Setting/others/index.tsx",
        lineNumber: 697,
        columnNumber: 5
    }, this);
}
_s(Index, "uPdNY3wlJTGvkyx+4HWM7/1CNxI=", false, function() {
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
"src/services/setting/others.ts": function (module, exports, __mako_require__){
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
    _createCategory: function() {
        return _createCategory;
    },
    _getBannerContext: function() {
        return _getBannerContext;
    },
    _getBannerVideo: function() {
        return _getBannerVideo;
    },
    _getCMSImage: function() {
        return _getCMSImage;
    },
    _getCategory: function() {
        return _getCategory;
    },
    _getLoginImage: function() {
        return _getLoginImage;
    },
    _getPrivacyPolicy: function() {
        return _getPrivacyPolicy;
    },
    _getSignupImage: function() {
        return _getSignupImage;
    },
    _getTermsCondition: function() {
        return _getTermsCondition;
    },
    _postPrivacyPolicy: function() {
        return _postPrivacyPolicy;
    },
    _postTermsCondition: function() {
        return _postTermsCondition;
    },
    _putPrivacyPolicy: function() {
        return _putPrivacyPolicy;
    },
    _putTermsCondition: function() {
        return _putTermsCondition;
    },
    _updateBannerContext: function() {
        return _updateBannerContext;
    },
    _updateBannerVideo: function() {
        return _updateBannerVideo;
    },
    _updateCMSImage: function() {
        return _updateCMSImage;
    },
    _updateCategory: function() {
        return _updateCategory;
    },
    _updateLoginImage: function() {
        return _updateLoginImage;
    },
    _updateSignupImage: function() {
        return _updateSignupImage;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const _getBannerContext = async ()=>{
    const result = await (0, _max.request)(`/api/v1/global/public/cms/9527`, {
        method: "get"
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _getBannerVideo = async ()=>{
    const result = await (0, _max.request)(`/api/v1/global/public/cms/banner/video`, {
        method: "get"
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _updateBannerContext = async (data)=>{
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/banner`, {
        method: "put",
        data: data
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _updateBannerVideo = async (data)=>{
    const formData = new FormData();
    formData.append("file", data.youtube_url);
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/banner/video`, {
        method: "put",
        data: formData,
        requestType: "form",
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _getLoginImage = async ()=>{
    const result = await (0, _max.request)(`/api/v1/global/public/cms/0678`, {
        method: "get"
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _updateLoginImage = async (data)=>{
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("session", "0678");
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/single-image`, {
        method: "put",
        data: formData,
        requestType: "form",
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _getSignupImage = async ()=>{
    const result = await (0, _max.request)(`/api/v1/global/public/cms/0595`, {
        method: "get"
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _updateSignupImage = async (data)=>{
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("session", "0595");
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/single-image`, {
        method: "put",
        data: formData,
        requestType: "form",
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return {
        data: result,
        status: true,
        code: 200
    };
};
const _getCategory = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "get"
    });
};
const _updateCategory = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "put",
        data: {
            ...values,
            isDisplay: JSON.parse(values.isDisplay)
        }
    });
};
const _createCategory = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/category`, {
        method: "post",
        params: {
            name: values.name
        }
    });
};
const _getPrivacyPolicy = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "get"
    });
};
const _postPrivacyPolicy = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "post",
        data: {
            context: values.context
        }
    });
};
const _putPrivacyPolicy = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/privacy`, {
        method: "put",
        data: {
            context: values.context,
            part: values.part
        }
    });
};
const _getTermsCondition = async ()=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "get"
    });
};
const _postTermsCondition = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "post",
        data: {
            context: values.context
        }
    });
};
const _putTermsCondition = async (values)=>{
    return await (0, _max.request)(`/api/v1/admin/private/termsCondition`, {
        method: "put",
        data: {
            context: values.context,
            part: values.part
        }
    });
};
const _getCMSImage = async (session_id)=>{
    return await (0, _max.request)(`/api/v1/admin/private/cms/${session_id}`, {
        method: "get"
    });
};
const _updateCMSImage = async (data)=>{
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("session", data.session.toString());
    const result = await (0, _max.request)(`/api/v1/admin/private/cms/single-image`, {
        method: "put",
        data: formData,
        requestType: "form",
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return {
        data: result,
        status: true,
        code: 200
    };
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
 }]);
//# sourceMappingURL=src_pages_Setting_others_index_tsx-async.js.map