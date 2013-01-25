var app = window.app || {};
_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
_.templateSettings.evaluate =  /\{\%(.+?)\%\}/g;
_.templateSettings.escape = /\{\{-(.*?)\}\}/g;

app.init = function(data) {
  app = _.extend(app, {
      model: {}
    , collection: {}
    , view: {}
    , route: {}
  });

  app.route.main = new app.Router();
  app.view.main = new app.MainView({
      collection: app.collection.groceries = new app.Groceries(data)
  });
};

app.init(window.appData);
