var path = require('path');
var sql = require('../index.js')();
var db = sql.config(path.join(__dirname, "app.json")).table(path.join(__dirname, "tables.js")).connect();
db.query('select * from hospital limit ?', [3]).then(function(rows) {
  rows.forEach(function(row){
    console.log(row.name);   
  });
   process.exit();
});
