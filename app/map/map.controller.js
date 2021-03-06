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
                return;
            };

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
          }};
            $scope.markers = [];

 			      $scope.createMarker = function(location) {
			      var marker = {
			        idKey: location._id,
			        coords: {
			          latitude: location.latitude,
			          longitude: location.longitude
			        },
              userName: location.displayName,
              turntTime: location.turntTime
			      };
			      return marker;
			    };

			    $scope.createMarkers = function(turntSpots) {
			      for (var i = 0; i < turntSpots.data.length; i++) {
			        var marker = $scope.createMarker(turntSpots.data[i]);
			        $scope.markers.push(marker);
			      }
            console.log($scope.markers);
			    };

      MapSwitchService.getFromMap().then(function(turntSpots){
        $scope.createMarkers(turntSpots);
      });

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
        };
      });

  });
})();
