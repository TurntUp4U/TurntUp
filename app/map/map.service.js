(function() {
  'use strict';
  angular
  .module('map')
  .factory('MapsService', function($http){
      var getMarkers = function(){
        var url= 'http://tiy-fee-rest.herokuapp.com/collections/turntUpMap';
        $http.get(url).then(function(e){
          return e;
        })
      };

      return {
        getMarkers: getMarkers,

      };
  })

}());
