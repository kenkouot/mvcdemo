app.controller('ListCtrl', function ListCtrl($scope, api) {

    var list = $scope.list = window.appData;
    $scope.messages = {};

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
      var i = list.indexOf(item);
      api.delete(item).success(function() {
          list.pop(i);
      });
    };

    $scope.$on('itemUpdated', function(e, data) {
        api.patch(data[0], data[1]);
    });
});
