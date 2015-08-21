/**
 * Created by Administrator on 2015/8/20.
 */
angular.module('CITYCIRCLE')
    .controller('GroupController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            $scope.goBack = function(){
                $scope.$ionicGoBack();
            }

            $scope.results = [
                {id:1,ion:'ion-cutlery',name:'食品'},
                {id:2,ion:'ion-car',name:'汽车'},
                {id:3,ion:'ion-book',name:'图书'},
                {id:4,ion:'ion-heart',name:'育儿'},
                {id:5,ion:'ion-glass',name:'美女'}
            ];

            $scope.select = function(result){
                $state.go('edit',result)
            }

        }
    ]);