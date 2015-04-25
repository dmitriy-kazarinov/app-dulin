(function(){

    var appDulin = angular.module('appDulin',['ui.router']);

    appDulin
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/pages/home.html'
                })
                    .state('home.music', {
                        url: '/music',
                        template: '<div class="b-alert alert alert-success">Мы на вложенной странице music</div>'
                    })
                    .state('home.video', {
                        url: '/video',
                        template: '<div class="b-alert alert alert-info">Мы на вложенной странице video</div>'
                    })
                    .state('home.news', {
                        url: '/news',
                        template: '<div class="b-alert alert alert-warning">Мы на вложенной странице news</div>'
                    })

                .state('comment', {
                    url: '/comment',
                    views: {
                        '': { templateUrl: '/pages/comment.html' },
                        'columnText@comment': { template: '<div class="well">Страница с разным представлением</div>' },
                        'columnComment@comment': {
                            templateUrl: '/pages/comment-table.html',
                            controller: 'commentTable'
                        }
                    }
                });
            //$locationProvider
            //    .html5Mode({
            //        enabled: true,
            //        requireBase: false
            //    });

        }])
        .controller('commentTable',['$scope', 'allComment',
            function($scope, allComment){

                $scope.comments = [];

                allComment.get(function(data){
                    $scope.comments = data;
                });


                $scope.addNewComment = function(comment){
                    $scope.comments.push(comment);
                    this.comment.time = Date.now();
                    $scope.comment = {};
                };

            }
        ])

        .factory('allComment', ['$http', function($http){
            return{
                get: function(callback){
                    $http.get('json/comments.json').success(function(data) {
                        callback(data);
                    });
                }
            };
        }]);
})();