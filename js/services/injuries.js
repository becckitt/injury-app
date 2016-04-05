app.factory('injuryList', ['$http', function($http) {
  return $http.get('injuries.json')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
