var app = window.app || {};

(function() {
    var MainView = Backbone.View.extend({
        initialize: function() {
          this.render();
          this.collection.on('reset add', this.render, this);
        }
      , el: $('#content')
      , events: {
          'click #add-item': 'addItem' 
        }
      , render: function() {
          var $item
            , $list
            , that;

          that = this;
          $list = this.$('.items');
          $list.empty();
          this.collection.each(function(item) {
              $item = new app.ItemView({
                  model: item
            }).render().$el.appendTo($list);
          });
          return this;
        }
      , addItem: function(e) {

          e.preventDefault();
          var $form
            , entry;

          $form = this.$('form');
          entry = {
            item_name: $form.find('input[name="item_name"]').val()
          , amount: $form.find('input[name="amount"]').val()
          , type: this.$('.current').text().toLowerCase()
          , date: Date.now()
          };

          $form.find('input').val('');

          this.collection.create(entry);
        }
    });
    _ns('MainView', app, MainView);
}(undefined));
