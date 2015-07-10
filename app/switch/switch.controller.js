angular.module('MyApp')
  .controller('SwitchCtrl', function($scope, $auth, $location, Account) {
    $scope.switchActivated = function(isChecked) {
      Account.updateTurnt();
      Account.getProfile().success(function(data){
        console.log(data);
      });
      console.log(isChecked);
      if (isChecked) {
        $('.switchAudio').trigger('play');
        $('#confettiBlock').css('background-image', 'url(img/confetti.gif)');
      } else {
        $('.switchAudio').trigger('pause');
        $('.switchAudio').prop('currentTime', 0);
        $('#confettiBlock').css('background', 'white');
      }
    }
});
