angular.module('MyApp')
  .controller('SwitchCtrl', function($scope, $auth, $location, MapSwitchService, Account) {
    var isTurnt;

    $scope.buttonFunction = function() {
      MapSwitchService.button += 1;
      console.log(MapSwitchService.button);
    }

    $scope.switchActivated = function(isChecked) {
      console.log('Switch activated!');
      Account.updateTurnt().success(function() {
        Account.getProfile().success(function(data) {
          console.log(data);
          $scope.account = data;
          isTurnt = data.isTurnt;
          var now = new moment().format();
          console.log(now);
          console.log(isTurnt);
        });
      });
      if (isChecked) {
        MapSwitchService.switchFlipped = true;
        console.log('Switch on!');
        $('.switchAudio').trigger('play');
        $('#confettiBlock').css('background-image', 'url(img/confetti.gif)');
        $('body').addClass('redPulse');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            MapSwitchService.switchCoords.latitude =  position.coords.latitude;
            MapSwitchService.switchCoords.longitude = position.coords.longitude;
            //this portion will add the status for the turntUp in the server
            var whereYouAre= MapSwitchService.switchCoords;
            var name = {
              displayName: $scope.account.displayName
            }
            var mergedObject = angular.extend(whereYouAre, name);
            MapSwitchService.addToMap(mergedObject);
          });
        }
        $('body').addClass('redPulse');
      } else {
        MapSwitchService.switchFlipped = false;
        console.log('Switch off!');
        $('.switchAudio').trigger('pause');
        $('.switchAudio').prop('currentTime', 0);
        $('#confettiBlock').css('background', 'white');
        $('body').removeClass('redPulse');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
            MapSwitchService.switchCoords.latitude =  0;
            MapSwitchService.switchCoords.longitude = 0;
            MapSwitchService.switchCoords;
            MapSwitchService.turnDown($scope.account.displayName);
          });
        }
      }
    }
});
