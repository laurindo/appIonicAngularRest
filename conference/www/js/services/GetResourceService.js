angular
    .module('starter.phoneService', ['ngResource'])
    .factory('GetPhone', function ($resource ) {
        return $resource('http://localhost:5000/phones/:phoneId');
    });