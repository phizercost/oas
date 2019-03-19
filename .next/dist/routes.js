'use strict';

var routes = require('next-routes')();

routes.add('/auctions/new', '/auctions/new').add('/auctions/:address', '/auctions/show').add('/auctions/:address/administration', '/auctions/administration/index').add('/auctions/:address/administration/new', '/auctions/administration/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGlCQUN3QixBQUR4QixpQkFFRyxBQUZILElBRU8sQUFGUCxzQkFFNkIsQUFGN0Isa0JBR0csQUFISCxJQUdPLEFBSFAscUNBRzJDLEFBSDNDLGtDQUlHLEFBSkgsSUFJTyxBQUpQLHlDQUlnRCxBQUpoRDs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb3N0L0dvb2dsZSBEcml2ZS9Db3N0IFByby9QZXJzby9SZXNlYXJjaC9vYXMifQ==