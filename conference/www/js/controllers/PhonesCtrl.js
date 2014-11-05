angular
    .module('starter.phonesCtrl', [])
    .controller('PhonesCtrl', function ($scope, $stateParams, GetPhone) {

        $scope.showPhones       = false;
        $scope.showPhoneById    = false;

        $scope.getPhoneById = function () {
            GetPhone.get( { phoneId : $scope.idPhone } , function (data) {
                $scope.showPhoneById = true; //habilita o ng-show do elemento html
                $scope.showPhones = false;
                $scope.phone = data;
            });
        };

        $scope.getPhones = function () {
            var phones  = GetPhone.query();
            $scope.showPhones = true; //habilita o ng-show do elemento html
            $scope.showPhoneById = false;
            return $scope.phones = phones;
        };

    });