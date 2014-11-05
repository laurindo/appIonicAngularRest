angular
    .module('starter.sessionCtrl', ['starter.sessionService'])
    .controller('SessionCtrl', function($scope, $stateParams, Session) {
        $scope.session = Session.get({sessionId: $stateParams.sessionId});
    });