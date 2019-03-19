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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _auction = require("../ethereum/auction");

var _auction2 = _interopRequireDefault(_auction);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cost/Google Drive/Cost Pro/Perso/Research/oas/components/BidForm.js";


var BidForm = function (_Component) {
  (0, _inherits3.default)(BidForm, _Component);

  function BidForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BidForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BidForm.__proto__ || (0, _getPrototypeOf2.default)(BidForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var auction, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                auction = (0, _auction2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return auction.methods.bid().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, "ether")
                });

              case 9:
                _routes.Router.replaceRoute("/auctions/" + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false, value: "" });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BidForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Amount to Bid"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "ether",
        labelPosition: "right",
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Ooops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { secondary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Bid!"));
    }
  }]);

  return BidForm;
}(_react.Component);

exports.default = BidForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmlkRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJBdWN0aW9uIiwid2ViMyIsIlJvdXRlciIsIkJpZEZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1Y3Rpb24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYmlkIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OE0sQUFDSjthQUFRLEFBQ0MsQUFDUDtvQkFGTSxBQUVRLEFBQ2Q7ZSxBQUhNLEFBR0c7QUFISCxBQUNOLGEsQUFLRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47cUJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNBO0FBRkcsMEJBRU8sdUJBQVEsTUFBQSxBQUFLLE1BRnBCLEFBRU8sQUFBbUIsQUFDbkM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSHRCLEFBR1QsQUFBYyxBQUErQjtnQ0FIcEM7Z0NBQUE7dUJBS2dCLGNBQUEsQUFBSyxJQUxyQixBQUtnQixBQUFTOzttQkFBMUI7QUFMQyxvQ0FBQTtnQ0FBQTsrQkFNRCxBQUFRLFFBQVIsQUFBZ0IsTUFBaEIsQUFBc0I7d0JBQ3BCLFNBRHlCLEFBQ3pCLEFBQVMsQUFDZjt5QkFBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BUjlCLEFBTUQsQUFBMkIsQUFFeEIsQUFBbUM7QUFGWCxBQUMvQixpQkFESTs7bUJBSU47K0JBQUEsQUFBTyw0QkFBMEIsTUFBQSxBQUFLLE1BVi9CLEFBVVAsQUFBNEM7Z0NBVnJDO0FBQUE7O21CQUFBO2dDQUFBO2dEQVlQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWnZCLEFBWVAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BZHZCLEFBY1QsQUFBYyxBQUF5Qjs7bUJBZDlCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBZ0JGO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBSnpEOztvQkFBQTtzQkFGRixBQUVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBVEosQUFDRSxBQVFFLEFBRUY7QUFGRTsyQkFFRixBQUFDLHlDQUFPLFdBQVIsTUFBa0IsU0FBUyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUFBO0FBQUE7U0FaSixBQUNFLEFBV0UsQUFLTDs7Ozs7QSxBQXpDbUIsQUE0Q3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkJpZEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Nvc3QvR29vZ2xlIERyaXZlL0Nvc3QgUHJvL1BlcnNvL1Jlc2VhcmNoL29hcyJ9