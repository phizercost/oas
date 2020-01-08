webpackHotUpdate("static/development/pages/auctions/new.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if ( true && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  //We can hijack metamask 
  //web3 = new Web3(window.web3.currentProvider);
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);
  window.ethereum.enable();
} else {
  // We are on the server *OR* the user is not running metamask. We create our own provider
  //No problem of sharing the infura key
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/ec92d8df913548909e7f380c89bd5cf3');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=new.js.cb63bc4428692c970ea0.hot-update.js.map