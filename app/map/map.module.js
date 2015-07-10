(function() {
  'use strict';
  angular
  .module('map', [
     'uiGmapgoogle-maps'
  ])

  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyBuurnC0j7csdtlgA4I0IDJu2AA4kLPwnc',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })

}());
