// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.tickets', {
    url:'/tickets',
    views: {
      'menuContent': {
        templateUrl:'templates/tickets.html',
        controller: 'TicketsCtrl'
      }
    }
  })

  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })

  .state('app.singleTicket', {
    url:'/tickets/:ticketId',
    views: {
      'menuContent': {
        templateUrl:'templates/ticket.html',
        controller:'TicketCtrl'
      }
    }
  })

  .state('app.password', {
      url: '/password',
      views: {
        'menuContent': {
          templateUrl: 'templates/password.html'
        }
      }
  })

    .state('app.login', {
      url:'/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'loginSpoofCtrl'
        }
      }
    })

  .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
        }
      }
    })

  .state('app.messenging', {
      url: '/messenging',
      views: {
        'menuContent': {
          templateUrl: 'templates/messenging.html',
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
