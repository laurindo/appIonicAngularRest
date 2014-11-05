angular
    .module('starter.sessionService', ['ngResource'])
    .factory('Session', function ($resource) {
        return $resource('http://localhost:5000/sessions/:sessionId');
    });