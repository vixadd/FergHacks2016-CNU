angular.module('rapunzel.services', [])

    .factory('tickets',  ['$http', function($http) {
        return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })


}])

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
