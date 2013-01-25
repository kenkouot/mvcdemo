var app = window.app || {};
(function() {
    var Groceries = Backbone.Collection.extend({
        model: app.GroceryModel
      , initialize: function() {
        }
      , url: function() {
          return '/groceries/';
        }
      , parse: function() {
        }
    });
    _ns('Groceries', app, Groceries);
}(undefined));
