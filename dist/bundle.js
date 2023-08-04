/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card/Card.ts":
/*!*************************************!*\
  !*** ./src/components/Card/Card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"name\"] = \"name\";\n    Attribute[\"number\"] = \"number\";\n    Attribute[\"imagen\"] = \"imagen\";\n})(Attribute || (Attribute = {}));\nclass AppCard extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            name: null,\n            number: null,\n            imagen: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\r\n            <link rel=\"stylesheet\" href=\"../src/components/Card/Card.css\">\r\n            <section id=\"section\">\r\n            <ul>\r\n            \r\n            <h1>Name: ${this.name}</h1>\r\n            <h2>#  ${this.number}</h2>\r\n            <img src=\"${this.imagen}\"></img>\r\n            \r\n            </ul>\r\n            \r\n            \r\n            </section>\r\n            `;\n        }\n    }\n}\ncustomElements.define('app-card', AppCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Card/Card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppCard\": () => (/* reexport safe */ _Card_Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card/Card */ \"./src/components/Card/Card.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/utils/fetch.ts":
/*!***************************************!*\
  !*** ./src/components/utils/fetch.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pokeApi\": () => (/* binding */ pokeApi)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction pokeApi() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://pokeapi.co/api/v2/pokemon/');\n            const response = yield data.json();\n            console.log(response);\n            return response;\n        }\n        catch (error) {\n            console.log('error');\n        }\n    });\n}\n/* fetch ('https://pokeapi.co/api/v2/pokemon/')\n.then(res => res.json())\n.then(data => console.log(data))\n.catch(error => console.log('error'))\n */ \n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/utils/fetch.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContainer\": () => (/* binding */ AppContainer)\n/* harmony export */ });\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Card/Card */ \"./src/components/Card/Card.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/utils/fetch */ \"./src/components/utils/fetch.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const action = yield (0,_components_utils_fetch__WEBPACK_IMPORTED_MODULE_2__.pokeApi)();\n            this.render(action);\n        });\n    }\n    render(action) {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(action);\n            if (this.shadowRoot) {\n                action.results.forEach((info) => {\n                    var _a;\n                    const pokeCard = this.ownerDocument.createElement(\"app-card\");\n                    console.log(info);\n                    pokeCard.setAttribute(_components_Card_Card__WEBPACK_IMPORTED_MODULE_0__.Attribute.name, info.name);\n                    //pokeCard.setAttribute(Attribute.number, data.number);\n                    pokeCard.setAttribute(_components_Card_Card__WEBPACK_IMPORTED_MODULE_0__.Attribute.imagen, info.url);\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(pokeCard);\n                });\n            }\n        });\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;