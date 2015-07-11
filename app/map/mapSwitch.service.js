(function() {
  'use strict';
  angular
  .module('map')
  .factory('MapSwitchService', function($http){
    var switchFlipped = null;

    var switchCoords = {
      latitude: 0,
      longitude: 0,
      zoom: 15
    };

    var urlMap = 'http://tiy-fee-rest.herokuapp.com/collections/turntUpMap';

    var addToMap = function (whereYouAre) {
      $http.post(urlMap, whereYouAre).success(function (response) {
        console.log(response);
      }).error(function (err) {
        console.log(err);
      });
    };

    var getFromMap = function () {
       return $http.get(urlMap);
    };


    return {
      switchCoords: switchCoords,
      addToMap: addToMap,
      getFromMap: getFromMap
    }
  });
}());
