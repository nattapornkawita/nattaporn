// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var app = angular.module('angularLearning', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        // route for the guide page
        .when('/guide', {
            templateUrl: 'pages/guide.html',
            controller: 'guideController'
        })

        // route for the reference page
        .when('/reference', {
            templateUrl: 'pages/reference.html',
            controller: 'referenceController'
        })

        // route for the author page
        .when('/author', {
            templateUrl: 'pages/author.html',
            controller: 'authorController'
        })
        
        // route for the objective page
        .when('/objective', {
            templateUrl: 'pages/objective.html',
            controller: 'objectiveController'
        })
        
        // route for the pretest page
        .when('/pretest', {
            templateUrl: 'pages/pretest.html',
            controller: 'pretestController'
        })
        
        // route for the content page
        .when('/content', {
            templateUrl: 'pages/content.html',
            controller: 'contentController'
        })
        
        // route for the posttest page
        .when('/posttest', {
            templateUrl: 'pages/posttest.html',
            controller: 'posttestController'
        })
        
        // route for the games page
        .when('/games', {
            templateUrl: 'pages/games.html',
            controller: 'gamesController'
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

app.controller('guideController', function($scope) {
    $scope.message = 'guide';
});

app.controller('referenceController', function($scope) {
    $scope.message = 'reference';
});

app.controller('authorController', function($scope) {
    $scope.message = 'author';
});

app.controller('objectiveController', function($scope) {
    $scope.message = 'objective';
});

app.controller('pretestController', function($scope) {
    $scope.message = 'pretest';
});

app.controller('contentController', function($scope) {
    $scope.message = 'content';
});

app.controller('posttestController', function($scope) {
    $scope.message = 'posttest';
});

app.controller('gamesController', function($scope) {
    $scope.message = 'games';
});


