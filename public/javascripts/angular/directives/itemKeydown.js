app.directive('itemKeydown', function() {
    return function(scope, elem, attrs) {
      elem.on('keydown', function(e) {
          if (e.keyCode === 27) {
            elem.text( elem.attr('previous') ).blur();
          } else if (e.keyCode === 13) {
            var item, req;
            item = JSON.parse(attrs.itemKeydown);
            req = {};
            req[elem.data('prop')] = elem.text();
            elem.blur();
            scope.$emit('itemUpdated', [req, item._id]);
          }
      });
    };
});
