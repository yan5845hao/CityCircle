/**
 * Created by yanhao on 15/8/19.
 */
angular.module('CITYCIRCLE',
    [
        'ngResource',
        'ionic'
    ])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider

            .state('main',{
                url: "/main",
                templateUrl: "templates/main.html",
                controller:'MainController'
            })

            .state('detail',{
                url: "/detail",
                templateUrl: "templates/detail.html",
                controller:'DetailController'
            })

            .state('edit',{
                url: "/edit/:id/:name",
                templateUrl: "templates/edit.html",
                controller:'EditController'
            })

            .state('list',{
                url: "/list",
                templateUrl: "templates/list.html",
                controller:'GroupController'
            })

        $urlRouterProvider.otherwise('/main');
    });