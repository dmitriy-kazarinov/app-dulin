/**
 * Created by Dima on 23.05.2015.
 */
appDulin.factory('allComment', ['$http', function($http){
    return {
        get: function(callback){
            $http.get('/api/comments').success(function(data) {
                callback(data);
            });
        }
    };
}]);