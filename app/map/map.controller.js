(function () {
  'use strict';
  angular
    .module('map')
    .controller('MapsController', function($scope, MapsService, $routeParams, $location, uiGmapGoogleMapApi) {
          $scope.map = {
              center: {
                latitude: 37.029869,
                longitutde: -76.345222
              },
              zoom: 13
            };
          $scope.markers = [];
            // creating an individual marker
          $scope.createMarker = function(location) {
              var marker = {
                idKey: location.number,
                coords: {
                  latitude: location.latitude,
                  longitude: location.longitude
                }
              };
              return marker;
            };
            //filling array with markers;
          $scope.createMarkers = function() {
            console.log($scope.location);
              for (var i = 0; i < $scope.location.spots.length; i++) {
                var marker = $scope.createMarker($scope.location.spots[i]);
                $scope.markers.push(marker);
              }
            };
            // calling controller initialization
            $scope.createMarkers();
            uiGmapGoogleMapApi.then(function(maps) {
                
            });

    });
})();
