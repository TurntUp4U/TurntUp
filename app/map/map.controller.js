(function () {
  'use strict';
  angular
    .module('map')
    .controller('MapsController', function($scope, MapsService, $routeParams, uiGmapGoogleMapApi) {
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
            // filling array with markers
          $scope.createMarkers = function() {
              for (var i = 0; i < $scope.locations.spots.length; i++) {
                var marker = $scope.createMarker($scope.locations.spots[i]);
                $scope.markers.push(marker);
              }
            };
            // calling controller initialization
            $scope.createMarkers();
            uiGmapGoogleMapApi.then(function(maps) {
              console.log('map running, but what goes here?')
          });
    });
})();
