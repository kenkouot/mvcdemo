// instantiate new controller and pass in services
app.controller('ListCtrl', function ListCtrl($scope, api) {

    var list = $scope.list = window.appData;

    $scope.addItem = function(name, amount) {
      var req = {};
      req.type = $('.current').text();
      req.item_name = name;
      req.amount = amount;

      api.post(req).success(function(data) {
          list.push(data);
      });
    };

    $scope.removeItem = function(item) {
      // indexOf ES5 method, use a wrapper or library in production code
      var i = list.indexOf(item);

      // persist deletion
      api.delete(item).success(function() {
          // remove item from controller array
          list.pop(i);
      });
    };

    // listen for event from directive
    $scope.$on('itemUpdated', function(e, data) {
        // HTTP patch currently not supported by Angular $http
        // replace with put api method
        api.patch(data[0], data[1]);
    });
});
