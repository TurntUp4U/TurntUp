(function() {
  'use strict';
  angular
  .module('map')
  .factory('MapSwitchService', function(){
    var switchFlipped = null;

    var switchCoords = {
      latitude: 0,
      longitude: 0,
      zoom: 15
    };

    return {
      switchCoords: switchCoords
    }
  });
}());
