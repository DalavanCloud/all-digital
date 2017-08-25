angular.module('all_digital').config([
  '$routeProvider',
  function ($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: 'app/templates/home.html'
    });

    $routeProvider.when('/fonts', {
      templateUrl: 'app/templates/fonts.html'
    });

    $routeProvider.when('/conventions', {
      templateUrl: 'app/templates/conventions.html'
    });

    // BASE

    $routeProvider.when('/base', {
      templateUrl: 'app/templates/base.html'
    });

    $routeProvider.when('/base/typography', {
      templateUrl: 'app/templates/base/typography.html'
    });

    $routeProvider.when('/base/kitchen-sink', {
      templateUrl: 'app/templates/base/kitchen-sink.html'
    });

    $routeProvider.when('/base/forms', {
      templateUrl: 'app/templates/base/forms.html'
    });

    $routeProvider.when('/base/links', {
      templateUrl: 'app/templates/base/links.html'
    });

    $routeProvider.when('/base/headings', {
      templateUrl: 'app/templates/base/headings.html'
    });

    // COMPONENTS

    $routeProvider.when('/components', {
      templateUrl: 'app/templates/components.html'
    });

    $routeProvider.when('/components/actions', {
      templateUrl: 'app/templates/components/action.html'
    });

    $routeProvider.when('/components/page-section', {
      templateUrl: 'app/templates/components/page-section.html'
    });

    $routeProvider.when('/components/card', {
      templateUrl: 'app/templates/components/card.html'
    });

    $routeProvider.when('/components/card-group', {
      templateUrl: 'app/templates/components/card-group.html'
    });

    $routeProvider.when('/components/buttons', {
      templateUrl: 'app/templates/components/button.html'
    });

    $routeProvider.when('/components/badges', {
      templateUrl: 'app/templates/components/badge.html'
    });

    $routeProvider.when('/components/form-control', {
      templateUrl: 'app/templates/components/form-control.html'
    });

    $routeProvider.when('/components/form-boolean', {
      templateUrl: 'app/templates/components/form-boolean.html'
    });

    $routeProvider.when('/components/loading', {
      templateUrl: 'app/templates/components/loading.html'
    });

    $routeProvider.when('/components/link-group', {
      templateUrl: 'app/templates/components/link-group.html'
    });

    $routeProvider.when('/context-help', {
      templateUrl: 'app/templates/context-help.html',
      controller: 'ContextHelpController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
