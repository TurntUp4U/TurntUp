(function () {
  'use strict';
  angular
    .module('TurntUp'), [
    ])
    .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBuurnC0j7csdtlgA4I0IDJu2AA4kLPwnc',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
    })
    .controller('MapsController', function($scope, uiGmapGoogleMapApi) {
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
      // fill array with markers
    $scope.createMarkers = function() {
        for (var i = 0; i < $scope.locations.spots.length; i++) {
          var marker = $scope.createMarker($scope.locations.spots[i]);
          $scope.markers.push(marker);
        }
      };
      // call upon controller initialization
      $scope.createMarkers();
      uiGmapGoogleMapApi.then(function(maps) {

    });
    });
})();
