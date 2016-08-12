/**
 * Created by Dima on 23.05.2015.
 */
appDulin.directive('commentList', function () {
    return {
        restrict: 'E',
        scope: {
            list: '='
        },
        templateUrl: '/app/directives/list-directive.html'
    }
});
