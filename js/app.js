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
                    .state('home.directive', {
                        url: '/directive',
                        templateUrl: '/pages/custom-directive.html'
                    })
                    .state('home.test', {
                        url: '/test',
                        templateUrl: '/pages/test.html',
                        controller: 'testCtrl'
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
                            controller: 'commentCtrl'
                        }
                    }
                });
            //$locationProvider
            //    .html5Mode({
            //        enabled: true,
            //        requireBase: false
            //    });

        }])
        .controller('commentCtrl',['$scope', 'allComment',
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
        ])

        .controller('testCtrl', ['$scope', function($scope){
            $scope.formTest = {};
            $scope.formDone = [];
            $scope.result = function(obj){
                console.log(obj);

                //true questions
                if(obj.question1 === '4'){
                    $scope.formDone.push({'question1': true});
                };
                if(obj.question2 === '7'){
                    $scope.formDone.push({'question2': true});
                };
                if(obj.question3 === 'Дима'){
                    $scope.formDone.push({'question3': true});
                };
                console.log($scope.formDone);

                //result done
                var done = $scope.formDone.length;
                if(done >= 3){
                    alert('Молодец');
                } else if (done < 3) {
                    alert('Плохо');
                }

                $scope.formDone = [];
            }
        }])

        .factory('allComment', ['$http', function($http){
            return{
                get: function(callback){
                    $http.get('json/comments.json').success(function(data) {
                        callback(data);
                    });
                }
            };
        }])
        .directive('fillBlock', function(){

            return {
                link: function($scope, element, attributes){
                    $scope.text = 'some text';
                    console.log(attributes.pluginOption);
                    $scope.$watch('text', function(oneValue, twoValue) {
                        if(oneValue === ''){
                            console.log('empty input');
                            $(element).hide();
                        }
                    });
                },
                restrict: 'A'
            }
        });
})();