webpackHotUpdate(6,{

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1198);

var _Layout2 = _interopRequireDefault(_Layout);

var _auction = __webpack_require__(1212);

var _auction2 = _interopRequireDefault(_auction);

var _semanticUiReact = __webpack_require__(504);

var _web = __webpack_require__(754);

var _web2 = _interopRequireDefault(_web);

var _BidForm = __webpack_require__(1216);

var _BidForm2 = _interopRequireDefault(_BidForm);

var _routes = __webpack_require__(748);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1Y3Rpb25zL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJBdWN0aW9uIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiQmlkRm9ybSIsIkxpbmsiLCJkYXRlRnJvbVNlY29uZHMiLCJzZWNvbmRzIiwidCIsIkRhdGUiLCJzZXRTZWNvbmRzIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJkIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJsZW5ndGgiLCJqb2luIiwiQXVjdGlvblNob3ciLCJwcm9wcyIsIm1hbmFnZXIiLCJhdWN0aW9uVGl0bGUiLCJhdWN0aW9uRGVzY3JpcHRpb24iLCJzdGFydERhdGUiLCJlbmREYXRlIiwidG90YWxCaWRkZXJzIiwidG90YWxBbW91bnRCaWQiLCJteVRvdGFsQmlkIiwiaGlnaGVzdEJpZCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJhdWN0aW9uIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEJpZCIsInRvdGFsQmlkIiwiZ2V0QXVjdGlvblRpdGxlIiwidGl0bGUiLCJnZXRBdWN0aW9uRGVzY3JpcHRpb24iLCJjb21wbGV0aW9uU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFZ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dkIsQUFBNkI7b0JBQTdCO3NCQVBWLEFBQ0UsQUFFRSxBQUNFLEFBRUUsQUFDRSxBQU1YO0FBTlc7Ozs7OzsyRyxBQTdGaUI7Ozs7O21CQUNyQjtBLDBCQUFVLHVCQUFRLE1BQUEsQUFBTSxNLEFBQWQsQUFBb0IsVUFBVTs7O3VCQUN4QixRQUFBLEFBQVEsUUFBUixBQUFnQixhLEFBQWhCLEFBQTZCOzttQkFBN0M7QTs7dUJBQ2lCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0E7OEJBQ1csYyxBQUFLOzt1QkFBb0IsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsT0FBTyxTQUF2QixBQUF1QixBQUFTLEksQUFBaEMsQUFBb0M7Ozt1Q0FBeEU7QSx1QyxBQUFzQjs7dUJBQ1IsUUFBQSxBQUFRLFFBQVIsQUFBZ0Isa0IsQUFBaEIsQUFBa0M7O21CQUFoRDtBOzt1QkFDb0IsUUFBQSxBQUFRLFFBQVIsQUFBZ0Isd0IsQUFBaEIsQUFBd0M7O21CQUE1RDtBOzsyQkFFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjtnQ0FGSyxBQUVTLEFBQ2Q7c0NBSEssQUFHZSxBQUNwQjs2QkFBVyxXQUFXLGdCQUFnQixRQUpqQyxBQUlNLEFBQVcsQUFBZ0IsQUFBUSxBQUM5QzsyQkFBUyxXQUFXLGdCQUFnQixRQUwvQixBQUtJLEFBQVcsQUFBZ0IsQUFBUSxBQUM1Qzs4QkFBWSxRQU5QLEFBTU8sQUFBUSxBQUNwQjtnQ0FBYyxRQVBULEFBT1MsQUFBUSxBQUN0QjtrQ0FBZ0IsUUFSWCxBQVFXLEFBQVEsQUFDeEI7b0NBQWtCLFFBVGIsQUFTYSxBQUFRLEFBQzFCOzJCQUFTLFFBVkosQUFVSSxBQUFRLEFBQ2pCOzhCLEFBWEssQUFXTztBQVhQLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVRvQixBQXVHMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29zdC9Hb29nbGUgRHJpdmUvQ29zdCBQcm8vUGVyc28vUmVzZWFyY2gvb2FzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/cost/Google Drive/Cost Pro/Perso/Research/oas/pages/auctions/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cost/Google Drive/Cost Pro/Perso/Research/oas/pages/auctions/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auctions/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mMDVjN2M5OGQxNGYyNzg2ODhlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXVjdGlvbnMvc2hvdy5qcz84NWVhZWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQXVjdGlvbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vYXVjdGlvblwiO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IEJpZEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmlkRm9ybVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcblxuXG5cblxuZnVuY3Rpb24gZGF0ZUZyb21TZWNvbmRzKHNlY29uZHMpe1xuICBsZXQgdCA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xuICB0LnNldFNlY29uZHMoc2Vjb25kcyk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICAgIG1vbnRoID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICBkYXkgPSAnJyArIGQuZ2V0RGF0ZSgpLFxuICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAobW9udGgubGVuZ3RoIDwgMikgbW9udGggPSAnMCcgKyBtb250aDtcbiAgaWYgKGRheS5sZW5ndGggPCAyKSBkYXkgPSAnMCcgKyBkYXk7XG5cbiAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbmNsYXNzIEF1Y3Rpb25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBBdWN0aW9uKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOyAvL0FkZHJlc3Mgb2YgdGhlIGF1Y3Rpb24gd2Ugd2FudCB0byBzaG93XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGF1Y3Rpb24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCB0b3RhbEJpZCA9IHdlYjMudXRpbHMuZnJvbVdlaShhd2FpdCBhdWN0aW9uLm1ldGhvZHMuZ2V0QmlkKGFjY291bnRzWzBdKS5jYWxsKCkpO1xuICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgYXVjdGlvbi5tZXRob2RzLmdldEF1Y3Rpb25UaXRsZSgpLmNhbGwoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF3YWl0IGF1Y3Rpb24ubWV0aG9kcy5nZXRBdWN0aW9uRGVzY3JpcHRpb24oKS5jYWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICBhdWN0aW9uVGl0bGU6IHRpdGxlLFxuICAgICAgYXVjdGlvbkRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0RGF0ZShkYXRlRnJvbVNlY29uZHMoc3VtbWFyeVswXSkpLFxuICAgICAgZW5kRGF0ZTogZm9ybWF0RGF0ZShkYXRlRnJvbVNlY29uZHMoc3VtbWFyeVsxXSkpLFxuICAgICAgaGlnaGVzdEJpZDogc3VtbWFyeVsyXSxcbiAgICAgIHRvdGFsQmlkZGVyczogc3VtbWFyeVszXSxcbiAgICAgIHRvdGFsQW1vdW50QmlkOiBzdW1tYXJ5WzRdLFxuICAgICAgY29tcGxldGlvblN0YXR1czogc3VtbWFyeVs1XSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNl0sXG4gICAgICBteVRvdGFsQmlkOiB0b3RhbEJpZFxuICAgIH07XG4gIH1cblxuICByZW5kZXJDYXJkcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYW5hZ2VyLFxuICAgICAgYXVjdGlvblRpdGxlLFxuICAgICAgYXVjdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIHRvdGFsQmlkZGVycyxcbiAgICAgIHRvdGFsQW1vdW50QmlkLFxuICAgICAgbXlUb3RhbEJpZCxcbiAgICAgIGhpZ2hlc3RCaWRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IGF1Y3Rpb25UaXRsZSxcbiAgICAgICAgbWV0YTogXCJUaXRsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgYXVjdGlvbkRlc2NyaXB0aW9uXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIG1hbmFnZXIgaGFuZGxlcyBhZG1pbmlzdHJhdGl2ZSByaWdodHMgb2YgdGhpcyBhdWN0aW9uXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiB0b3RhbEJpZGRlcnMsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIEJpZGRlcnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgbWFkZSBhdCBsZWFzdCBvbmUgYmlkIHRvIHRoaXMgYXVjdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHN0YXJ0RGF0ZSxcbiAgICAgICAgbWV0YTogXCJTdGFydGluZyBkYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGRhdGUgdGhlIGF1Y3Rpb24gaXMgc3VwcG9zZWQgdG8gc3RhcnQgb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBlbmREYXRlLFxuICAgICAgICBtZXRhOiBcIkVuZGluZyBkYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGRhdGUgdGhlIGF1Y3Rpb24gaXMgc3VwcG9zZWQgdG8gZW5kIG9uXCJcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkodG90YWxBbW91bnRCaWQsIFwiZXRoZXJcIiksXG4gICAgICAgIG1ldGE6IFwiVG90YWwgYW1vdW50IGJpZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBhbW91bnQgb2YgbW9uZXkgYmlkKGV0aGVyKVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShoaWdoZXN0QmlkLCBcImV0aGVyXCIpLFxuICAgICAgICBtZXRhOiBcIkhpZ2hlc3QgYmlkKGV0aGVyKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBoaWdoZXN0IGFtb3VudCBiaWQgc28gZmFyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbXlUb3RhbEJpZCxcbiAgICAgICAgbWV0YTogXCJNeSBUb3RhbCBiaWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VtdWxhdGl2ZSBhbW91bnQgb2YgbXkgYmlkXCJcbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+QXVjdGlvbiBTaG93PC9oMz5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgPEJpZEZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1Y3Rpb25TaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYXVjdGlvbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBV0E7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFFQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFHQTtBQUxBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7OztBQTVGQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7O0FBQUE7QUFDQTs7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=