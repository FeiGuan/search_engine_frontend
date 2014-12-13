/**
 * Created by feiguan on 12/13/14.
 */

var app = angular.module('myApp', []);

function appCtrl($scope, $http) {
    $scope.haveResults = false;
    $scope.queryWord = "";
    $scope.ranker = "favorite";
    $scope.size = 10;
    $scope.start = 0;

    $scope.go = function() {
        $http.get('/search?query=' + $scope.queryWord + '&ranker=' + $scope.ranker
        + '&format=html&numdocs=10').
            success(function(data) {
                $scope.documents = data.results;
                $scope.knowledge = data.knowledge;
                $scope.haveResults = true;
            });
    };
}