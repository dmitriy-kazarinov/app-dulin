/**
 * Created by Dima on 23.05.2015.
 */
appDulin.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/views/home.html'
            })
                .state('home.directive', {
                    url: '/directive',
                    templateUrl: '/app/views/comment-list.html',
                    controller: 'commentCtrl'
                })
                .state('home.form', {
                    url: '/form',
                    templateUrl: '/app/views/test.html',
                    controller: 'formCtrl'
                })
                .state('home.news', {
                    url: '/news',
                    template: '<div class="b-alert alert alert-warning">Page news</div>'
                })

            .state('comment', {
                url: '/comment',
                views: {
                    '': { templateUrl: '/app/views/comment.html' },
                    'columnText@comment': { template: '<div class="well">Different view</div>' },
                    'columnComment@comment': {
                        templateUrl: '/app/views/comment-table.html',
                        controller: 'commentCtrl'
                    }
                }
            })
            .state('invoice', {
                url: '/invoice',
                templateUrl: '/app/views/invoice.html',
                controller: 'invoiceCtrl'
            });
        //$locationProvider
        //    .html5Mode({
        //        enabled: true,
        //        requireBase: false
        //    });

    }]);