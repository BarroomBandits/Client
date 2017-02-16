// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angularMoment'])
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment', 'ngGeolocation'])

// .constant('ApiEndpoint', {
//   url: 'http://localhost:3000'
// })
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
    controller: 'appCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl as $ctrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl as $ctrl'
      }
    }
  })
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl as $ctrl'
      }
    }
  })
  .state('app.new-game', {
    url: '/new-game',
    views: {
      'menuContent': {
        templateUrl: 'templates/new-game.html',
        controller: 'newGameCtrl as $ctrl'
      }
    }
  })
  .state('app.game', {
    url: '/game/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl as $ctrl'
      }
    }
  })
  .state('app.games', {
    url: '/games',
    views: {
      'menuContent': {
        templateUrl: 'templates/games.html',
        controller: 'gamesCtrl as $ctrl'
      }
    }
  })

  .state('app.activeGames', {
    url: '/games-active',
    views: {
      'menuContent': {
        templateUrl: 'templates/games-active.html',
        controller: 'gamesCtrl as $ctrl'
      }
    }
  })
  .state('app.activeGame', {
    url: '/game-active/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/game-active.html',
        controller: 'activeGameCtrl as $ctrl'
      }
    }
  })
  .state('app.new-wager', {
    url: '/new-wager',
    views: {
      'menuContent': {
        templateUrl: 'templates/new-wager.html',
        controller: 'newWagerCtrl as $ctrl'
      }
    }
  })
  .state('app.wagers', {
    url: '/wagers',
    views: {
      'menuContent': {
        templateUrl: 'templates/wagers.html',
        controller: 'wagersCtrl as $ctrl'
      }
    }
  });

  // .state('app.browse', {
  //     url: '/browse',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/browse.html'
  //       }
  //     }
  //   })
  // // .state('app.signup', {
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

  $urlRouterProvider.otherwise('/app/login');

});
