/**
 * Created by yanhao on 15/8/19.
 */
angular.module('CITYCIRCLE')
    .controller('DetailController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            $scope.goBack = function(){
                $scope.$ionicGoBack();
            }

        }
    ]);