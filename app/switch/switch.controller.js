angular.module('MyApp')
  .controller('SwitchCtrl', function($scope, $auth, $location) {
    $scope.switchActivated = function(isChecked) {
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
