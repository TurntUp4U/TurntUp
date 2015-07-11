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

      var events = {
        places_changed: function (searchBox) {
            var place = searchBox.getPlaces();
            var lat = place[0].geometry.location.lat();
            var long = place[0].geometry.location.lng();
            if (!place || place == 'undefined' || place.length == 0) {
                console.log('no place data :(');
                return;
            }

            $scope.map = {
                "center": {
                    "latitude": place[0].geometry.location.lat(),
                    "longitude": place[0].geometry.location.lng()
                },
                "zoom": 18
            };
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: place[0].geometry.location.lat(),
                    longitude: place[0].geometry.location.lng()
                }
            };

        }
      };

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
