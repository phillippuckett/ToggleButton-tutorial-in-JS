angular.module('test-button')
    .controller('buttonCtrl', function ($scope) {
        $scope.button = true;
        $scope.toggle = function () {
            $scope.button = !$scope.button;
            console.log("toggle function working");
        }
    });