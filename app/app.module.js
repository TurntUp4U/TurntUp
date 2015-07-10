angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'underscore',
  'uiGmapgoogle-maps'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: 'home/views/home.html',
      controller: 'LoginCtrl'
    })
    .when('/login', {
      templateUrl: 'auth/views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });
    
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
    });
});
