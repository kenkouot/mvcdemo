var app = window.app || {};
(function() {
    var Router = Backbone.Router.extend({
        initialize: function() {
        }
      , routes: {
          '/': 'index'
        }
      , index: function() {
        }
    });
    
    // save constructor to app obj
    _ns('Router', app, Router);

    Backbone.history.start();
}(undefined));
