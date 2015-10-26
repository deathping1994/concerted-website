'use strict';

/**
 * @ngdoc function
 * @name concertedWebsiteApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the concertedWebsiteApp
 */
angular.module('concertedWebsiteApp')
  .controller('NewsCtrl', function ($scope,$http) {
    $scope.postlist;
    $http.get("./news/newslist.json").then(function(res){
      $scope.postlist=res.data;
    });
  });
