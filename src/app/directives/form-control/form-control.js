angular.module('all_digital').directive('formControl', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      classes: '@',
      inputId: '@',
      label: '@',
      labelClass: '@',
      icon: '@',
      note: '@',
      helper: '@'
    },
    templateUrl: 'app/directives/form-control/form-control.html'
  };
});
