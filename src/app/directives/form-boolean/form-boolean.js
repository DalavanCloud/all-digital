angular.module('all_digital').directive('formBoolean', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      classes: '@',
      inputId: '@',
      label: '@'
    },
    templateUrl: 'app/directives/form-boolean/form-boolean.html'
  };
});
