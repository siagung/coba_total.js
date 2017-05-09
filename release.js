// ===================================================
// IMPORTANT: only for production
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'total.js' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 2000;
options.debug = true;
/**
 * Release notes:
 */

require('total.js').http('release', options);


//require('total.js').http('release', { debug: true });
//var Agent = require('sqlagent/mysql').connect('mysql://root:please@127.0.0.1/project_ebookapp');
//var sql = new Agent();
//require('sqlagent/mysql').connect('mysql://root:please@127.0.0.1/project_ebookapp');
//require('total.js').https('release', options);