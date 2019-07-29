var express = require("express");
var router = express.Router();

var burger = require(`../models/burger.js`);

router.get(`/`, function(req, res) {
  burger.selectAll(function(result) {
    var hbsObject = {
      burgers: result
    };
    res.render(`index`, hbsObject);
  });
});

router.post(`/burgers`, function(req, res) {
  burger.insertOne([`burger_name`], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put(`/burgers/:id`, function(req, res) {
  var condition = `id = ${req.params.id}`;
  burger.updateOne({ devoured: true }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;