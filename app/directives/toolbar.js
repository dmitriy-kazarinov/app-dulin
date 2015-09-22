/**
 * Created by Dima on 21.08.2015.
 */
appDulin.directive('toolbar', function () {
    return {
        link: function(scope, element, attrs) {
            $(element).toolbar(scope.$eval(attrs.toolbar));
        },
        restrict: 'A'
    };
});