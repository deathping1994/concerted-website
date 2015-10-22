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
        controller: 'NewsCtrl',
        controllerAs: 'news'
        // title: "Concerted|News"
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl',
        controllerAs: 'contribute',
        // title: "Concerted|Get Involved"
      })
      .otherwise({
        redirectTo: '/'
      });
  });
