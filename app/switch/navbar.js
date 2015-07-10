angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $location) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.isActive = function(route) {
      console.log($location.path());
      return $location.path();
    }
  })
  .controller('TabController', function ($location) {
    if ($location.path() === '/switch') {
      this.tab = 1;
    } else if ($location.path() === '/map') {
      this.tab = 2;
    }
    this.setTab = function (tabId) {
        this.tab = tabId;
    };
    this.isSet = function (tabId) {
        return this.tab === tabId;
    };
  });
