//var mysql = require('mysql');
//
//
//
//
//var pool  = mysql.createPool({ host: 'localhost', database: "project_ebookapp", user: 'root', password: 'please' });
//
//pool.on('acquire', function (connection) {
//  console.log('Connection %d acquired', connection.threadId);
//});
//
//// override the framework prototype
//// use CONFIG files for connection string
//F.database = function(callback) {
//    
//	return pool.getConnection(callback);
//};
//require('sqlagent/mysql').connect('mysql://root:please@127.0.0.1/project_ebookapp');
//
//var DB = null;
////var Agent = require('sqlagent/mysql').connect('mysql://root:please@127.0.0.1/project_ebookapp');
////var sql = new Agent();
////require('sqlagent/pg').init('postgre://user:password@127.0.0.1/database');
//require('sqlagent/mysql').connect('mysql://root:please@127.0.0.1/project_ebookapp', function(err, db) {
//    if (err)
//        throw err;
//    DB = db;
//});

//// Rewrite built-in functionality
//framework.database = function(collection) {
//    if (collection)
//        return DB.collection(collection);
//    return DB;
//};


