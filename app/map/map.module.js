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

  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyBuurnC0j7csdtlgA4I0IDJu2AA4kLPwnc',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })

}());
