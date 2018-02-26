//Dependencies
var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

//Routes

//Main Index Route
router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
})
//Create a new burger
router.post("/api/burgers", function(req, res) {
    cat.insertOne(["name"],[req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      res.render("/index");
    });
  });

  //Eat a buger
  router.put("api/burgers/:id", function(res, req) {
      burgers.updateOne(req.params.id, function() {
          res.render("/index");
      })
  })
//API ROUTE
router.get("/api", function(req, res) {
    burgers.selectAll(function(data) {
        res.json(data);
    })
})

//Export Routes
module.exports = router;