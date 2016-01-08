angular.module('test-button')
    .directive('buttonDir', function () {
        return {
            restrict: "E",
            templateUrl: "buttonTmpl.html"
        }
    });