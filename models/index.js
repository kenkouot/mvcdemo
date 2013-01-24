var mongoose = require('../db.js')
  , Schema = mongoose.Schema;

var GrocerySchema = new Schema({
    item_name: { type: String, required: true}
  , date: { type: Date, default: Date.now }
  , amount: String
});

exports.Grocery = mongoose.model('Grocery', GrocerySchema);
