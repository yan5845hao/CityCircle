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

        $urlRouterProvider.otherwise('/main');
    });