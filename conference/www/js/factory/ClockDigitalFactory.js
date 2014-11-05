angular
    .module('starter.clockDigitalFactory', [])
    .factory('ClockDigital', function () {

        var interval = null;
        var clockTime = null;
        var obj  = {
            interval: setInterval(updateClocks, 1000),
            clockTime: clockTime,
            start: startTimer
        };

        function startTimer() {
            obj.interval = setInterval(updateClocks, 1000);
        }

        function updateClocks() {
            var now = new Date();
            var h = now.getHours() % 12;
            var m = now.getMinutes();
            var s = now.getSeconds();

            clockTime = "99:99"; // Second
        }

        return obj;

    });