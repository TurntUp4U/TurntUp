(function () {
  'use strict';
  angular
    .module('map')
    .controller('MapsController', function($scope, MapsService) {
            $scope.map = {
                "center": {
                  "latitude": 32.7833,
                  "longitude": -79.9333
                },
                "zoom": 13
              };


            $scope.marker = {
              id: 0,
              coords: {
                latitude: 32.7833,
                longitude: -79.9333
              },
              options: {
                draggable: true
              },
              events: {
                dragend: function(marker, eventName, args){
                  $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                  }
                }
              }


            }
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

    });
})();
