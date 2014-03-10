'use strict';

angular.module('xsellDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
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
      .otherwise({
        redirectTo: '/login'
      });
  })
    .controller('BaseApp',function($scope){

        //$scope.alertShow = false;
        $scope.alertMessage=null;

        $scope.customer =[
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
                barcode:1282947324032073204
            },
            {
                pid:28,
                did:1,
                manufacturer:"Laphroaig",
                product:"10 Year Old \"Cask Strength\" Islay Single Malt Scotch Whisky",
                image:"/images/Laphroaig_10_Year_Old_Cask_Strength_Islay_Single_Malt_Scotch_Whisky_1187099.jpg",
                barcode:453623778283699868
            },
            {
                pid:29,
                did:1,
                manufacturer:"Ardbeg",
                product:"Airigh Nam Beist Scotch",
                image:"/images/Ardbeg_Airigh_Nam_Beist_Scotch_1182926.jpg",
                barcode:876234869239889723
            },
            {
                pid:30,
                did:1,
                manufacturer:"Blanton's",
                product:"Straight from the Barrel Bourbon",
                image:"/images/Blantons_Straight_from_the_Barrel_Bourbon_1184994.jpg",
                barcode:77742374932873488
            },
            {
                pid:31,
                did:1,
                manufacturer:"Woodford Reserve",
                product:"Kentucky Straight Bourbon",
                image:"/images/Woodford_Reserve_Kentucky_Straight_1176127.jpg",
                barcode:76358436983475893
            },
            {
                pid:32,
                did:1,
                manufacturer:"Knob Creek",
                product:"9 Year Old Single Barrel Reserve Bourbon",
                image:"/images/Knob_Creek_9_Year_Old_Single_Barrel_Reserve_Bourbon_309388.jpg",
                barcode:1282947324032073204
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
                long:42.263177,
                lat:-71.831701,
                contacts:[
                    {name:"Bob Johnson",title:"President",phone1:"(508) 753-0250", email:"bjohnson@nebeverage.com"},
                    {name:"Bill Murray",title:"Whiskey product manager",phone1:"(508) 753-0250", email:"bmurray@nebeverage.com"},
                    {name:"Jill French",title:"Distribution chain manager",phone1:"(508) 753-0250", email:"jfrench@nebeverage.com"},
                ]
            }
        ]

        $scope.display =[
            {
                did:1,
                name:"Free Standing Christmas display",
                location:"front left of store",
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
                name:"Catalog Current Inventory",
                description:"Take a count of all current inventory",
                due:"2014-03-29T00:29:49.082Z",
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
                pid:27, // product id
                lid:1, // location id
                did:303,// display id
                name:"Set up new display",
                description:"create a new display for Location",
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



    });