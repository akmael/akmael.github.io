angular.module('portfolioPage', ['ngRoute']);

angular.module('portfolioPage')
        .config(function($routeProvider){
           $routeProvider
           .when('/web',{
               templateUrl: '../html/views/home.html'
           })
           .when('/video',{
               templateUrl: "../html/views/video.html"
           })
           .when('/photos', {
                templateUrl: "../html/views/photos.html"
           })
           .when('/skills',{
                 templateUrl: ""
           })
           .when('/experiance', {
             templateUrl:""
           })
           .when('/Education', {
             templateUrl: ""
           })
           .otherwise({
             redirectTo: '/'
           });
        });
