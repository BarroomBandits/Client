angular.module('starter.controllers', [])


.controller('appCtrl', function($scope, $window, $ionicModal, $timeout, $http, $state) {
  // $scope.thisUser = {}
  const vm = this;

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

  $scope.logOut = function(){
    console.log("logging out");
    delete localStorage.token;
    $scope.modalLogin.show();

  }

  $scope.register = function() {
    $scope.closeLogin();
    $scope.modalSignup.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    let user = {
      email: $scope.loginData.email,
      password: $scope.loginData.password
    }
    // console.log("LOGIN user: " + $scope.loginData.email + " - PW: " + $scope.loginData.password);
    $scope.closeLogin();
    $http.post('http://localhost:3000/signIn', user)
      .then(function(result){
        localStorage.token = result.data.token
        // localStorage.user_id =
        // console.log(result.data);
        $state.go('app.profile')
        $window.location.reload()
      })
  };

  $scope.createNewUser = function () {
    var newUser = {
      users_name: $scope.signupData.username,
      email: $scope.signupData.email,
      password: $scope.signupData.password,
      password2: $scope.signupData.password2
    };
    console.log(newUser);
    // var newUserData = {
    //   users_name: $scope.signupData.username,
    //   email: $scope.signupData.email,
    //   achievements: "None",
    //   shitcoin: 100
    // }

    $http.post('http://localhost:3000/newuser', newUser)
      .then(function(data){
        console.log("data coming back --", data);
        $scope.modalSignup.hide();
        $state.go('app.profile')
        // $scope.thisUser = data.data[0]
      });
  }
})

.controller('loginCtrl', function($scope, $stateParams) {
  const vm = this;
  // console.log($stateParams.id);
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

.controller('newWagerCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
})

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
  vm.$onInit = function ($scope) {
    var myLatLng = {lat: -25.363, lng: 131.044};
    var mapOptions = {
        zoom: 4,
        center: myLatLng
    }
    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
})


.controller('profileCtrl', function($scope, $stateParams, $http) {

  const vm = this;
  getProfile();

  function getProfile(){
    $http.get('http://localhost:3000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.token
      }
    }).then(function(result){
      console.log(result)
      localStorage.user_id = result.data[0].id;
      localStorage.username = result.data[0].users_name;
      $scope.userInfo = result.data[0]

    }).catch(function(error){
      console.log(error);
    })
  }
})

.controller('newGameCtrl', function($state, $geolocation, $scope, $stateParams, $http) {
  const vm = this;
  vm.gameTypes = ["Ping-Pong", "H-O-R-S-E", "Darts", "Pool", "Pro Sports Wager"]
  $scope.createGame = function (){
    $geolocation.getCurrentPosition({
              timeout: 60000
           }).then(function(position) {
              $scope.myPosition = position;
              let newGame = {
                type: vm.selectedType,
                creator: localStorage.username,
                creator_id: localStorage.user_id,
                time: new Date(),
                p1_score: 0,
                p2_score: 0,
                is_active: "pending",
                lat: $scope.myPosition.coords.latitude,
                long: $scope.myPosition.coords.longitude

              };
              console.log(newGame)
              $http.post('http://localhost:3000/games', {
                type: newGame.type,
                time: newGame.time,
                user_id: newGame.creator_id,
                p1_score: newGame.p1_score,
                p2_score: newGame.p2_score,
                is_active: "pending",
                lat: newGame.lat,
                long: newGame.long
              })
           }).then(result=>{
             console.log(result)
             $state.go('app.games')
           });

  }
})

.controller('gameCtrl', function($http, $scope, $stateParams) {
  const vm = this;
  $http.get('http://localhost:3000/games/'+ $stateParams.id)
    .then(data=>{
      console.log(data)
      vm.game_params = {
        game_id: data.data.id,
        creator_name: "Matt" ,
        start_time: data.data.time,
        game_type: data.data.type,
      }
    })

  console.log("state params: ", $stateParams);
})

.controller('activeGameCtrl', function($scope, $stateParams) {
  const vm = this;
  console.log($stateParams.id);
});
