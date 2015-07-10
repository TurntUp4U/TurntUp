angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'posts'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
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
