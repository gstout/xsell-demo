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
        var index;
        for (index = 0; index < $scope.tasks.length; ++index) {
          $scope.tasks[index].location = _.findWhere($scope.locations, {lid:parseInt($scope.tasks[index].lid)});
          $scope.tasks[index].product = _.findWhere($scope.products, {pid:parseInt($scope.tasks[index].pid)});
        }



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
        center: new google.maps.LatLng(parseFloat($scope.taskDetail.location.lat),parseFloat($scope.taskDetail.location.lng)),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
      },
      notselected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      },
      selected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
      }
    };


    $scope.locationPins = [
      {
        id: 0,
        name: $scope.taskDetail.location.name,
        img: 'http://www.thetrackerfoundation.org/Images/MountRainier_SM.jpg',
        elevationMeters: 4392,
        location: {
          lat: parseFloat($scope.taskDetail.location.lat),
          lng: parseFloat($scope.taskDetail.location.lng)
        }
      }
//      {
//        id: 2,
//        name: 'Glacier Peak',
//        img: 'http://www.rhinoclimbs.com/Images/Glacier.9.jpg',
//        elevationMeters: 3207,
//        location: {
//          lat: 48.111844,
//          lng: -121.11412
//        }
//      }

    ]

    $scope.getStorepinOpts = function(locationPin) {
      return angular.extend(
        { title: locationPin.name },
        locationPin.selected ? $scope.options.selected :
          $scope.options.notselected
      );
    };

    $scope.selectStorepin = function(locationPin) {
      if ($scope.locationPin) {
        $scope.locationPin.selected = false;
      }
      $scope.locationPin = locationPin;
      $scope.locationPin.selected = true;

      $scope.$broadcast('gmMarkersUpdate', 'locationPins');
    };

  })
  .controller('Customers', function($scope,$routeParams){


  })
  .controller('Locations', function($scope,$routeParams){


  })
  .controller('LocationDetail', function($scope,$routeParams){


    $scope.locationDetail = _.findWhere($scope.locations, {lid:parseInt($routeParams.locationid)});
//    $scope.locationDetail.location = _.findWhere($scope.locations, {lid:parseInt($scope.locationDetail.lid)});
//    $scope.locationDetail.display = _.findWhere($scope.displays, {did:parseInt($scope.locationDetail.did)});
//    $scope.locationDetail.customer = _.findWhere($scope.customers, {cid:parseInt($scope.locationDetail.cid)});
//    $scope.locationDetail.product = _.findWhere($scope.products, {pid:parseInt($scope.locationDetail.pid)});
//
//    $scope.zoom = 4;
//
//    $scope.options = {
//      map: {
//        center: new google.maps.LatLng(parseFloat($scope.locationDetail.location.lat),parseFloat($scope.locationDetail.location.lng)),
//        zoom: 18,
//        mapTypeId: google.maps.MapTypeId.HYBRID
//      },
//      notselected: {
//        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
//      },
//      selected: {
//        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
//      }
//    };
//
//
//    $scope.locationPins = [
//      {
//        id: 0,
//        name: $scope.locationDetail.location.name,
//        img: 'http://www.thetrackerfoundation.org/Images/MountRainier_SM.jpg',
//        elevationMeters: 4392,
//        location: {
//          lat: parseFloat($scope.locationDetail.location.lat),
//          lng: parseFloat($scope.locationDetail.location.lng)
//        }
//      }
////      {
////        id: 2,
////        name: 'Glacier Peak',
////        img: 'http://www.rhinoclimbs.com/Images/Glacier.9.jpg',
////        elevationMeters: 3207,
////        location: {
////          lat: 48.111844,
////          lng: -121.11412
////        }
////      }
//
//    ]
//
//    $scope.getStorepinOpts = function(locationPin) {
//      return angular.extend(
//        { title: locationPin.name },
//        locationPin.selected ? $scope.options.selected :
//          $scope.options.notselected
//      );
//    };
//
//    $scope.selectStorepin = function(locationPin) {
//      if ($scope.locationPin) {
//        $scope.locationPin.selected = false;
//      }
//      $scope.locationPin = locationPin;
//      $scope.locationPin.selected = true;
//
//      $scope.$broadcast('gmMarkersUpdate', 'locationPins');
//    };
//

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
