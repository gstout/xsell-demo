'use strict';

angular.module('xsellDemoApp')
  .controller('MainCtrl', function ($scope, simpleLogin) {


        $scope.format = 'M/d/yy h:mm:ss a';
        $scope.format = 'medium';
        $scope.today = new Date();
     //   $scope.alerts = $scope.AlertDemoCtrl($scope);
        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }

        $scope.auth = simpleLogin.init();
        var userget = $scope.auth.$getCurrentUser();

        userget.then(function(data){
            console.log("userget", data);
            $scope.currentUser = data;
        })

        console.log('auth',$scope.auth);

       // $scope.tasks = $firebase(tasksRef);

        // funtion to delete tasks fomr the list
        $scope.deleteTask = function(id, taskname){

            var r=confirm('Do you want to delete the task: '+ taskname );
            if (r === true)
            {
                $scope.tasks.$remove(id);
            }
            else
            {
            //   $scope.alerts.addAlert("You pressed Cancel!");
             //   $scope.alertShow = true;
                $scope.alertMessage='You pressed Cancel!';
            }
        };



  })
.directive('myCurrentTime', function($interval, dateFilter) {

        function link(scope, element, attrs) {
            var format,
                timeoutId;

            function updateTime() {
                element.text(dateFilter(new Date(), format));
            }

            scope.$watch(attrs.myCurrentTime, function(value) {
                format = value;
                updateTime();
            });

            element.on('$destroy', function() {
                $interval.cancel(timeoutId);
            });

            // start the UI update process; save the timeoutId for canceling
            timeoutId = $interval(function() {
                updateTime(); // update DOM
            }, 1000);
        }

        return {
            link: link
        };
    });
