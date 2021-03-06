console.log('app.js loaded');

var app = angular.module('app', ['champions', 'allChampions', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'main.html'
  })
  .when('/tracker', {
    templateUrl: 'champions/champions.html',
    controller: 'ChampionsController'
  })
  .when('/allChampions', {
    templateUrl: 'allChampions/allChampions.html',
    controller: 'allController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
