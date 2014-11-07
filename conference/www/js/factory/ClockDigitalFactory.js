angular
    .module('starter.clockDigitalFactory', [])
    .factory('ClockDigital', function () {

        var obj = {};
        var timerId; // current timer if started

        function clockStart() {
            if (timerId) return;
            timerId = setInterval(update, 1000);
            update();
        }

        function clockStop() {
            clearInterval(timerId);
            timerId = null;
        }

        function update() {
            var date = new Date();
            var hours = date.getHours();

            if (hours < 10) hours = '0'+hours;

            var minutes = date.getMinutes();
            if (minutes < 10) minutes = '0'+minutes;

            var seconds = date.getSeconds();
            if (seconds < 10) seconds = '0'+seconds;

            return hours + ":" + minutes + ":" + seconds;
        }

        return obj;

    });