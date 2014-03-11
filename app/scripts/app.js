'use strict';

angular.module('xsellDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools',
  'ui.bootstrap',
  'AngularGM'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/task/:taskid', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/taskdetail.html',
        controller: 'TaskDetail'
      })
      .when('/customer', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/customers.html',
        controller: 'Customers'
      })
      .when('/location/', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/locations.html',
        controller: 'Locations'
      })
      .when('/location/:locationid', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/locationdetail.html',
        controller: 'LocationDetail'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
    .controller('BaseApp',function($scope){

        //$scope.alertShow = false;
        $scope.alertMessage=null;

        $scope.customers =[
            {
                cid:1,
                name:"North East Beverage",
                address1:"21b Baker St.",
                address2:"Second floor",
                city:"Boston",
                state:"MA",
                zip:"03030",
                contacts:[
                    {name:"Bob Johnson",title:"President",phone1:"617 854-3176", email:"bjohnson@nebeverage.com"},
                    {name:"Bill Murray",title:"Whiskey product manager",phone1:"617 854-3172", email:"bmurray@nebeverage.com"},
                    {name:"Jill French",title:"Distribution chain manager",phone1:"617 854-3172", email:"jfrench@nebeverage.com"},
                ]
            }
        ]


        $scope.products=[
            {
                pid:27,
                did:1,
                manufacturer:"Macallan",
                product:"21 Year Old Fine Oak Scotch Whisky",
                image:"/images/Macallan_21yr_Fine_Oak_Scotch_308495.jpg",
                barcode:1282947324032073204,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },
            {
                pid:28,
                did:1,
                manufacturer:"Laphroaig",
                product:"10 Year Old \"Cask Strength\" Islay Single Malt Scotch Whisky",
                image:"/images/Laphroaig_10_Year_Old_Cask_Strength_Islay_Single_Malt_Scotch_Whisky_1187099.jpg",
                barcode:453623778283699868,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },
            {
                pid:29,
                did:1,
                manufacturer:"Ardbeg",
                product:"Airigh Nam Beist Scotch",
                image:"/images/Ardbeg_Airigh_Nam_Beist_Scotch_1182926.jpg",
                barcode:876234869239889723,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },
            {
                pid:30,
                did:1,
                manufacturer:"Blanton's",
                product:"Straight from the Barrel Bourbon",
                image:"/images/Blantons_Straight_from_the_Barrel_Bourbon_1184994.jpg",
                barcode:77742374932873488,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },
            {
                pid:31,
                did:1,
                manufacturer:"Woodford Reserve",
                product:"Kentucky Straight Bourbon",
                image:"/images/Woodford_Reserve_Kentucky_Straight_1176127.jpg",
                barcode:76358436983475893,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },
            {
                pid:32,
                did:1,
                manufacturer:"Knob Creek",
                product:"9 Year Old Single Barrel Reserve Bourbon",
                image:"/images/Knob_Creek_9_Year_Old_Single_Barrel_Reserve_Bourbon_309388.jpg",
                barcode:1282947324032073204,
                barcodeimage:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UPC_A.svg/220px-UPC_A.svg.png"
            },

        ]

        $scope.locations =[
            {
                lid:1,
                name:"Mass Liquors",
                address1:"392 Chandler Street",
                address2:"",
                city:"Worcester",
                state:"MA",
                zip:"01602",
                lat:42.263177,
                lng:-71.831701,
                contacts:[
                    {name:"Bob Johnson",title:"President",phone1:"(508) 753-0250", email:"bjohnson@nebeverage.com"},
                    {name:"Bill Murray",title:"Whiskey product manager",phone1:"(508) 753-0250", email:"bmurray@nebeverage.com"},
                    {name:"Jill French",title:"Distribution chain manager",phone1:"(508) 753-0250", email:"jfrench@nebeverage.com"},
                ]
            },
          {
            lid:2,
            name:"Austin Liquors",
            address1:"20 Boston Turnpike Road",
            address2:"White City Shopping Center",
            city:"Shrewsbury",
            state:"MA",
            zip:"01545",
            lat:42.273425,
            lng:-71.7532751,
            contacts:[
              {name:"John Giles",title:"President",phone1:"508-755-8100", email:"jgiles@austinliquors.com"}
            ]
          },
          {
            lid:3,
            name:"Austin Liquors",
            address1:"117 Gold Star Boulevard",
            address2:"",
            city:"Worchester",
            state:"MA",
            zip:"01606",
            lat:42.291996,
            lng:-71.803709,
            contacts:[
              {name:"John Giles",title:"President",phone1:"508-853-8953", email:"jgiles@austinliquors.com"}
            ]
          }
        ]

        $scope.displays =[
            {
                did:302,
                name:"Free Standing Christmas Display",
                location:"front left of store",
                tasks:[
                    {tid:23}
                ]
            },
          {
            did:303,
            name:"Holiday Promotion",
            location:"TBD",
            tasks:[
              {tid:23}
            ]
          },
          {
            did:304,
            name:"Holiday Promotion",
            location:"TBD",
            tasks:[
              {tid:23}
            ]
          },
          {
            did:305,
            name:"Holiday Promotion",
            location:"TBD",
            tasks:[
              {tid:23}
            ]
          }

        ]


        $scope.tasks=[
            {
                tid:23, //task id
                cid:1, //customer id
                pid:27, // product id
                lid:1, // location id
                did:302,// display id
                name:"Maintain Current Display",
                description:"When our selves look good our product sells. Our primary job is to create a good sales environment for our products. Clean up the display. Take a count of all current inventory in the store, both on shelf and off. Ask an on staff rep how the display is performing. Ask what they think we could do to make it work even better. Be thankful and friendly.",
                due:"2014-03-24T00:29:49.082Z",
                steps:[
                    {
                        name:"Clean up the shelf.",
                        description:"Clean the display and surrounding area",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Face inventory.",
                        description:"Bring all of the inventory from the back of the display forward",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Take an on shelf item count",
                        description:"Count the current items on the self",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Ask for a in store stock number",
                        description:"Get a count of items not on the shelf, if any. Some store have this number available in a tracking system.",
                        done:false,
                        note:"",
                        finished:""
                    }

                ]
            },
            {
                tid:24, //task id
                cid:1, //customer id
                pid:32, // product id
                lid:1, // location id
                did:303,// display id
                name:"Set Up New Display",
                description:"Create a new display at the location for the product. \n        \nThis is a big opportunity for the product. It is your chance to negotiate more space and a better location. These two factors will increase sales if done correctly. Before you begin walk the store and in your mind find three place that would serve well.\n        \nApproach the staff of the store and involve them in the process. Show them what the display will look like and explain you choices for a location. The more involved they are in the process the more they will work to preserve the display when you are not present.",
                due:"2014-03-29T00:29:49.082Z",
                steps:[
                    {
                        name:"Get on site permission",
                        description:"Before you begin make sure you have discussed the display and it\'s location with the store staff.\n        \n(A location visible from the entrance will have a <strong>15% higher sale rate</strong> that those not visible.)\n        ",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Take a photo of the location before setup",
                        description:"please take a quick photo of what the installation location looks like without the new dispaly",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Install the display",
                        description:"Take your time. Many temporary display are strong once assembled but not before.\n        \nOnce you are finished make sure the display is solid. A case of liquor will weight 24lbs. Ask yourself if you think this display will be able to hold the required product. \n\nIf you have any doubts do not use the display. Is it collapses or causes an hazzard it could prevent the location from using our display in the future.\n        \n        \n        ",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Stock the display",
                        description:"Stock the display with product. Use all of the product you have brought with you for this purpose before using any in-store product. ",
                        done:false,
                        note:"",
                        finished:""
                    },
                    {
                        name:"Take a photo of the completed display",
                        description:"Take photos of the completed display from the front and the side. Add these photos to the display description and fill out the rest of the description and this location.\n        \nYou have gone to all the effort to setup a new display. Document it accurately because the manufacturer will see your description and photos.",
                        done:false,
                        note:"",
                        finished:""
                    }

                ]
            },
          {
            tid:25, //task id
            cid:1, //customer id
            pid:29, // product id
            lid:2, // location id
            did:304,// display id
            name:"Set Up New Display",
            description:"Create a new display at the location for the product. \n        \nThis is a big opportunity for the product. It is your chance to negotiate more space and a better location. These two factors will increase sales if done correctly. Before you begin walk the store and in your mind find three place that would serve well.\n        \nApproach the staff of the store and involve them in the process. Show them what the display will look like and explain you choices for a location. The more involved they are in the process the more they will work to preserve the display when you are not present.",
            due:"2014-03-31T00:29:49.082Z",
            steps:[
              {
                name:"Get on site permission",
                description:"Before you begin make sure you have discussed the display and it\'s location with the store staff.\n        \n(A location visible from the entrance will have a <strong>15% higher sale rate</strong> that those not visible.)\n        ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Take a photo of the location before setup",
                description:"please take a quick photo of what the installation location looks like without the new dispaly",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Install the display",
                description:"Take your time. Many temporary display are strong once assembled but not before.\n        \nOnce you are finished make sure the display is solid. A case of liquor will weight 24lbs. Ask yourself if you think this display will be able to hold the required product. \n\nIf you have any doubts do not use the display. Is it collapses or causes an hazzard it could prevent the location from using our display in the future.\n        \n        \n        ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Stock the display",
                description:"Stock the display with product. Use all of the product you have brought with you for this purpose before using any in-store product. ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Take a photo of the completed display",
                description:"Take photos of the completed display from the front and the side. Add these photos to the display description and fill out the rest of the description and this location.\n        \nYou have gone to all the effort to setup a new display. Document it accurately because the manufacturer will see your description and photos.",
                done:false,
                note:"",
                finished:""
              }

            ]
          },
          {
            tid:26, //task id
            cid:1, //customer id
            pid:31, // product id
            lid:3, // location id
            did:305,// display id
            name:"Set Up New Display",
            description:"Create a new display at the location for the product. \n        \nThis is a big opportunity for the product. It is your chance to negotiate more space and a better location. These two factors will increase sales if done correctly. Before you begin walk the store and in your mind find three place that would serve well.\n        \nApproach the staff of the store and involve them in the process. Show them what the display will look like and explain you choices for a location. The more involved they are in the process the more they will work to preserve the display when you are not present.",
            due:"2014-31-29T00:29:49.082Z",
            steps:[
              {
                name:"Get on site permission",
                description:"Before you begin make sure you have discussed the display and it\'s location with the store staff.\n        \n(A location visible from the entrance will have a <strong>15% higher sale rate</strong> that those not visible.)\n        ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Take a photo of the location before setup",
                description:"please take a quick photo of what the installation location looks like without the new dispaly",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Install the display",
                description:"Take your time. Many temporary display are strong once assembled but not before.\n        \nOnce you are finished make sure the display is solid. A case of liquor will weight 24lbs. Ask yourself if you think this display will be able to hold the required product. \n\nIf you have any doubts do not use the display. Is it collapses or causes an hazzard it could prevent the location from using our display in the future.\n        \n        \n        ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Stock the display",
                description:"Stock the display with product. Use all of the product you have brought with you for this purpose before using any in-store product. ",
                done:false,
                note:"",
                finished:""
              },
              {
                name:"Take a photo of the completed display",
                description:"Take photos of the completed display from the front and the side. Add these photos to the display description and fill out the rest of the description and this location.\n        \nYou have gone to all the effort to setup a new display. Document it accurately because the manufacturer will see your description and photos.",
                done:false,
                note:"",
                finished:""
              }

            ]
          }



        ]


        $scope.AlertDemoCtrl = function ($scope) {
            $scope.alerts = [
     //           { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            ];

            $scope.addAlert = function($scope) {
                $scope.alerts.push({msg: $scope.msg});
            };

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };
            return $scope.alerts;

        }



    })
  .controller('SimpleMapCtrl', function($scope) {
    $scope.$watch('center', function(center) {
      if (center) {
        $scope.centerLat = center.lat();
        $scope.centerLng = center.lng();
      }
    });

    $scope.updateCenter = function(lat, lng) {
      $scope.center = new google.maps.LatLng(lat, lng);
    };
  })
;
