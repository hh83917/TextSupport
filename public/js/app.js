angular.module('textSupport', ['firebase', 'ui.router'])

.constant('fb', {url: 'https://hh-textsupport.firebaseio.com/'})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('home', {
     url: '/',
     templateUrl: '/templates/home.html',
     controller: 'mainCtrl'
   })
   .state('support', {
     url: '/support',
     templateUrl: '/templates/support.html',
     controller: 'supportCtrl',
     resolve: {
       ticketsRef: function(mainService) {
         return mainService.getTickets();
       }
     }
   });

  $urlRouterProvider
   .otherwise('/support');
});
