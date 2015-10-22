'use strict';

/**
 * @ngdoc function
 * @name concertedWebsiteApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the concertedWebsiteApp
 */
angular.module('concertedWebsiteApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.postlist=['news/README.md','news/blog.md'];
  });
