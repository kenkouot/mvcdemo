var models = require('../models/index.js')
  , Grocery = models.Grocery;

exports.index = function(req, res){
  var groceries = Grocery.find({}, null, {lean: true}).exec(function(err, groceries) {
      res.render('index', {
          title: 'Yum Yum'
        , data: groceries
      });
  });
};

