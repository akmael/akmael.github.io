angular.module('portfolioPage', ['ngRoute', 'ngAnimate']);

angular.module('portfolioPage')
        .config(function($routeProvider){
           $routeProvider
           .when('/',{
               templateUrl: '../html/views/home.html',
               controller: 'webContorller'
           })
           .when('/video',{
               templateUrl: "../html/views/video.html",
               controller: 'videoController'
           })
           .when('/photos', {
                templateUrl: "../html/views/photos.html",
                controller: 'photosController'
           })
           .otherwise({
             redirectTo: '/'
           });
        });


        // CONTROLLERS ============================================
        // home page controller
        angular.module('portfolioPage').controller('webContorller', function($scope) {
            $scope.pageClass = 'page-home';
        });

        // about page controller
        angular.module('portfolioPage').controller('photosController', function($scope) {
            $scope.pageClass = 'page-about';
        });

        // contact page controller
        angular.module('portfolioPage').controller('videoController', function($scope) {
            $scope.pageClass = 'page-contact';
        });
