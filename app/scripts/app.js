'use strict';

/**
 * @ngdoc overview
 * @name concertedWebsiteApp
 * @description
 * # concertedWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('concertedWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'gsmarkdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl',
        // controllerAs: 'main',
        // title: "Concerted|Home"
      })
      .when('/docs', {
        templateUrl: 'views/docs.html',
        // controller: 'DocsCtrl',
        // controllerAs: 'docs',
        // title: "Concerted|Documentation"
      })
      .when('/releases', {
        templateUrl: 'views/releases.html',
        controller: 'ReleasesCtrl',
        controllerAs: 'releases',
        // title: "Concerted|Releases"
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'PostsCtrl',
        // title: "Concerted|News"
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl',
        controllerAs: 'contribute',
        // title: "Concerted|Get Involved"
      })
      .when('/news/:year', {
        templateUrl: 'views/news.html',
        controller: 'YearlyCtrl'
        // controllerAs: 'yaer',
        // title: "Concerted|Get Involved"
      })
      .when('/pages/:type/:year/:month/:date/:title', {
        templateUrl: 'views/post.html',
        controller: 'OnepostCtrl'
        // controllerAs: 'yaer',
        // title: "Concerted|Get Involved"
      })
      .when('/markdown-pages/:folder/:name', {
        resolve: {
        check: ["$route", "$http", "$location", function($route, $http, $location){
        return $http.get($route.current.params.folder +"/"+$route.current.params.name).success(function(res){
        return true;
        }).error(function(res){
        return $location.path("/404");
        });
        }]
        },
        templateUrl: 'views/page.html',
        controller: 'MarkdownPagesCtrl'

        // controllerAs: 'yaer',
        // title: "Concerted|Get Involved"
      })
      .when('/404', {
        templateUrl: '/404.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
