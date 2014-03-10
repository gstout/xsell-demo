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
  .controller('TaskDetail', function($scope,$routeParams){

//    Task
//
//
//    $scope.tasks
//
    //$scope.taskDetail =parseInt($routeParams.taskid);
    $scope.taskDetail = _.findWhere($scope.tasks, {tid:parseInt($routeParams.taskid)});
    $scope.taskDetail.location = _.findWhere($scope.locations, {lid:parseInt($scope.taskDetail.lid)});
    $scope.taskDetail.display = _.findWhere($scope.displays, {did:parseInt($scope.taskDetail.did)});
    $scope.taskDetail.customer = _.findWhere($scope.customers, {cid:parseInt($scope.taskDetail.cid)});
    $scope.taskDetail.product = _.findWhere($scope.products, {pid:parseInt($scope.taskDetail.pid)});

    //<gm-map gm-map-id="'myMap'" gm-center="center" gm-zoom="zoom" gm-bounds="bounds" gm-map-type-id="mapTypeId" style="width:400px;height:400px;"></gm-map>
//angulargm.objToLatLng();
  //  $scope.center = new google.maps.LatLng($scope.taskDetail.location.lat, $scope.taskDetail.location.lng);
    //$scope.center = angulargm.objToLatLng($scope.taskDetail.location);
    $scope.zoom = 4;

    $scope.options = {
      map: {
       // center: new google.maps.LatLng(48, -121),
        center: new google.maps.LatLng(parseFloat($scope.taskDetail.location.lng),parseFloat($scope.taskDetail.location.lat)),
        zoom: 16
       // mapTypeId: google.maps.MapTypeId.TERRAIN
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
