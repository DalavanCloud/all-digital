angular.module('all_digital').directive('cardGroupLinks', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      classes: '@'
    },
    templateUrl: 'app/directives/card-group-links/card-group-links.html'
  };
});
