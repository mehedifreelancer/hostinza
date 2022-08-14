/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de/about": [
		"./locales/de/about.json",
		"locales_de_about_json"
	],
	"./de/about.json": [
		"./locales/de/about.json",
		"locales_de_about_json"
	],
	"./de/common": [
		"./locales/de/common.json",
		"locales_de_common_json"
	],
	"./de/common.json": [
		"./locales/de/common.json",
		"locales_de_common_json"
	],
	"./en-US/about": [
		"./locales/en-US/about.json",
		"locales_en-US_about_json"
	],
	"./en-US/about.json": [
		"./locales/en-US/about.json",
		"locales_en-US_about_json"
	],
	"./en-US/account": [
		"./locales/en-US/account.json",
		"locales_en-US_account_json"
	],
	"./en-US/account.json": [
		"./locales/en-US/account.json",
		"locales_en-US_account_json"
	],
	"./en-US/common": [
		"./locales/en-US/common.json",
		"locales_en-US_common_json"
	],
	"./en-US/common.json": [
		"./locales/en-US/common.json",
		"locales_en-US_common_json"
	],
	"./es/common": [
		"./locales/es/common.json",
		"locales_es_common_json"
	],
	"./es/common.json": [
		"./locales/es/common.json",
		"locales_es_common_json"
	],
	"./fi/common": [
		"./locales/fi/common.json",
		"locales_fi_common_json"
	],
	"./fi/common.json": [
		"./locales/fi/common.json",
		"locales_fi_common_json"
	],
	"./fr/about": [
		"./locales/fr/about.json",
		"locales_fr_about_json"
	],
	"./fr/about.json": [
		"./locales/fr/about.json",
		"locales_fr_about_json"
	],
	"./fr/common": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./fr/common.json": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./it/common": [
		"./locales/it/common.json",
		"locales_it_common_json"
	],
	"./it/common.json": [
		"./locales/it/common.json",
		"locales_it_common_json"
	],
	"./nl/common": [
		"./locales/nl/common.json",
		"locales_nl_common_json"
	],
	"./nl/common.json": [
		"./locales/nl/common.json",
		"locales_nl_common_json"
	],
	"./sv/common": [
		"./locales/sv/common.json",
		"locales_sv_common_json"
	],
	"./sv/common.json": [
		"./locales/sv/common.json",
		"locales_sv_common_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_keycloak_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-keycloak/ssr */ \"@react-keycloak/ssr\");\n/* harmony import */ var _react_keycloak_ssr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_keycloak_ssr__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/auth-context */ \"./utils/auth-context.js\");\n\n\n\n\n\n\n\n\n\nconst Noop = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false)\n;\nfunction MyApp({ Component , pageProps , cookies  }) {\n    const Layout = Component.Layout || Noop;\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});\n    const value = {\n        user,\n        setUser\n    };\n    const keycloakCfg = {\n        url: \"https://auth.disdicilo.it/auth/\",\n        realm: \"deploy\",\n        clientId: \"next-auth\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_auth_context__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Provider, {\n            value: value,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_keycloak_ssr__WEBPACK_IMPORTED_MODULE_4__.SSRKeycloakProvider, {\n                keycloakConfig: keycloakCfg,\n                persistor: (0,_react_keycloak_ssr__WEBPACK_IMPORTED_MODULE_4__.SSRCookies)(cookies),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n                    ...pageProps,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mehed\\\\OneDrive\\\\Desktop\\\\My git\\\\hostinza-next_\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mehed\\\\OneDrive\\\\Desktop\\\\My git\\\\hostinza-next_\\\\pages\\\\_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mehed\\\\OneDrive\\\\Desktop\\\\My git\\\\hostinza-next_\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mehed\\\\OneDrive\\\\Desktop\\\\My git\\\\hostinza-next_\\\\pages\\\\_app.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nfunction parseCookies(req) {\n    if (!req || !req.headers) {\n        return {};\n    }\n    return cookie__WEBPACK_IMPORTED_MODULE_5___default().parse(req.headers.cookie || \"\");\n}\nasync function getStaticProps(context) {\n    return {\n        props: {\n            cookies: parseCookies(context?.ctx?.req)\n        }\n    };\n}\nconst __Page_Next_Translate__ = MyApp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, {\n    ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,\n    isLoader: true,\n    skipInitialProps: true,\n    loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default\n        )\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSTtBQUFvRDtBQUNFO0FBRTNCO0FBQ3VDO0FBQzFDO0FBQ0c7QUFDQztBQUNnQjtBQUVoRCxNQUFNUSxJQUFJLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsaUJBQUs7a0JBQUdBLFFBQVE7cUJBQUk7QUFBQztBQUUvQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUVDLE9BQU8sR0FBRSxFQUFFO0lBR2hELE1BQU1DLE1BQU0sR0FBRyxTQUFVLENBQUVBLE1BQU0sSUFBSU4sSUFBSTtJQUN6QyxNQUFNLEVBakJSLEdBaUJTTyxJQUFJLEdBakJiLEdBaUJlQyxPQUFPLE1BQUlWLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU1XLEtBQUssR0FBRztRQUFFRixJQUFJO1FBQUVDLE9BQU87S0FBRTtJQUUvQixNQUFNRSxXQUFXLEdBQUc7UUFDbEJDLEdBQUcsRUFBRUMsaUNBQWdDO1FBQ3JDRyxLQUFLLEVBQUVILFFBQWtDO1FBQ3pDSyxRQUFRLEVBQUVMLFdBQXNDO0tBQ2pEO0lBQ0QscUJBQ0U7a0JBQ0ksNEVBQUNiLG9FQUFvQjtZQUFDVSxLQUFLLEVBQUVBLEtBQUs7c0JBQ2hDLDRFQUFDZixvRUFBbUI7Z0JBQ2xCMEIsY0FBYyxFQUFFVixXQUFXO2dCQUMzQlcsU0FBUyxFQUFFMUIsK0RBQVUsQ0FBQ1UsT0FBTyxDQUFDOzBCQUU5Qiw0RUFBQ0MsTUFBTTtvQkFBRSxHQUFHRixTQUFTOzhCQUNuQiw0RUFBQ0QsU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7d0JBQ3JCOzs7OztvQkFDVzs7Ozs7Z0JBQ0Q7cUJBQ3hCLENBQ0g7Q0FDSDtBQUNELFNBQVNrQixZQUFZLENBQUNDLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUNBLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUNDLE9BQU8sRUFBRTtRQUN4QixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTzVCLG1EQUFZLENBQUMyQixHQUFHLENBQUNDLE9BQU8sQ0FBQzVCLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztDQUMvQztBQUVNLGVBQWU4QixjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMdkIsT0FBTyxFQUFFaUIsWUFBWSxDQUFDSyxPQUFPLEVBQUVFLEdBQUcsRUFBRU4sR0FBRyxDQUFDO1NBQ3pDO0tBQ0YsQ0FBQztDQUNIO0FBQ0QsTUFBTU8sdUJBQXVCLEdBQUc1QixLQUFLO0FBR2pDLGlFQUFlVCxpRUFBYSxDQUFDcUMsdUJBQXVCLEVBQUU7SUFDcEQsR0FBR3RDLHNEQUFZO0lBQ2Z1QyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxjQUFjLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUssZ0VBQU8sR0FBOEIsRUFBRUQsQ0FBQyxDQUFDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxPQUFPO1FBQUEsQ0FBQztDQUNoRyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3N0aW56YS1uZXh0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19hcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcbiAgICBcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBTU1JLZXljbG9ha1Byb3ZpZGVyLCBTU1JDb29raWVzIH0gZnJvbSBcIkByZWFjdC1rZXljbG9hay9zc3JcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vdXRpbHMvYXV0aC1jb250ZXh0XCI7XHJcblxyXG5jb25zdCBOb29wID0gKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+O1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY29va2llcyB9KSB7XHJcblxyXG5cclxuICBjb25zdCBMYXlvdXQgPSAoQ29tcG9uZW50KS5MYXlvdXQgfHwgTm9vcDtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgdmFsdWUgPSB7IHVzZXIsIHNldFVzZXIgfTtcclxuXHJcbiAgY29uc3Qga2V5Y2xvYWtDZmcgPSB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhfVVJMLFxyXG4gICAgcmVhbG06IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhfUkVBTE0sXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSF9DTElFTlRfSUQsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgIDxTU1JLZXljbG9ha1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIGtleWNsb2FrQ29uZmlnPXtrZXljbG9ha0NmZ31cclxuICAgICAgICAgICAgcGVyc2lzdG9yPXtTU1JDb29raWVzKGNvb2tpZXMpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGF5b3V0IHsuLi5wYWdlUHJvcHN9PlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8L1NTUktleWNsb2FrUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIGlmICghcmVxIHx8ICFyZXEuaGVhZGVycykge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICByZXR1cm4gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29va2llczogcGFyc2VDb29raWVzKGNvbnRleHQ/LmN0eD8ucmVxKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IE15QXBwO1xyXG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IF9fYXBwV2l0aEkxOG4oX19QYWdlX05leHRfVHJhbnNsYXRlX18sIHtcbiAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgIGlzTG9hZGVyOiB0cnVlLFxuICAgICAgc2tpcEluaXRpYWxQcm9wczogdHJ1ZSxcbiAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgIH0pO1xuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19hcHBXaXRoSTE4biIsIlNTUktleWNsb2FrUHJvdmlkZXIiLCJTU1JDb29raWVzIiwiY29va2llIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0IiwiTm9vcCIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb29raWVzIiwiTGF5b3V0IiwidXNlciIsInNldFVzZXIiLCJ2YWx1ZSIsImtleWNsb2FrQ2ZnIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FVVEhfVVJMIiwicmVhbG0iLCJORVhUX1BVQkxJQ19BVVRIX1JFQUxNIiwiY2xpZW50SWQiLCJORVhUX1BVQkxJQ19BVVRIX0NMSUVOVF9JRCIsIlByb3ZpZGVyIiwia2V5Y2xvYWtDb25maWciLCJwZXJzaXN0b3IiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJoZWFkZXJzIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsImN0eCIsIl9fUGFnZV9OZXh0X1RyYW5zbGF0ZV9fIiwiaXNMb2FkZXIiLCJza2lwSW5pdGlhbFByb3BzIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsInRoZW4iLCJtIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/auth-context.js":
/*!*******************************!*\
  !*** ./utils/auth-context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// set the defaults\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    user: {},\n    setUser: ()=>{}\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLG1CQUFtQjtBQUNuQixNQUFNRSxXQUFXLGlCQUFJRCxvREFBYSxDQUFDO0lBQ2pDRSxJQUFJLEVBQUUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsSUFBTSxFQUFFO0NBQ2xCLENBQUM7QUFFRixpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9zdGluemEtbmV4dC8uL3V0aWxzL2F1dGgtY29udGV4dC5qcz82MTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gc2V0IHRoZSBkZWZhdWx0c1xyXG5jb25zdCBBdXRoQ29udGV4dCA9ICBjcmVhdGVDb250ZXh0KHtcclxuICB1c2VyOiB7fSxcclxuICBzZXRVc2VyOiAoKSA9PiB7fVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VyIiwic2V0VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth-context.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@react-keycloak/ssr":
/*!**************************************!*\
  !*** external "@react-keycloak/ssr" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-keycloak/ssr");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["en-US","fr","de","it","sv","es","fi","nl"],"defaultLocale":"en-US","pages":{"*":["common"],"/":["home","example"],"/about-us":["about"],"/account":["account"],"/account/billing":["/account/billing"],"/account/invoices":["/account/invoices"],"/account/general":["/account/general"],"/cart":["/cart"],"/account/login-connections":["/account/login-connections"],"/checkout":["/checkout"],"/contact":["/contact"],"/choose-server":["/choose-server"],"/faq":["/faq"],"/referral-program":["/referral-program"],"/search":["/search"],"/support":["/support"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();