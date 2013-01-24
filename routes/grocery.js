var models = require('../models/index.js')
  , Grocery = models.Grocery;

exports.retrieve = function(req, res) {
  var groceries = Grocery.find().exec(function(err, groceries) {
      res.send(200, groceries);
  });
};

exports.create = function(req, res) {
  var request;
  request = req.body;
  Grocery.create(req.body, function(err, grocery) {
      if (err) return res.send(500, err);
      res.send(200, grocery);
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  Grocery.findById(id).exec(function(err, grocery) {
      if (!grocery) return res.send(404);
      if (err) return res.send(500, err);
      grocery.remove(function(err, grocery) {
          if (err) return res.send(500, err);
          res.send(200);
      });
  });
};
