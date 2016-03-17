// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var app = angular.module('angularLearning', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // .when('/', {
        //     templateUrl: 'pages/home.html',
        //     controller: 'mainController'
        // })

        // route for the home page
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/home'
        });
});

// create the controller and inject Angular's $scope
app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'home';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'about';
});

app.controller('contactController', function($scope) {
    $scope.message = 'contact';
});
