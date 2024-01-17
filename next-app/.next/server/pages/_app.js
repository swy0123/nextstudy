"use strict";
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

/***/ "__barrel_optimize__?names=IoLogoGithub!=!./node_modules/react-icons/io/index.mjs":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=IoLogoGithub!=!./node_modules/react-icons/io/index.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_swy05_nextjs_next_app_node_modules_react_icons_io_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/io/index.mjs */ "./node_modules/react-icons/io/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_swy05_nextjs_next_app_node_modules_react_icons_io_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_swy05_nextjs_next_app_node_modules_react_icons_io_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./component/Header.jsx":
/*!******************************!*\
  !*** ./component/Header.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoLogoGithub_react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=IoLogoGithub!=!react-icons/io */ \"__barrel_optimize__?names=IoLogoGithub!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst HeaderCss = new String(\".header-wrapper.jsx-e2cb23274404b989{padding:14px 14px;background-color:#24292e;line-height:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header-search-form.jsx-e2cb23274404b989 input.jsx-e2cb23274404b989{margin:0 16px;background-color:hsla(0,0%,100%,.125);width:300px;height:28px;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;outline:none;color:white;padding:0 12px;font-size:14px;font-weight:bold}.header-navigations.jsx-e2cb23274404b989 a.jsx-e2cb23274404b989{color:white;margin-right:16px;font-size:14px;font-weight:bold;text-decoration:none}\");\nHeaderCss.__hash = \"e2cb23274404b989\";\nconst Header = ()=>{\n    const [username, serUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        router.push(`/users/${username}`);\n        serUsername(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `jsx-${HeaderCss.__hash}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLogoGithub_react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoLogoGithub, {\n                        color: \"white\",\n                        size: 36\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-search-form\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: username,\n                            onChange: (e)=>serUsername(e.target.value),\n                            className: `jsx-${HeaderCss.__hash}`\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-navigations\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/pulls\",\n                                className: `jsx-${HeaderCss.__hash}`,\n                                children: \"Pull Request\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/issues\",\n                                className: `jsx-${HeaderCss.__hash}`,\n                                children: \"Issues\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/marketplace\",\n                                className: `jsx-${HeaderCss.__hash}`,\n                                children: \"Marketplace\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/explore\",\n                                className: `jsx-${HeaderCss.__hash}`,\n                                children: \"Explore\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: HeaderCss.__hash,\n                children: HeaderCss\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\component\\\\Header.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFTDtBQUNOO0FBRXhDLE1BQU1LOztBQThCTixNQUFNQyxTQUFTO0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1RLFNBQVNMLHNEQUFTQTtJQUV4QixNQUFNTSxXQUFXLENBQUNDO1FBQ2hCQSxFQUFFQyxjQUFjO1FBQ2hCSCxPQUFPSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVOLFNBQVMsQ0FBQztRQUNoQ0MsWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNNOzBCQWFhVDs7MEJBWlosOERBQUNTO2tDQVlXVCwyQkFaRzs7a0NBQ2IsOERBQUNGLDRGQUFZQTt3QkFBQ1ksT0FBTTt3QkFBUUMsTUFBTTs7Ozs7O2tDQUNsQyw4REFBQ0M7d0JBQW9DUCxVQUFVQTswQ0FVckNMLDJCQVZNO2tDQUNkLDRFQUFDYTs0QkFBTUMsT0FBT1o7NEJBQVVhLFVBQVUsQ0FBQ1QsSUFBTUgsWUFBWUcsRUFBRVUsTUFBTSxDQUFDRixLQUFLOzhDQVMzRGQ7Ozs7Ozs7Ozs7O2tDQVBWLDhEQUFDaUI7MENBT1NqQiwyQkFQSzs7MENBQ2IsOERBQUNrQjtnQ0FBRUMsTUFBSztrREFNQW5COzBDQU4yQjs7Ozs7OzBDQUNuQyw4REFBQ2tCO2dDQUFFQyxNQUFLO2tEQUtBbkI7MENBTDRCOzs7Ozs7MENBQ3BDLDhEQUFDa0I7Z0NBQUVDLE1BQUs7a0RBSUFuQjswQ0FKaUM7Ozs7OzswQ0FDekMsOERBQUNrQjtnQ0FBRUMsTUFBSztrREFHQW5COzBDQUg2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFHN0JBOzBCQUFBQTs7Ozs7Ozs7QUFHbEI7QUFFQSxpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vY29tcG9uZW50L0hlYWRlci5qc3g/MWIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZXJTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgeyBJb0xvZ29HaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXJDc3MgPSBjc3NgXHJcbiAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaGVhZGVyLXNlYXJjaC1mb3JtIGlucHV0IHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xMjUpO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuaGVhZGVyLW5hdmlnYXRpb25zIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2VyVXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKGAvdXNlcnMvJHt1c2VybmFtZX1gKTtcclxuICAgIHNlclVzZXJuYW1lKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgPElvTG9nb0dpdGh1YiBjb2xvcj1cIndoaXRlXCIgc2l6ZT17MzZ9PjwvSW9Mb2dvR2l0aHViPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtZm9ybVwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNlclVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2aWdhdGlvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsbHNcIj5QdWxsIFJlcXVlc3Q8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2lzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFya2V0cGxhY2VcIj5NYXJrZXRwbGFjZTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXhwbG9yZVwiPkV4cGxvcmU8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntIZWFkZXJDc3N9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlclN0YXRlIiwiSW9Mb2dvR2l0aHViIiwidXNlUm91dGVyIiwiSGVhZGVyQ3NzIiwiSGVhZGVyIiwidXNlcm5hbWUiLCJzZXJVc2VybmFtZSIsInJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImRpdiIsImNvbG9yIiwic2l6ZSIsImZvcm0iLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuYXYiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Header.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Header */ \"./component/Header.jsx\");\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\pages\\\\_app.jsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: \"jsx-9cd93253437b4b25\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\swy05\\\\nextjs\\\\next-app\\\\pages\\\\_app.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9cd93253437b4b25\",\n                children: \"body{margin:0;font-family:Noto Sans,Noto Sans KR}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUN6QyxNQUFNQyxRQUFRLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0U7OzBCQUNFLDhEQUFDSCx5REFBTUE7Ozs7OzBCQUNQLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzJEQUFUQSxhQUFBQSwrQkFBQUE7Ozs7Ozs7Ozs7OztBQVNyQjtBQUNBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9IZWFkZXJcIjtcclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgTm90byBTYW5zIEtSO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons"], () => (__webpack_exec__("./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();