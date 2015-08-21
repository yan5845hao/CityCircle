/**
 * Created by Administrator on 2015/8/20.
 */
angular.module('CITYCIRCLE')
    .controller('EditController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            var id = $state.params.id;
            var name = $state.params.name;

            var defaultType = {id:1,ion:'ion-cutlery',name:'食品'};

            $scope.name = (name)?name:defaultType.name;


            $scope.goBack = function(){
                $state.go("main");
            }

            $scope.show = function(){
                $state.go("list");
            }

        }
    ]);