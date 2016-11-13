angular.module('rapunzel.services', [])

    .factory('tickets',  ['$http', function($http) {
      return $http.get('https://private-3b6cf-ferghacks16.apiary-mock.com/tickets')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })


    }])

  .factory('Ticket', function($resource) {
    return $resource('http://localhost:8100/#/app/tickets/:ticketId');
  })

        // Define an Angular service to wrap the plugin
      .service('$cordovaLaunchNavigator', ['$q', function ($q) {
        "use strict";

        var $cordovaLaunchNavigator = {};
        $cordovaLaunchNavigator.navigate = function (destination, options) {
          var q = $q.defer(),
            isRealDevice = ionic.Platform.isWebView();

          if (!isRealDevice) {
            q.reject(destination + "\nlaunchnavigator will only work on a real mobile device! It is a NATIVE app launcher.");
          } else {
            try {

              var successFn = options.successCallBack || function () {
                  },
                errorFn = options.errorCallback || function () {
                  },
                _successFn = function () {
                  successFn();
                  q.resolve();
                },
                _errorFn = function (err) {
                  errorFn(err);
                  q.reject(err);
                };

              options.successCallBack = _successFn;
              options.errorCallback = _errorFn;

              launchnavigator.navigate(destination, options);
            } catch (e) {
              q.reject("Exception: " + e.message);
            }
          }
          return q.promise;
        };

        return $cordovaLaunchNavigator;
      }]);
