"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cost/Google Drive/Cost Pro/Perso/Research/oas/pages/index.js?entry";


var AuctionIndex = function (_Component) {
  (0, _inherits3.default)(AuctionIndex, _Component);

  function AuctionIndex() {
    (0, _classCallCheck3.default)(this, AuctionIndex);

    return (0, _possibleConstructorReturn3.default)(this, (AuctionIndex.__proto__ || (0, _getPrototypeOf2.default)(AuctionIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(AuctionIndex, [{
    key: "renderAuctions",
    value: function renderAuctions() {
      var items = this.props.auctions.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/auctions/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }, "View Auction")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Open Auctions"), this.renderAuctions()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var auctions;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedAuctions().call();

              case 2:
                auctions = _context.sent;
                return _context.abrupt("return", { auctions: auctions });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuctionIndex;
}(_react.Component);

exports.default = AuctionIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQXVjdGlvbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImF1Y3Rpb25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJBdWN0aW9ucyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEF1Y3Rpb25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3FDQUthLEFBQ2Y7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBVyxBQUMvQzs7a0JBQU8sQUFDRyxBQUNSO3VDQUFjLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7d0JBQTFCOzBCQUFBLEFBQXFDO0FBQXJDO1dBQUEsa0JBQXFDLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUY5QyxBQUVTLEFBQXFDLEFBQ25EO2lCQUhGLEFBQU8sQUFHRSxBQUVWO0FBTFEsQUFDTDtBQUZKLEFBQWMsQUFRZCxPQVJjOzsyQ0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNKO0FBREk7QUFBQSx5QkFDSixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESSxBQUNKLEFBQ08sdUJBSlAsQUFDRSxBQUNFLEFBRUcsQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7dUJBdkJ3QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0IsQUFBaEIsQUFBc0M7O21CQUF2RDtBO2lEQUNDLEVBQUUsVSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJYLEEsQUE1QjJCOztrQkE0QjNCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Nvc3QvR29vZ2xlIERyaXZlL0Nvc3QgUHJvL1BlcnNvL1Jlc2VhcmNoL29hcyJ9