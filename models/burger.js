var orm = require("../config/orm.js");

var Burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		})
	},
	create: function(colName, values, cb){
		orm.insertOne("burgers", colName, values, function(res){
			cb(res);
		})
	},
	eat: function(condition, cb){
		orm.updateOne("burgers", condition, function(res){
			cb(res);
		})
	}
}

module.exports = Burger;
