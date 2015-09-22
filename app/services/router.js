/**
 * Created by Dima on 23.05.2015.
 */
appDulin.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/pages/home.html'
            })
                .state('home.directive', {
                    url: '/directive',
                    templateUrl: '/pages/comment-list.html',
                    controller: 'commentCtrl'
                })
                .state('home.form', {
                    url: '/form',
                    templateUrl: '/pages/test.html',
                    controller: 'formCtrl'
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
            })
            .state('invoice', {
                url: '/invoice',
                templateUrl: '/pages/invoice.html',
                controller: 'invoiceCtrl'
            });
        //$locationProvider
        //    .html5Mode({
        //        enabled: true,
        //        requireBase: false
        //    });

    }]);