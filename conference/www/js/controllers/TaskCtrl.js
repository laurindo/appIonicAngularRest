angular
    .module('starter.taskCtrl', ['starter.clockDigitalFactory'])
    .controller('TasksCtrl', function ($scope, ClockDigital) {

        $scope.clockTemp = '00:00:00';

        $scope.startTask = function () {
            ClockDigital.start();
            $scope.clockTemp = ClockDigital;
        };

        $scope.stopTask = function () {

        };

    });