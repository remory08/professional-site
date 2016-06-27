var app = angular.module("professsional-site", ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      })
      .when('/experience', {
        templateUrl: 'partials/experience.html',
        controller: 'ExperienceController'
      })
});
