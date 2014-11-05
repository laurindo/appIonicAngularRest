angular
    .module('starter.fruitsCtrl', [])
    .controller('FruitsCtrl', function($scope, $http) {
        $scope.fruits = [];
        $http
            .get('listFruits.html').success(function (data) {
                $scope.fruits = data.fruits;
            })
            .error(function (data) {
                console.log("erro: " + data);
            });
    });