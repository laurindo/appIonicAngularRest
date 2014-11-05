angular
    .module('starter.sessionsCtrl', [])
    .controller('SessionsCtrl', function($scope, Session) {
        $scope.sessions = Session.query();
    });