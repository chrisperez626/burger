var express = require("express");
var router = express.router();

var cat = require("../models/burgers");

router.get("/", function(req, res){
  Burger.all(function(data))
})
