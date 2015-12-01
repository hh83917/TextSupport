angular.module('textSupport').service('mainService', function(fb, $http) {

  this.getTickets = function() {
    return new Firebase(fb.url + "numbers/");
  };

  this.sendReply = function(number, reply) {
    console.log(number, reply);
    return $http({
      method: 'POST',
      url: '/support/messages',
      data: {
        to: number,
        body: reply
      }
    });
  };

});
