"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_universal_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/universal/Menu.module.css */ \"./styles/universal/Menu.module.css\");\n/* harmony import */ var _styles_universal_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_universal_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_universal_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/universal/NavBar */ \"./components/universal/NavBar.js\");\n/* harmony import */ var _components_universal_MenuNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/universal/MenuNavBar */ \"./components/universal/MenuNavBar.js\");\n/* harmony import */ var _components_universal_MenuItemCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/universal/MenuItemCard */ \"./components/universal/MenuItemCard.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./pages/data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar navItems = [\n    {\n        navItemName: \"Home\",\n        route: \"/\"\n    },\n    {\n        navItemName: \"Menu\",\n        route: \"/menu\"\n    },\n    {\n        navItemName: \"Find\",\n        route: \"/find\"\n    }, \n];\nfunction Home(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filter(function(item) {\n        return item.item_type === \"Entree\";\n    })), myitems = ref[0], setItems = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_universal_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                navItems: navItems,\n                isCustomer: false\n            }, void 0, false, {\n                fileName: \"/Users/aakash_personal/Desktop/TexasA&M/TAMU/CSCE 315/Project 3/pos_system/pages/menu.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_universal_MenuNavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                menuNavBar: true,\n                myitems: _data__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                setItems: setItems\n            }, void 0, false, {\n                fileName: \"/Users/aakash_personal/Desktop/TexasA&M/TAMU/CSCE 315/Project 3/pos_system/pages/menu.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_universal_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridcontainer),\n                children: myitems.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_universal_MenuItemCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: (_styles_universal_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().griditem),\n                        item: item\n                    }, void 0, false, {\n                        fileName: \"/Users/aakash_personal/Desktop/TexasA&M/TAMU/CSCE 315/Project 3/pos_system/pages/menu.js\",\n                        lineNumber: 22,\n                        columnNumber: 42\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aakash_personal/Desktop/TexasA&M/TAMU/CSCE 315/Project 3/pos_system/pages/menu.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aakash_personal/Desktop/TexasA&M/TAMU/CSCE 315/Project 3/pos_system/pages/menu.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4gpGFd/CgfWzIWWtp6t9b2oZDDA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXVEO0FBQ0o7QUFDUztBQUNJO0FBQ3RDO0FBQ1k7QUFFdEMsSUFBTU8sUUFBUSxHQUFHO0lBQ2Y7UUFBRUMsV0FBVyxFQUFFLE1BQU07UUFBRUMsS0FBSyxFQUFFLEdBQUc7S0FBRTtJQUNuQztRQUFFRCxXQUFXLEVBQUUsTUFBTTtRQUFFQyxLQUFLLEVBQUUsT0FBTztLQUFFO0lBQ3ZDO1FBQUVELFdBQVcsRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRSxPQUFPO0tBQUU7Q0FDeEM7QUFFYyxTQUFTQyxJQUFJLENBQUNDLEtBQUssRUFBRTs7O0lBQ2xDLElBQTZCTCxHQUE2RCxHQUE3REEsK0NBQVEsQ0FBQ0Ysb0RBQVksQ0FBQyxTQUFDUyxJQUFJO2VBQUtBLElBQUksQ0FBQ0MsU0FBUyxLQUFLLFFBQVE7S0FBQSxDQUFDLENBQUMsRUFBbkZDLE9BQU8sR0FBZVQsR0FBNkQsR0FBNUUsRUFBRVUsUUFBUSxHQUFLVixHQUE2RCxHQUFsRTtJQUN4QixxQkFDRSw4REFBQ1csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBQ0MsTUFBTSxFQUFFLEVBQUU7U0FBQzs7MEJBQ3RCLDhEQUFDbEIsb0VBQU07Z0JBQUNNLFFBQVEsRUFBRUEsUUFBUTtnQkFBRWEsVUFBVSxFQUFFLEtBQUs7Ozs7O29CQUFJOzBCQUNqRCw4REFBQ2xCLHdFQUFVO2dCQUFDbUIsVUFBVTtnQkFBQ04sT0FBTyxFQUFHWCw2Q0FBSztnQkFBRVksUUFBUSxFQUFJQSxRQUFROzs7OztvQkFBZ0I7MEJBRTVFLDhEQUFDQyxLQUFHO2dCQUFDSyxTQUFTLEVBQUl0Qix3RkFBa0I7MEJBQy9CZSxPQUFPLENBQUNTLEdBQUcsQ0FBQyxTQUFDWCxJQUFJLEVBQUs7b0JBQUMscUJBQU8sOERBQUNWLDBFQUFZO3dCQUFDbUIsU0FBUyxFQUFJdEIsbUZBQWE7d0JBQUVhLElBQUksRUFBSUEsSUFBSTs7Ozs7NkJBQWlCO2dCQUFBLENBQUMsQ0FBQzs7Ozs7b0JBQ3RHOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQVp1QkgsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lbnUuanM/ZWMwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudSBmcm9tICcuLi9zdHlsZXMvdW5pdmVyc2FsL01lbnUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy91bml2ZXJzYWwvTmF2QmFyJ1xyXG5pbXBvcnQgTWVudU5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL3VuaXZlcnNhbC9NZW51TmF2QmFyJztcclxuaW1wb3J0IE1lbnVJdGVtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VuaXZlcnNhbC9NZW51SXRlbUNhcmQnO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9kYXRhJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBuYXZJdGVtcyA9IFtcclxuICB7IG5hdkl0ZW1OYW1lOiBcIkhvbWVcIiwgcm91dGU6IFwiL1wiIH0sXHJcbiAgeyBuYXZJdGVtTmFtZTogXCJNZW51XCIsIHJvdXRlOiBcIi9tZW51XCIgfSxcclxuICB7IG5hdkl0ZW1OYW1lOiBcIkZpbmRcIiwgcm91dGU6IFwiL2ZpbmRcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFtteWl0ZW1zLCBzZXRJdGVtcyBdID0gdXNlU3RhdGUoaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLml0ZW1fdHlwZSA9PT0gXCJFbnRyZWVcIikpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnJ319PlxyXG4gICAgICA8TmF2QmFyIG5hdkl0ZW1zPXtuYXZJdGVtc30gaXNDdXN0b21lcj17ZmFsc2V9IC8+XHJcbiAgICAgIDxNZW51TmF2QmFyIG1lbnVOYXZCYXIgbXlpdGVtcyA9e2l0ZW1zfSBzZXRJdGVtcyA9IHtzZXRJdGVtc30gPjwvTWVudU5hdkJhcj4gXHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHttZW51LmdyaWRjb250YWluZXJ9PiBcclxuICAgICAgICAgIHtteWl0ZW1zLm1hcCgoaXRlbSkgPT4ge3JldHVybiA8TWVudUl0ZW1DYXJkIGNsYXNzTmFtZSA9IHttZW51LmdyaWRpdGVtfSBpdGVtID0ge2l0ZW19PjwvTWVudUl0ZW1DYXJkPn0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtZW51IiwiTmF2QmFyIiwiTWVudU5hdkJhciIsIk1lbnVJdGVtQ2FyZCIsIml0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hdkl0ZW1zIiwibmF2SXRlbU5hbWUiLCJyb3V0ZSIsIkhvbWUiLCJwcm9wcyIsImZpbHRlciIsIml0ZW0iLCJpdGVtX3R5cGUiLCJteWl0ZW1zIiwic2V0SXRlbXMiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsImlzQ3VzdG9tZXIiLCJtZW51TmF2QmFyIiwiY2xhc3NOYW1lIiwiZ3JpZGNvbnRhaW5lciIsIm1hcCIsImdyaWRpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/menu.js\n"));

/***/ })

});