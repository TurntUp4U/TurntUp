(function() {
angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'map'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/switch'
    })
    .when('/switch', {
      templateUrl: 'switch/views/switch.html',
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
  });
}());
