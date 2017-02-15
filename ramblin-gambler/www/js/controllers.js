angular.module('starter.controllers', [])

// <<<<<<< HEAD
// .controller('AppCtrl', function($http, $scope, $ionicModal, $timeout, ApiEndpoint) {
// =======
// .controller('appCtrl', function($scope, $ionicModal, $timeout, Api) {
.controller('appCtrl', function($scope, $ionicModal, $timeout, $http) {

// >>>>>>> Auth-darren2
  // const vm = this;
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signupData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    id: '1',
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    id: '2',
    scope: $scope
  }).then(function(modal) {
    $scope.modalSignup = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modalLogin.show();
    $scope.modalSignup.hide();
  };

  $scope.register = function() {
    $scope.closeLogin();
    $scope.modalSignup.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system

    console.log("LOGIN user: " + $scope.loginData.email + " - PW: " + $scope.loginData.password);
    $scope.closeLogin();
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };
  $scope.createNewUser = function () {
    var newUser = {
// <<<<<<< HEAD
      users_name: $scope.signupData.username,
      email: $scope.signupData.email,
      password: $scope.signupData.password,
      password2: $scope.signupData.password2
    };
    console.log(newUser);
    // $http.post(ApiEndpoint.url + '/newuser', newUser).success(function(data){
    //   callbackFn(data);
    $http.post('http://localhost:3000/newuser', newUser).success(function(data){
      console.log(data);
// =======
      // users_name: vm.signupData.username,
      // email: vm.signupData.email,
      // password: vm.signupData.password
    });
    // $http.post('http://localhost:3000/newuser', newUser).success(function(data){
    //   console.log(data);
// >>>>>>> Auth-darren2
  //   })
  }
  // $scope.createNewUser = function() {
  //   var newUser = {
  //     users_name: $scope.signupData.username,
  //     email: $scope.signupData.email,
  //     password: $scope.signupData.password
  //   };
  //   console.log("creating new user" + newUser.users_name);
  //   Api.createUser(function(user){
  //     $scope.newUser = user;
  //   })
  // }
})
.controller('gamesCtrl', function($scope, $http) {
    const vm = this;
    function getPendingGames () {
      $http.get('http://localhost:3000/games_users').success(function(data){
        vm.pendingGames = data
      })
    };
    function getActiveGames () {
      $http.get('http://localhost:3000/games_users_wagers').success(function(data){
        vm.activeGames = data
      })
    }
    getPendingGames();
    getActiveGames();
})
// .controller('gamesCtrl', function($scope, Api) {
//   const vm = this;
//   Api.getPendingGames(function(games){
//       vm.pendingGames = games
//   });
//   Api.getActiveGames(function(games){
//       vm.activeGames = games
//       console.log(vm.activeGames)
//   })
// })
.controller('newWagerCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
})
// .controller('wagersCtrl', function($scope, Api) {
//   const vm = this;
//   Api.getPendingWagers(function(wagers){
//     vm.pendingWagers = wagers
//     console.log(vm.pendingWagers)
//   })
//   // $scope.localWagers = [
//   //   {title: 'Nuggets To Win', amount: "15 $hitcoins", user:"XphishXrulesX", id: 1},
//   //   {title: 'Falcons To Lose', amount: "25 $hitcoins", user:"WinzerBro69", id: 2},
//   //   {title: 'Milwaukee To Lose by 7', amount: "10 $hitcoins", user:"clownboy3", id: 3}
//   // ]
// })
.controller('wagersCtrl', function($scope, $http) {
  const vm = this;
  function getPendingWagers(){
      $http.get('http://localhost:3000/games_users_wagers').success(function(data){
        vm.pendingWagers = data
      })
    }
  getPendingWagers();
})
.controller('mapCtrl', function($scope) {
  const vm = this;
})
.controller('profileCtrl', function($scope) {
  const vm = this;
})
.controller('newGameCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
})
.controller('gameCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
})
.controller('activeGameCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
});
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
