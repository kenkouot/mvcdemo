var app = window.app || {};
(function() {
    var Grocery = Backbone.Model.extend({
        defaults: {
        }
      , initialize: function() {
          this.id = this.get('_id');
        }
      , url: function() {
          return '/groceries/' + ( this.id || '' );
        }
      , parse: function(resp) {
          this.id = resp._id;
          return resp;
        }
    });

    _ns('GroceryModel', app, Grocery);
}(undefined));

