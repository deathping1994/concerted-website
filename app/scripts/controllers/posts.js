'use strict';

/**
 * @ngdoc function
 * @name concertedWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concertedWebsiteApp
 */
angular.module('concertedWebsiteApp')
  .controller('PostsCtrl', function ($scope,$http) {
    $scope.postlist;
    $scope.archive;
    var loadlist= function(){
    $http.get("../../news/list.json").then(function(res){
    	$scope.postlist=res.data;
    	$scope.$parent.postlist=res.data;
    });
	};
	loadlist();
	var loadarchive= function(){
    $http.get("../../news/archive.json").then(function(res){
    	$scope.archive=res.data;
    });
	};
	loadarchive();
  })
  .controller('OnepostCtrl', function ($scope,$routeParams,$http) {
    var url=$routeParams.type+"/"
    +$routeParams.year+"-"+$routeParams.month+"-"+$routeParams.date+"-"
    +$routeParams.title.replace(/ /g,"_")+".md";
    console.log(url);
    $scope.posturl=url;
  })
  .controller('YearlyCtrl', function ($scope,$routeParams,$http) {
    	var year=$routeParams.year;
    	$scope.archive={};
    var loadlist= function(){
    	console.log(year);
    $http.get("../../news/archive.json").then(function(res){
    	$scope.postlist=res.data[year];
    	console.log($scope.postlist);
    });
	};
	loadlist();
	var loadarchive= function(){
    $http.get("../../news/archive.json").then(function(res){
    	$scope.archive[year]=res.data[year];
    	console.log($scope.archive);
    	$scope.$parent.archive=res.data;
    });
	};
	loadarchive();
  });
