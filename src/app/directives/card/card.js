angular.module('all_digital').directive('card', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      classes: '@',
      hasDate: '@',
      hasAction: '@',
      hasMedia: '@'
    },
    templateUrl: 'app/directives/card/card.html'
  };
});
