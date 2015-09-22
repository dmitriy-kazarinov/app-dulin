/**
 * Created by Dima on 23.05.2015.
 */
appDulin.controller('formCtrl', ['$scope', function($scope){
    $scope.formTest = {};

    $scope.result = function(obj){
        //console.log(obj);

        //true questions
        if(obj.question1 === '4'){
            alert('Good!')
        }else{
            alert('Bad, try more')
        };

        $scope.formDone = [];
    }
}]);