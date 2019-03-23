const routes = require('next-routes')();
    
routes
	.add('/auctions/new', '/auctions/new')
    .add('/auctions/:address', '/auctions/show')
    .add('/auctions/:address/administration','/auctions/administration/index')
    .add('/auctions/:address/administration/new', '/auctions/administration/new');

module.exports = routes;