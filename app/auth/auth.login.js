angular.module('auth')
  .controller('LoginCtrl', function($scope, $alert, $auth, $location) {
    $scope.login = function() {
      $auth.login({
          email: $scope.email,
          password: $scope.password
        })
        .then(function(res) {
          $location.path('/home');
          $alert({
            content: 'Successfully Signed In.',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          $alert({
            content: 'Successfully Signed In.ss',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $alert({
            content: response.data ? response.data.message : response,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
  });
