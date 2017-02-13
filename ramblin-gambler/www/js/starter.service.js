angular.module('starter.services', [])

//NOTE: We are including the constant `ApiEndpoint` to be used here.
// .factory('Api', function($http, ApiEndpoint) {
//   console.log('ApiEndpoint:', ApiEndpoint.url)
//   var getAllGames = function() {
//     var localGames;
//     return $http.get(ApiEndpoint.url + '/games')
//       .then(function(data) {
//         console.log('Got some data: ', data);
//         localGames = data
//       });
//     return localGames
//   };
//
//   return {
//     getAllGames: getAllGames
//   };
// })

.factory('Api', function($http, ApiEndpoint) {
  console.log('ApiEndpoint:', ApiEndpoint.url)
  var getAllGames = function(callbackFn) {
    $http.get(ApiEndpoint.url + '/games').success(function(data){
      callbackFn(data);
    })
  };

  return {
    getAllGames: getAllGames
  };
})
