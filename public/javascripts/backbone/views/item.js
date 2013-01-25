var app = window.app || {};
(function() {
    var ItemView = Backbone.View.extend({
        events: {
          'click .button': 'removeItem'
        , 'keydown span': 'confirmChange'
        , 'blur span': 'confirmChange'
        }
      , tagName: 'tr'
      , className: 'item'
      , template: _.template( $('#tpl-list-item').html() )
      , render: function() {
          var html;
          html = this.template( this.model.toJSON() );
          this.$el.html(html);
          return this;
        }
      , removeItem: function(e) {
          e.preventDefault();
          this.remove();
          this.model.destroy();
        }
      , confirmChange: function(e) {
          var property
            , obj
            , val
            , $tar;

          $tar = $(e.target);
          property = $tar.data('prop');
          val = this.model.get(property);

          if (e.keyCode === 27) {
            $tar
            .blur()
            .text(val);
          } else if (e.keyCode === 13) {
            obj = {};
            obj[property] = $tar.text();
            this.model.save(obj, {patch: true});
            $tar.blur().addClass('changed');
          }
        }
    });

    _ns('ItemView', app, ItemView);
}());

