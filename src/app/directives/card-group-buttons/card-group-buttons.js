angular.module('all_digital').directive('cardGroupButtons', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      classes: '@'
    },
    templateUrl: 'app/directives/card-group-buttons/card-group-buttons.html'
  };
});
