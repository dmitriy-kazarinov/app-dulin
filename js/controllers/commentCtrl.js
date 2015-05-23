/**
 * Created by Dima on 23.05.2015.
 */
appDulin.controller('commentCtrl',['$scope', 'allComment',
    function($scope, allComment){

        $scope.comments = [];

        allComment.get(function(data){
            $scope.comments = data;
        });
        
        $scope.addNewComment = function(comment){
            $scope.comments.push(comment);
            $scope.comment.time = Date.now();
            $scope.comment = {};
        };

    }
]);