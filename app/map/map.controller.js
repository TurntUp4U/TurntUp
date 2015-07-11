(function () {
  'use strict';
  angular
    .module('map')
    .controller('MapsController', function($scope, $geolocation, MapSwitchService) {
      $scope.map = {
      center: {
        latitude: "79",
        longitude: "32.9999999"
      },
        zoom: 15,
      }

      navigator.geolocation.getCurrentPosition(function(position){
        if (MapSwitchService.switchCoords.latitude === 0) {
          console.log('Loaded from position!');
          $scope.$apply(function(){
            $scope.map = {
            center: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
              zoom: 15,
            };
          });
        } else {
          console.log('Loaded from switch!');
          $scope.$apply(function(){
            $scope.map = {
            center: {
              latitude: MapSwitchService.switchCoords.latitude,
              longitude: MapSwitchService.switchCoords.longitude
            },
              zoom: 15,
            };
          });
        }
      });
  });
})();
