angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GamesCtrl', function($scope, Api) {

  const vm = this;
  Api.getPendingGames(function(games){
      vm.pendingGames = games
  });

  Api.getActiveGames(function(games){
      vm.activeGames = games
  })

})

.controller('WagersCtrl', function($scope) {
  $scope.localWagers = [
    {title: 'Nuggets To Win', amount: "15 $hitcoins", user:"XphishXrulesX", id: 1},
    {title: 'Falcons To Lose', amount: "25 $hitcoins", user:"WinzerBro69", id: 2},
    {title: 'Milwaukee To Lose by 7', amount: "10 $hitcoins", user:"clownboy3", id: 3}
  ]
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
