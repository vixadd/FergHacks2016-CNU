angular.module('starter.services', ['ngResources'])
    .factory('Tickets', ['$http', function($http) {
        return $http.get('https://private-3b6cf-ferghacks16.apiary-mock.com/tickets')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            })
}]);
