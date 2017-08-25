angular.module('all_digital').controller('GlobalController', [
  '$scope',
  '$route',
  '$document',
  function ($scope, $route, $document) {
    'use strict';

    $scope.toggleAppClass = function (className) {
      var pageSections = document.querySelectorAll('#page-main .page-section');
      angular.element(pageSections).removeClass('ui-dark ui-blue ui-light ui-grey');
      angular.element(pageSections).addClass(className);
    };

    $scope.toggleAppClass('ui-grey');

  }]);
