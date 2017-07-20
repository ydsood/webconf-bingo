(function () {
  'use strict';
  angular.module('bingo', [])
  .factory('BingoCardService', [function () {
    var ITEMS = [
      'Can you email that to everyone',
      '______, are you there?',
      'Uh, ______, you\'re still sharing',
      'Hey guys, I have to jump on another call',
      'Bad wifi strikes again!',
      'Sound of someone typing (probably with a hammer)',
      'Loud painful echo, feedback',
      'Child/Animal noises in background',
      'Hi, can you hear me?',
      'No, its still loading (bad internet strikes)',
      'Car/Train noises in background',
      'So (garbled sounds) I can (fadeds out) tonight?',
      'Sorry I\'m late',
      '"Awesome!" used twice in less than 60 seconds',
      'Watching someone entering app',
      'Watching someone issuing a case',
      'I have a hard stop at ___',
      'Conference room double booked',
      'Kicked out of conference room for a more important meeting',
      'Sorry we couldn\'t hear you there',
      'Sorry you cut out there',
      'Lets take this offline',
      'Can you guys see my screen',
      'Conference room phone won\'t work',
      'Sorry I\'m having connection issues',
      'Feeling like the dumbest person in the room',
      'Feeling like the smartest person in the room',
      'This will be fixed when we get REACT/Angular/Kaboom js framework',
      'Sorry I wasn\'t listening (insert excuse here), can you please repeat',
      'I really want to sleep right now',
      'I\'m so hungry!!',
      'Who setup a lunch time meeting, AGAIN!!',
      'Lunch ordered for meeting!!! (Yay!!)',
      'Darned grilled vegetable sandwiches!@@',
      'Someone rants about base system',
      'Internet explorer does not support this',
      'session.title != session.topic',
      'Waiting for site to reload',
      'Who restarted the site @!@',
      'Trailed off into tangential discussion',
      
    ];

    return {
      newCard: function () {
        var rv = [];
        var items = ITEMS.slice(0);
        var index;

        for(var i=0; i<5 ; i++){
          rv[i]=[];
          for(var j=0; j<5; j++) {
            if (i==2 && j==2) {
              rv[i][j] = "Sorry I was on mute!!";
            } else {
              index = Math.floor(Math.random()*items.length);
              rv[i][j] = items.splice(index,1)[0];
            }
          }
        }

        return rv;
      }
    };
  }])
  .controller(
    'bingoController',
    ['$scope', 'BingoCardService', function ($scope, BingoCardService) {

      $scope.newCard = function () {
        $scope.card = {};
        $scope.card.rows = BingoCardService.newCard();
        $scope.card.header = ['B', 'I', 'N', 'G', 'O'];
      };

      $scope.newCard();
    }]
  );
}());
