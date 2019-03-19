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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _auction = require("../../ethereum/auction");

var _auction2 = _interopRequireDefault(_auction);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _BidForm = require("../../components/BidForm");

var _BidForm2 = _interopRequireDefault(_BidForm);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cost/Google Drive/Cost Pro/Perso/Research/oas/pages/auctions/show.js?entry";


function dateFromSeconds(seconds) {
  var t = new Date(1970, 0, 1);
  t.setSeconds(seconds);
  return t;
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

var AuctionShow = function (_Component) {
  (0, _inherits3.default)(AuctionShow, _Component);

  function AuctionShow() {
    (0, _classCallCheck3.default)(this, AuctionShow);

    return (0, _possibleConstructorReturn3.default)(this, (AuctionShow.__proto__ || (0, _getPrototypeOf2.default)(AuctionShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(AuctionShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          manager = _props.manager,
          auctionTitle = _props.auctionTitle,
          auctionDescription = _props.auctionDescription,
          startDate = _props.startDate,
          endDate = _props.endDate,
          totalBidders = _props.totalBidders,
          totalAmountBid = _props.totalAmountBid,
          myTotalBid = _props.myTotalBid,
          highestBid = _props.highestBid;

      var items = [{
        header: auctionTitle,
        meta: "Title",
        description: auctionDescription
      }, {
        header: manager,
        meta: "Address of Manager",
        description: "The manager handles administrative rights of this auction",
        style: { overflowWrap: "break-word" }
      }, {
        header: totalBidders,
        meta: "Number of Bidders",
        description: "Number of people who have already made at least one bid to this auction"
      }, {
        header: startDate,
        meta: "Starting date",
        description: "This is the date the auction is supposed to start on"
      }, {
        header: endDate,
        meta: "Ending date",
        description: "This is the date the auction is supposed to end on"
      }, {
        header: _web2.default.utils.fromWei(totalAmountBid, "ether"),
        meta: "Total amount bid",
        description: "Total amount of money bid(ether)"
      }, {
        header: _web2.default.utils.fromWei(highestBid, "ether"),
        meta: "Highest bid(ether)",
        description: "This is the highest amount bid so far"
      }, {
        header: myTotalBid,
        meta: "My Total bid",
        description: "Cumulative amount of my bid"
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Auction Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_BidForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var auction, summary, accounts, totalBid, title, description;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                auction = (0, _auction2.default)(props.query.address); //Address of the auction we want to show

                _context.next = 3;
                return auction.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.t0 = _web2.default.utils;
                _context.next = 10;
                return auction.methods.getBid(accounts[0]).call();

              case 10:
                _context.t1 = _context.sent;
                totalBid = _context.t0.fromWei.call(_context.t0, _context.t1);
                _context.next = 14;
                return auction.methods.getAuctionTitle().call();

              case 14:
                title = _context.sent;
                _context.next = 17;
                return auction.methods.getAuctionDescription().call();

              case 17:
                description = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  auctionTitle: title,
                  auctionDescription: description,
                  startDate: formatDate(dateFromSeconds(summary[0])),
                  endDate: formatDate(dateFromSeconds(summary[1])),
                  highestBid: summary[2],
                  totalBidders: summary[3],
                  totalAmountBid: summary[4],
                  completionStatus: summary[5],
                  manager: summary[6],
                  myTotalBid: totalBid
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuctionShow;
}(_react.Component);

exports.default = AuctionShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1Y3Rpb25zL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJBdWN0aW9uIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiQmlkRm9ybSIsIkxpbmsiLCJkYXRlRnJvbVNlY29uZHMiLCJzZWNvbmRzIiwidCIsIkRhdGUiLCJzZXRTZWNvbmRzIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJkIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJsZW5ndGgiLCJqb2luIiwiQXVjdGlvblNob3ciLCJwcm9wcyIsIm1hbmFnZXIiLCJhdWN0aW9uVGl0bGUiLCJhdWN0aW9uRGVzY3JpcHRpb24iLCJzdGFydERhdGUiLCJlbmREYXRlIiwidG90YWxCaWRkZXJzIiwidG90YWxBbW91bnRCaWQiLCJteVRvdGFsQmlkIiwiaGlnaGVzdEJpZCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJhdWN0aW9uIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEJpZCIsInRvdGFsQmlkIiwiZ2V0QXVjdGlvblRpdGxlIiwidGl0bGUiLCJnZXRBdWN0aW9uRGVzY3JpcHRpb24iLCJjb21wbGV0aW9uU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFZOzs7Ozs7O0FBS3JCLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixTQUFRLEFBQy9CO01BQUksSUFBSSxJQUFBLEFBQUksS0FBSixBQUFTLE1BQVQsQUFBZSxHQUF2QixBQUFRLEFBQWtCLEFBQzFCO0lBQUEsQUFBRSxXQUFGLEFBQWEsQUFDYjtTQUFBLEFBQU8sQUFDUjs7O0FBRUQsU0FBQSxBQUFTLFdBQVQsQUFBb0IsTUFBTSxBQUN4QjtNQUFJLElBQUksSUFBQSxBQUFJLEtBQVosQUFBUSxBQUFTO01BQ2IsUUFBUSxNQUFNLEVBQUEsQUFBRSxhQURwQixBQUNZLEFBQXFCO01BQzdCLE1BQU0sS0FBSyxFQUZmLEFBRWUsQUFBRTtNQUNiLE9BQU8sRUFIWCxBQUdXLEFBQUUsQUFFYjs7TUFBSSxNQUFBLEFBQU0sU0FBVixBQUFtQixHQUFHLFFBQVEsTUFBUixBQUFjLEFBQ3BDO01BQUksSUFBQSxBQUFJLFNBQVIsQUFBaUIsR0FBRyxNQUFNLE1BQU4sQUFBWSxBQUVoQzs7U0FBTyxDQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVAsQUFBYyxLQUFkLEFBQW1CLEtBQTFCLEFBQU8sQUFBd0IsQUFDaEM7OztJLEFBRUs7Ozs7Ozs7Ozs7O2tDQXVCVTttQkFXUixLQVhRLEFBV0g7VUFYRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLHNCQUhVLEFBR1Y7VUFIVSxBQUlWLDRCQUpVLEFBSVY7VUFKVSxBQUtWLG1CQUxVLEFBS1Y7VUFMVSxBQU1WLGlCQU5VLEFBTVY7VUFOVSxBQU9WLHNCQVBVLEFBT1Y7VUFQVSxBQVFWLHdCQVJVLEFBUVY7VUFSVSxBQVNWLG9CQVRVLEFBU1Y7VUFUVSxBQVVWLG9CQVZVLEFBVVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSlUsQUFDWixBQUlFO0FBSkYsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBWkMsQUFPWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0U7Z0JBTUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWpCVSxBQWNaLEFBSUk7QUFKSixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkF2QlUsQUFvQlosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQTVCVSxBQXlCWixBQUdlO0FBSGYsQUFDRTtnQkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsZ0JBRDdCLEFBQ1UsQUFBbUMsQUFDM0M7Y0FGRixBQUVRLEFBQ047cUJBbENVLEFBK0JaLEFBR2U7QUFIZixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixZQUQ3QixBQUNVLEFBQStCLEFBQ3ZDO2NBRkYsQUFFUSxBQUNOO3FCQXZDVSxBQW9DWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBNUNKLEFBQWMsQUF5Q1osQUFHZSxBQUdqQjtBQU5FLEFBQ0U7MkNBS0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsbUNBQVEsU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkI7b0JBQTdCO3NCQVBWLEFBQ0UsQUFFRSxBQUNFLEFBRUUsQUFDRSxBQU1YO0FBTlc7Ozs7OzsyRyxBQTdGaUI7Ozs7O21CQUNyQjtBLDBCQUFVLHVCQUFRLE1BQUEsQUFBTSxNLEFBQWQsQUFBb0IsVUFBVTs7O3VCQUN4QixRQUFBLEFBQVEsUUFBUixBQUFnQixhLEFBQWhCLEFBQTZCOzttQkFBN0M7QTs7dUJBQ2lCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0E7OEJBQ1csYyxBQUFLOzt1QkFBb0IsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsT0FBTyxTQUF2QixBQUF1QixBQUFTLEksQUFBaEMsQUFBb0M7Ozt1Q0FBeEU7QSx1QyxBQUFzQjs7dUJBQ1IsUUFBQSxBQUFRLFFBQVIsQUFBZ0Isa0IsQUFBaEIsQUFBa0M7O21CQUFoRDtBOzt1QkFDb0IsUUFBQSxBQUFRLFFBQVIsQUFBZ0Isd0IsQUFBaEIsQUFBd0M7O21CQUE1RDtBOzsyQkFFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjtnQ0FGSyxBQUVTLEFBQ2Q7c0NBSEssQUFHZSxBQUNwQjs2QkFBVyxXQUFXLGdCQUFnQixRQUpqQyxBQUlNLEFBQVcsQUFBZ0IsQUFBUSxBQUM5QzsyQkFBUyxXQUFXLGdCQUFnQixRQUwvQixBQUtJLEFBQVcsQUFBZ0IsQUFBUSxBQUM1Qzs4QkFBWSxRQU5QLEFBTU8sQUFBUSxBQUNwQjtnQ0FBYyxRQVBULEFBT1MsQUFBUSxBQUN0QjtrQ0FBZ0IsUUFSWCxBQVFXLEFBQVEsQUFDeEI7b0NBQWtCLFFBVGIsQUFTYSxBQUFRLEFBQzFCOzJCQUFTLFFBVkosQUFVSSxBQUFRLEFBQ2pCOzhCLEFBWEssQUFXTztBQVhQLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVRvQixBQXVHMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29zdC9Hb29nbGUgRHJpdmUvQ29zdCBQcm8vUGVyc28vUmVzZWFyY2gvb2FzIn0=