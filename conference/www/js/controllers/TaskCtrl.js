angular
    .module('starter.taskCtrl', [])
    .controller('TasksCtrl', function ($scope, $timeout) {

        var mytimeout;

        $scope.statusButton = 1; //start = 1 / stop = 0

        $scope.counter = $scope.counter;
        $scope.date    = new Date();
        $scope.days    = 0;
        $scope.hours   = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;

        $scope.clockTemp = "00:00:00";
        $scope.counter = 0;

        $scope.onTimeout = function(){

            $scope.counter++;

            if ( $scope.counter > 59 ) {
                $scope.seconds++;
                if ( $scope.seconds > 59 ) {
                    $scope.minutes++;
                    //aplicando zero
                    if ( $scope.minutes < 10 ) {
                        $scope.minutes = "0" + $scope.minutes;
                    }
                    if( $scope.minutes > 59 ) {
                        $scope.hours++;
                        if ( $scope.hours > 24 ) {
                            $scope.days++;
                        }
                        $scope.minutes = 0;
                    }
                    $scope.seconds = 0;
                }
                $scope.counter = 0;
            } else {
                $scope.seconds = $scope.counter;
            }

            $scope.clockTemp = $scope.hours + ":" + $scope.minutes + ":" + $scope.seconds;

            mytimeout = $timeout($scope.onTimeout,1000);
        };

        $scope.startTask = function () {
            mytimeout = $timeout($scope.onTimeout,1000);
            $scope.statusButton = 0;
        };

        $scope.stopTask = function () {
            $timeout.cancel(mytimeout);
            $scope.statusButton = 1;
        };

    });