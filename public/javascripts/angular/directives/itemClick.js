app.directive('itemClick', function() {
    return function(scope, elem, attrs) {
      elem.bind('click', function(e) {
          elem.attr('previous', elem.text());
      });
    };
});
