angular.module('all_digital').directive('cardGroup', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      classes: '@'
    },
    templateUrl: 'app/directives/card-group/card-group.html'
  };
});
