var mysql = require('mysql')

var connMySql = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias',
    });
}

module.exports= function () {
    return connMySql
}
