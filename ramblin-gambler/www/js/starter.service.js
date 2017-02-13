angular.module('starter.services', [])

//NOTE: We are including the constant `ApiEndpoint` to be used here.
.factory('Api', function($http, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint.url)

  var getAllUsers = function() {
    return $http.get(ApiEndpoint.url + '/users')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getAllUsers: getAllUsers
  };
})
