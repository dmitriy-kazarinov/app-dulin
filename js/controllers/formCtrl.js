/**
 * Created by Dima on 23.05.2015.
 */
appDulin.controller('formCtrl', ['$scope', function($scope){
    $scope.formTest = {};

    $scope.result = function(obj){
        //console.log(obj);

        //true questions
        if(obj.question1 === '4'){
            $scope.formDone.push({'question1': true});
        };

        $scope.formDone = [];
    }
}]);