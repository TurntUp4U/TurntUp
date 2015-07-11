angular.module('MyApp')
  .controller('SwitchCtrl', function($scope, $auth, $location, Account) {
    var isTurnt;

    $scope.switchActivated = function(isChecked) {
      console.log('Switch activated!');
      Account.updateTurnt().success(function(){
        Account.getProfile().success(function(data){
          console.log(data);
        });
      });

      if (isChecked) {
        console.log('Switch on!');
        $('.switchAudio').trigger('play');
        $('#confettiBlock').css('background-image', 'url(img/confetti.gif)');
      } else {
        console.log('Switch off!');
        $('.switchAudio').trigger('pause');
        $('.switchAudio').prop('currentTime', 0);
        $('#confettiBlock').css('background', 'white');
      }
    }
});
