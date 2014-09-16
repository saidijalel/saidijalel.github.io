'use strict';

var app = angular.module('App', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {templateUrl: 'pages/about.html', controller: 'AppCtrl'});
  $routeProvider.when('/cv', {templateUrl: 'pages/cv.html', controller: 'AppCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'pages/contact.html', controller: 'AppCtrl'});
  $routeProvider.when('/', {templateUrl: 'pages/home.html', controller: 'AppCtrl'});
  $routeProvider.when('/blog', {templateUrl: 'pages/blog.html', controller: 'AppCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});

}]);


app.controller('AppCtrl',['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };


}]);



/* Jquery */
$(document).on('click', '.navbar-collapse.in', function (e) {
    $('#page').hide();
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
        $('#page').show();
    }
});




$(document).on('click', '.navbar-toggle', function (e) {
    $('#page').hide();
});







