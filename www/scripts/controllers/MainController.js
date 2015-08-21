/**
 * Created by yanhao on 15/8/19.
 */
angular.module('CITYCIRCLE')
    .controller('MainController',['$scope', '$state','$ionicListDelegate','$timeout','$ionicPopover','$ionicBackdrop',
        function($scope, $state,$ionicListDelegate,$timeout,$ionicPopover,$ionicBackdrop){
            $scope.results = [
                {title:'YHYH',content:'客户就开会开会就大事发生发的发的发阿发达看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
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

            $scope.moreDataCanBeLoaded = false;

            var i = 0;
            $scope.loadMore = function(){
                var moves = [
                    {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                    {title:'YH1YH',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                    {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                    {title:'YH1YH',content:'客户就开会开会就看见',type:'美食',username:'严浩',updatedAt:'2015-08-19'},
                    {title:'YH1YH',type:'美食',username:'严浩',updatedAt:'2015-08-19'}
                ];

                if(moves.length == 0)
                    $scope.moreDataCanBeLoaded = true;

                var timer = $timeout(
                    function() {
                        angular.forEach(moves, function (result, index) {
                            //$scope.$apply(function() {
                            $scope.results.push(result);
                            //});
                        });
                        moves = [];
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        $timeout.cancel(timer);
                    },
                    2000
                );
            }

            $scope.show = function(){
                $state.go("detail");
            }

            $scope.edit = function(){
                $scope.closePopover();
                $state.go("edit");
            }

            $scope.showList = function(){
                $scope.closePopover();
                $state.go("list");
            }

            $ionicPopover.fromTemplateUrl("ez-popover.html", {
                scope: $scope
            }).then(function (popover) {
                $scope.popover = popover;
            });
            $scope.openPopover = function($event) {
                $scope.popover.show($event);
            };
            $scope.closePopover = function() {
                $scope.popover.hide();
            };
            //销毁事件回调处理：清理popover对象
            $scope.$on("$destroy", function() {
                $scope.popover.remove();
            });
            // 隐藏事件回调处理
            $scope.$on("popover.hidden", function() {
            });
            //删除事件回调处理
            $scope.$on("popover.removed", function() {
                // Execute action
            });
            //$state.go("edit");
        }
    ])