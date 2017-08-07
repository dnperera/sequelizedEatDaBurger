var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burgers.findAll({}).then(function(dbBurger) {
    // We have access to the dbBurger as an argument inside of the callback function
    var hbsObject = {
      burgers: dbBurger
    };
     console.log(hbsObject);
    res.render("index", hbsObject);
  });

});

router.put("/:id", function(req, res) {
  console.log("devoured", req.body.devoured);
  console.log("devoured", req.body.user);
  console.log("id", req.body.id);
  db.Burgers.update(
    {
      devoured:req.body.devoured
    },
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
  });
});

router.post("/", function(req, res) {
	console.log('Post Req',req.body);
  db.Burgers.create({
    burger_name:req.body.new_burger_name
  }).then(function(dbBurger) {
    console.log('Insert New',dbBurger);
    res.redirect("/");
  });

});

// Export routes for server.js to use.
module.exports = router;