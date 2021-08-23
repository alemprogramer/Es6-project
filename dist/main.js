/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("let name  = 'Hasib'\nlet age  = 10\nlet str = `I ${age>15?'dont':''} go to school ` \n\nfunction fun(){\n    this.test=()=>{\n        console.log(this);\n    }\n\n}\nlet obj = new fun()\n// obj.test()\nlet add = ()=>console.log('fdjfd');\n\n// console.log(add(4));\n\nlet test = ()=>{\n    console.log(this);\n}\ntest()\n\n\n\n//# sourceURL=webpack://es6/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;