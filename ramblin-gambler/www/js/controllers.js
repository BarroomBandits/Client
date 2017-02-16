angular.module('starter.controllers', ['ionic', 'ngMap'])
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

.controller('MapCtrl', function(NgMap) {
console.log(NgMap)
  const vm = this;

  vm.$onInit = function ($scope) {



  //   vm.map = new google.maps.Map(document.getElementById('map'), {
  //        center: {lat: -34.397, lng: 150.644},
  //        zoom: 6
  //      });
  //      var infoWindow = new google.maps.InfoWindow({map: map});
   //
  //      // Try HTML5 geolocation.
  //      if (navigator.geolocation) {
  //        console.log(navigator.geolocation);
  //        navigator.geolocation.getCurrentPosition(function(position) {
  //          var pos = {
  //            lat: position.coords.latitude,
  //            lng: position.coords.longitude
  //          };
  //          console.log(position.coords);
  //          infoWindow.setPosition(pos);
  //          infoWindow.setContent('Location found.');
  //          vm.map.setCenter(pos);
  //        }, function() {
  //          handleLocationError(true, infoWindow, vm.map.getCenter());
  //        });
  //      } else {
  //        // Browser doesn't support Geolocation
  //        handleLocationError(false, infoWindow, vm.map.getCenter());
  //      }
   //
   //
  //    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //      infoWindow.setPosition(pos);
  //      infoWindow.setContent(browserHasGeolocation ?
  //                            'Error: The Geolocation service failed.' :
  //                            'Error: Your browser doesn\'t support geolocation.');
  //    }
   }
  //  console.log("I'm the navigator", position.coords);
   NgMap.getMap().then(function(map) {
            vm.showCustomMarker= function(evt) {
              map.customMarkers.foo.setVisible(true);
              map.customMarkers.foo.setPosition(this.getPosition());
            };
            vm.closeCustomMarker= function(evt) {
              this.style.display = 'none';
            };
          });

})




    // .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
    //   function initialize() {
    //     var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    //
    //     var mapOptions = {
    //       center: myLatlng,
    //       zoom: 16,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     var map = new google.maps.Map(document.getElementById("map"),
    //         mapOptions);
    //
    //     //Marker + infowindow + angularjs compiled ng-click
    //     var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    //     var compiled = $compile(contentString)($scope);
    //
    //     var infowindow = new google.maps.InfoWindow({
    //       content: compiled[0]
    //     });
    //
    //     var marker = new google.maps.Marker({
    //       position: myLatlng,
    //       map: map,
    //       title: 'Uluru (Ayers Rock)'
    //     });
    //
    //     google.maps.event.addListener(marker, 'click', function() {
    //       infowindow.open(map,marker);
    //     });
    //
    //     $scope.map = map;
    //   }
    //   google.maps.event.addDomListener(window, 'load', initialize);
    //
    //   $scope.centerOnMe = function() {
    //     if(!$scope.map) {
    //       return;
    //     }
    //
    //     $scope.loading = $ionicLoading.show({
    //       content: 'Getting current location...',
    //       showBackdrop: false
    //     });
    //
    //     navigator.geolocation.getCurrentPosition(function(pos) {
    //       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //       $scope.loading.hide();
    //     }, function(error) {
    //       alert('Unable to get location: ' + error.message);
    //     });
    //   };
    //
    //   $scope.clickTest = function() {
    //     alert('Example of infowindow with ng-click')
    //   };
    //
    // })

.controller('WagersCtrl', function($scope) {
  $scope.localWagers = [
    {title: 'Nuggets To Win', amount: "15 $hitcoins", user:"XphishXrulesX", id: 1},
    {title: 'Falcons To Lose', amount: "25 $hitcoins", user:"WinzerBro69", id: 2},
    {title: 'Milwaukee To Lose by 7', amount: "10 $hitcoins", user:"clownboy3", id: 3}
  ]
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
