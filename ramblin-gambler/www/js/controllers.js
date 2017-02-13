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
  vm.localGames = Api.getAllUsers();
  // vm.localGames = [
  //   { title: 'Ping Pong', user:"Darren", time:"2:25 PM", id: 1 },
  //   { title: 'Hoops', user:"Ike", time:"8:00 PM", id: 2 },
  //   { title: 'Darts', user:"Mark", time:"7:22 PM", id: 3 },
  //   { title: 'Pool', user:"Tyler", time:"3:00 AM", id: 4 }
  // ];
  // $scope.localGames = [
  //   { title: 'Ping Pong', user:"Darren", time:"2:25 PM", id: 1 },
  //   { title: 'Hoops', user:"Ike", time:"8:00 PM", id: 2 },
  //   { title: 'Darts', user:"Mark", time:"7:22 PM", id: 3 },
  //   { title: 'Pool', user:"Tyler", time:"3:00 AM", id: 4 }
  // ];
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
