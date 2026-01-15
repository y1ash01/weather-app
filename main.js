/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-fetch.js"
/*!**************************!*\
  !*** ./src/api-fetch.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nasync function fetchWeather(location){\n    try{\n        const url = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\"+location+\"?key=AUUK6H4TFUHCECMQJZX8EXUJR\";\n        const response = await fetch(url);\n        const data = await response.json();\n        console.log(data);\n        return data;\n    }\n    catch(e){\n        alert(e);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLWZldGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpLWZldGNoLmpzPzhhNDIiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGxvY2F0aW9uKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvXCIrbG9jYXRpb24rXCI/a2V5PUFVVUs2SDRURlVIQ0VDTVFKWlg4RVhVSlJcIjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBhbGVydChlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7ZmV0Y2hXZWF0aGVyfTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api-fetch.js\n\n}");

/***/ },

/***/ "./src/clear-dom.js"
/*!**************************!*\
  !*** ./src/clear-dom.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearDom: () => (/* binding */ clearDom)\n/* harmony export */ });\nconst body = document.querySelector('body');\n\nfunction clearDom(){\n\nconst children = body.children;\n    if(children.length > 2){\n        const card = document.querySelector('.card');\n        card.remove();\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xlYXItZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xlYXItZG9tLmpzPzRkZGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gY2xlYXJEb20oKXtcblxuY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuO1xuICAgIGlmKGNoaWxkcmVuLmxlbmd0aCA+IDIpe1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Y2xlYXJEb219OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/clear-dom.js\n\n}");

/***/ },

/***/ "./src/get-location.js"
/*!*****************************!*\
  !*** ./src/get-location.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocation: () => (/* binding */ getLocation)\n/* harmony export */ });\nconst queryField = document.querySelector('#location');\n\nfunction getLocation(){\n    const query = queryField.value;\n    queryField.value = '';\n    return query;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0LWxvY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2dldC1sb2NhdGlvbi5qcz80NTgwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXJ5RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKXtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5RmllbGQudmFsdWU7XG4gICAgcXVlcnlGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IHtnZXRMb2NhdGlvbn07Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/get-location.js\n\n}");

/***/ },

/***/ "./src/load-dom.js"
/*!*************************!*\
  !*** ./src/load-dom.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDom: () => (/* binding */ createDom)\n/* harmony export */ });\nconst body = document.querySelector('body');\n\nfunction createDom(data,gif){\n    try{\n        const card = document.createElement('div');\n        const title = document.createElement('h2');\n        const temp = document.createElement('div');\n        const humidity = document.createElement('div');\n        const conditions = document.createElement('div');\n        const sticker = document.createElement('img');\n        const semantic = document.createElement('div');\n        \n        sticker.src = gif;\n        sticker.height = 30;\n        conditions.textContent = \"condition: \"+data.days[0].conditions;\n        humidity.textContent = \"humidity: \"+data.days[0].humidity;\n        temp.textContent = \"temperature: \"+data.days[0].temp+' °F';\n        card.classList.add('card');\n        title.textContent  = data.address;\n        semantic.classList.add('semantics');\n        \n        card.appendChild(title);\n        semantic.appendChild(conditions);\n        semantic.appendChild(sticker);\n        card.appendChild(semantic);\n        card.appendChild(temp);\n        card.appendChild(humidity);\n        body.appendChild(card);\n    }\n    catch(e){\n        alert(e);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZC1kb20uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQtZG9tLmpzPzQ1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gY3JlYXRlRG9tKGRhdGEsZ2lmKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3RpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBzZW1hbnRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgc3RpY2tlci5zcmMgPSBnaWY7XG4gICAgICAgIHN0aWNrZXIuaGVpZ2h0ID0gMzA7XG4gICAgICAgIGNvbmRpdGlvbnMudGV4dENvbnRlbnQgPSBcImNvbmRpdGlvbjogXCIrZGF0YS5kYXlzWzBdLmNvbmRpdGlvbnM7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gXCJodW1pZGl0eTogXCIrZGF0YS5kYXlzWzBdLmh1bWlkaXR5O1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gXCJ0ZW1wZXJhdHVyZTogXCIrZGF0YS5kYXlzWzBdLnRlbXArJyDCsEYnO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgID0gZGF0YS5hZGRyZXNzO1xuICAgICAgICBzZW1hbnRpYy5jbGFzc0xpc3QuYWRkKCdzZW1hbnRpY3MnKTtcbiAgICAgICAgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBzZW1hbnRpYy5hcHBlbmRDaGlsZChjb25kaXRpb25zKTtcbiAgICAgICAgc2VtYW50aWMuYXBwZW5kQ2hpbGQoc3RpY2tlcik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc2VtYW50aWMpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGFsZXJ0KGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVEb219OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/load-dom.js\n\n}");

/***/ },

