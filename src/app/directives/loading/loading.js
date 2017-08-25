angular.module('all_digital').directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/loading/loading.html'
  };
});
