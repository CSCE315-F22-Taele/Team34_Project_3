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
exports.id = "pages/menu/[category]";
exports.ids = ["pages/menu/[category]"];
exports.modules = {

/***/ "./pages/menu/[category].js":
/*!**********************************!*\
  !*** ./pages/menu/[category].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getProductsByCategory\": () => (/* binding */ getProductsByCategory)\n/* harmony export */ });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./pages/menu/data.json\");\n\nfunction getProductsByCategory(category) {\n    const products = _data_json__WEBPACK_IMPORTED_MODULE_0__.filter((product)=>product.category === category);\n    return products;\n}\nfunction handler(req, res) {\n    if (req.method !== \"GET\") {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} is not allowed`\n        });\n    } else {\n        const products = getProductsByCategory(req.query.category);\n        res.status(200).json(products);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW51L1tjYXRlZ29yeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLFNBQVNDLHFCQUFxQixDQUFDQyxRQUFRLEVBQUU7SUFDOUMsTUFBTUMsUUFBUSxHQUFHSCw4Q0FBVyxDQUFDLENBQUNLLE9BQU8sR0FBS0EsT0FBTyxDQUFDSCxRQUFRLEtBQUtBLFFBQVEsQ0FBQztJQUN4RSxPQUFPQyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVjLFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDO1FBQ2hDRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDRSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQUUsQ0FBQyxDQUFDO0lBQzNFLE9BQU87UUFDTCxNQUFNTixRQUFRLEdBQUdGLHFCQUFxQixDQUFDTSxHQUFHLENBQUNPLEtBQUssQ0FBQ1osUUFBUSxDQUFDO1FBQzFETSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVCxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc19zeXN0ZW0vLi9wYWdlcy9tZW51L1tjYXRlZ29yeV0uanM/MGE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBwcm9kdWN0cztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IGlzIG5vdCBhbGxvd2VkYCB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxLnF1ZXJ5LmNhdGVnb3J5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhdGEiLCJnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsInByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/menu/[category].js\n");

/***/ }),

/***/ "./pages/menu/data.json":
/*!******************************!*\
  !*** ./pages/menu/data.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"item_id":1,"item_name":"CFA Chicken","item_price":"4.29","item_type":"Entree","image":""},{"item_id":1,"item_name":"CFA Spicy","item_price":"4.29","item_type":"Entree","image":""},{"item_id":1,"item_name":"CFA Spicy Deluxe","item_price":"4.29","item_type":"Entree","image":""}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/menu/[category].js"));
module.exports = __webpack_exports__;

})();