/***/ "./src/load-giphy.js"
/*!***************************!*\
  !*** ./src/load-giphy.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGif: () => (/* binding */ loadGif)\n/* harmony export */ });\nasync function loadGif(searchParameter){\n    const url = \"https://api.giphy.com/v1/stickers/search?api_key=cR0Ge0ox6wpAu65z4Bw6v85NJZeaF9Qn&q=\"+searchParameter+\"&limit=1\";\n    const response = await fetch(url);\n    const responseJson = await response.json();\n    const sticker = responseJson.data[0].images.original.url;\n    return sticker;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZC1naXBoeS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9hZC1naXBoeS5qcz84YmE1Il0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGxvYWRHaWYoc2VhcmNoUGFyYW1ldGVyKXtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9zdGlja2Vycy9zZWFyY2g/YXBpX2tleT1jUjBHZTBveDZ3cEF1NjV6NEJ3NnY4NU5KWmVhRjlRbiZxPVwiK3NlYXJjaFBhcmFtZXRlcitcIiZsaW1pdD0xXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBzdGlja2VyID0gcmVzcG9uc2VKc29uLmRhdGFbMF0uaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICByZXR1cm4gc3RpY2tlcjtcbn1cblxuZXhwb3J0e2xvYWRHaWZ9OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/load-giphy.js\n\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-fetch */ \"./src/api-fetch.js\");\n/* harmony import */ var _clear_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-dom */ \"./src/clear-dom.js\");\n/* harmony import */ var _get_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-location */ \"./src/get-location.js\");\n/* harmony import */ var _load_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-dom */ \"./src/load-dom.js\");\n/* harmony import */ var _load_giphy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-giphy */ \"./src/load-giphy.js\");\n\n\n\n\n\n\nconst searchBtn = document.querySelector('#search');\n\nsearchBtn.addEventListener('click',async ()=>{\n    const query = (0,_get_location__WEBPACK_IMPORTED_MODULE_2__.getLocation)();\n    if(query == '') return;\n    (0,_clear_dom__WEBPACK_IMPORTED_MODULE_1__.clearDom)();\n    const data = await (0,_api_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(query);\n    const sticker = await (0,_load_giphy__WEBPACK_IMPORTED_MODULE_4__.loadGif)(data.days[0].icon);\n    (0,_load_dom__WEBPACK_IMPORTED_MODULE_3__.createDom)(data,sticker);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDSjtBQUNNO0FBQ047QUFDQTs7QUFFdkM7O0FBRUE7QUFDQSxrQkFBa0IsMERBQVc7QUFDN0I7QUFDQSxJQUFJLG9EQUFRO0FBQ1osdUJBQXVCLHdEQUFZO0FBQ25DLDBCQUEwQixvREFBTztBQUNqQyxJQUFJLG9EQUFTO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSBcIi4vYXBpLWZldGNoXCI7XG5pbXBvcnQgeyBjbGVhckRvbSB9IGZyb20gXCIuL2NsZWFyLWRvbVwiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9nZXQtbG9jYXRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZURvbSB9IGZyb20gXCIuL2xvYWQtZG9tXCI7XG5pbXBvcnQgeyBsb2FkR2lmIH0gZnJvbSBcIi4vbG9hZC1naXBoeVwiO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXN5bmMgKCk9PntcbiAgICBjb25zdCBxdWVyeSA9IGdldExvY2F0aW9uKCk7XG4gICAgaWYocXVlcnkgPT0gJycpIHJldHVybjtcbiAgICBjbGVhckRvbSgpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXIocXVlcnkpO1xuICAgIGNvbnN0IHN0aWNrZXIgPSBhd2FpdCBsb2FkR2lmKGRhdGEuZGF5c1swXS5pY29uKTtcbiAgICBjcmVhdGVEb20oZGF0YSxzdGlja2VyKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;