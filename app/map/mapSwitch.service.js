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
      // console.log("this person is turnt up", whereYouAre.displayName);
      getFromMap().then(function(spots){
        _.forEach(spots.data, function(oneSpot){
          if(oneSpot.displayName === whereYouAre.displayName){
            if(oneSpot._id !== '559ffdb7e9e0393733000001'){ //wont let me delete this id. we can use a different server.
              removeFromMap(oneSpot._id);
            }
          }
        });
      });

      $http.post(urlMap, whereYouAre).success(function (response) {
        console.log(response);
      }).error(function (err) {
        console.log(err);
      });
    };

    var getFromMap = function () {
       return $http.get(urlMap);
    };

    var removeFromMap = function(id){
          return $http.delete(urlMap + '/' + id).success(function (response) {
            console.log(response);
          }).error(function (err) {
            console.log(err);
          });
        };


    return {
      switchCoords: switchCoords,
      addToMap: addToMap,
      getFromMap: getFromMap,
      removeFromMap: removeFromMap
    }
  });
}());
