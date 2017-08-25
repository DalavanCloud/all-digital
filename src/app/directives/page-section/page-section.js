angular.module('all_digital').directive('pageSection', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      classes: '@',
      css: '@'
    },
    templateUrl: 'app/directives/page-section/page-section.html'
  };
});
