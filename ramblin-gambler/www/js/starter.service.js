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
  // console.log('ApiEndpoint:', ApiEndpoint.url)
  var getPendingGames = function(callbackFn) {
    $http.get(ApiEndpoint.url + '/games_users').success(function(data){
      callbackFn(data);
    })
  };
  var getActiveGames = function(callbackFn){
    $http.get(ApiEndpoint.url + '/games_users_wagers').success(function(data){
      callbackFn(data);
    })
  }
  var getPendingWagers = function(callbackFn){
    $http.get(ApiEndpoint.url + '/games_users_wagers').success(function(data){
      callbackFn(data);
      console.log(data);
    })
  }

  var createUser = function(callbackFn){
    // var newUser = {
    //   users_name: $scope.signupData.username,
    //   email: $scope.signupData.email,
    //   password: $scope.signupData.password
    // };
    // console.log("creating new user" + newUser);
    $http.post(ApiEndpoint.url + '/newuser', newUser).success(function(data){
      callbackFn(data);
    })
  }

  return {
    getPendingGames: getPendingGames,
    getActiveGames: getActiveGames,
    getPendingWagers: getPendingWagers,
    createUser: createUser
  };
})
