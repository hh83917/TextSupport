angular.module('textSupport').controller('supportCtrl', function($scope, $firebaseObject, ticketsRef, mainService) {


  $scope.tickets = $firebaseObject(ticketsRef);
  console.log($scope.tickets);

  $scope.send = function(number, reply) {
    mainService.sendReply(number, reply)
    .then(function() {
      $scope.newReply = "";
    });
  };
});
