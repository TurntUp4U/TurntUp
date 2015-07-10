(function() {
  'use strict';

  angular
  .module('map', [
    'ngRoute',
     'uiGmapgoogle-maps'
  ])
  .config(function($routeProvider){
          $routeProvider
          .when('/map', {
            templateUrl: 'map/views/maps.html',
            controller: 'MapsController'
          })

    })

}());
