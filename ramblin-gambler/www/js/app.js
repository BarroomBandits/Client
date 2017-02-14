// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angularMoment'])
.constant('ApiEndpoint', {
  url: 'http://localhost:3000'
})
// For the real endpoint, we'd use this
// .constant('ApiEndpoint', {
//  url: 'http://cors.api.com/api'
// })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.games', {
      url: '/games',
      views: {
        'menuContent': {
          templateUrl: 'templates/games.html',
          controller: 'GamesCtrl as $ctrl'
        }
      }
    })
    .state('app.activeGames', {
      url: '/games-active',
      views: {
        'menuContent': {
          templateUrl: 'templates/games-active.html',
          controller: 'GamesCtrl as $ctrl'
        }
      }
    })
    .state('app.wagers', {
      url: '/wagers',
      views: {
        'menuContent': {
          templateUrl: 'templates/wagers.html',
          controller: 'WagersCtrl as $ctrl'
        }
      }
    })
    // .state('app.signup', {
    //   url: '/signup'
    // })
  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl as $ctrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/games');
});
