var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableName, cb){
		connection.query("SELECT ?? FROM ??",[colName, tableName], 
			function(err, data){
				if(err) throw err;
				cb(data)
		})
	},
	insertOne: function(tableName, colName, values, cb){
		connection.query("INSERT INTO" + tableName + "(" + colName + ") VALUES(" + values+ ")",  
			function(err, data){
				if(err) throw err;
				cb(data)
			})
	},
	updateOne: function()
}


module.exports = orm;