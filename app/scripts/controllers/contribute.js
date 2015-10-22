'use strict';

/**
 * @ngdoc function
 * @name concertedWebsiteApp.controller:ContributeCtrl
 * @description
 * # ContributeCtrl
 * Controller of the concertedWebsiteApp
 */
angular.module('concertedWebsiteApp')
  .controller('ContributeCtrl', function ($scope) {
    $scope.members = [
      {name:"Jake Ferral",
      apacheid:"jfarrell",
      role: "Mentor"
      },
      {name:"Julian Hyde",
      apacheid:"jhyde",
      github_handle:"julianhyde",
      role: "Mentor"
      },
      {name:"Roman Shaposhnik",
      apacheid:"rvs",
      role: "Champion"
      }

    ];
  });
