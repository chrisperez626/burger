var express = require("express");
var router = express.Router();

var Burger = require("../models/burger");

router.get("/", function(req, res){
  Burger.all(function(data){
  	res.render("index", {burgers: data})
  })
})

router.post("/api/burgers", function(req, res){
	Burger.create("burger_name", req.body.name, function(result){
		res.json({id: result.insertId})
	})
})

router.put("/api/burgers/:id", function(req, res){
	Burger.eat("id = " + req.params.id, function(result){
		console.log(result);
		
		if (result.affectedRows == 0) {
      		return res.status(404).end();
    	} else {
      		res.status(200).end();
   		}
	})
})

module.exports = router;