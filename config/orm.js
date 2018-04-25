var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableName, cb){
		connection.query("SELECT * FROM ??",[tableName], 
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
	updateOne: function(tableName, condtion, cb){
		connection.query("UPDATE" + tableName + "SET devoured = TRUE WHERE" + condition,
			function(err, data){
				if(err) throw err;
				cb(data)
			})
	}
}


module.exports = orm;