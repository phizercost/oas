'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _AuctionFactory = require('./build/AuctionFactory.json');

var _AuctionFactory2 = _interopRequireDefault(_AuctionFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_AuctionFactory2.default.interface), '0xA98e57a7122DCd29A1CEE0684aC8043d22D84f79');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkF1Y3Rpb25GYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTJCLEFBQTNCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLEtBQUssQUFBTCxNQUFXLHlCQUFlLEFBQTFCLEFBRGdCLFlBQ3NCLEFBRHRCLEFBQWpCLEFBSUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29zdC9Hb29nbGUgRHJpdmUvQ29zdCBQcm8vUGVyc28vUmVzZWFyY2gvb2FzIn0=