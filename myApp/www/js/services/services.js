angular.module('rapunzel.services', [])

    .factory('tickets', function($http) {
        var markers = [];

        return {
            getMarkers: function(){

                return $http.get("https://private-3b6cf-ferghacks16.apiary-mock.com/tickets")
                    .then(function(response){
                        markers = response;
                        return markers;
                });

            }
        }
    })
