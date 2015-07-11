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

    var urlMap = 'http://tiy-fee-rest.herokuapp.com/collections/turnUpMap';

    var addToMap = function (whereYouAre) {
      // console.log("this person is turnt up", whereYouAre.displayName);
      getFromMap().then(function(spots){
        _.forEach(spots.data, function(oneSpot){
          if(oneSpot.displayName === whereYouAre.displayName){
            removeFromMap(oneSpot._id);
          }
        });
      }).then(function(){
        $http.post(urlMap, whereYouAre).success(function (response) {
          console.log(response);
        }).error(function (err) {
          console.log(err);
        });
      })
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

    var turnDown = function(name){
      getFromMap().then(function(spots){
            _.forEach(spots.data, function(oneSpot){
              if(oneSpot.displayName === name){
                removeFromMap(oneSpot._id);
              }
        });
      })
    };


    return {
      switchCoords: switchCoords,
      addToMap: addToMap,
      getFromMap: getFromMap,
      removeFromMap: removeFromMap,
      turnDown: turnDown
    }
  });
}());
