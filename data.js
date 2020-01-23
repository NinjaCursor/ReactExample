const mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 100,
        host     : 'x',
        port     :  3306,
        user     : 'x',
        password : 'x50',
        database : 'xr_82175',
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};