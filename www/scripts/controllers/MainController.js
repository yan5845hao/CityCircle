/**
 * Created by yanhao on 15/8/19.
 */
angular.module('CITYCIRCLE')
    .controller('MainController',['$scope', '$state','$ionicListDelegate',
        function($scope, $state,$ionicListDelegate){
            $scope.results = [
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YHYH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'}
            ];

            $scope.moreDataCanBeLoaded = true;

            var moves = [
                {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YH1YH',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                {title:'YH1YH',type:'美食',username:'严浩',updatedAt:'2015-08-19'}
            ];
            var i = 0;
            $scope.loadMoreData = function(){
                if(moves.length > 0)
                    $scope.moreDataCanBeLoaded = false;
                angular.forEach(moves, function (result, index) {
                    //$scope.$apply(function() {
                        $scope.results.push(result);
                    //});
                });
                moves = [];
                $scope.$broadcast('scroll.infiniteScrollComplete');

            }

        }
    ])