app.factory('api', ['$http', function ($http) {
      var factory = {
        get: function() {
          return $http({
              method: 'get'
            , url: '/groceries'
          });
        }
      , post: function(data) {
          return $http({
              method: 'post'
            , url: '/groceries/'
            , data: data
          });
        }
      , delete: function(data) {
          return $http({
              method: 'delete'
            , url: '/groceries/' + data._id
          });
        }
      , patch: function(data, id) {
          return $http({
              method: 'PATCH'
            , url: '/groceries/' + id
            , data: data
          });
        }
      };
      return factory;
}]);
