'use strict';

angular.module('deckApp.pipelines.stage.bake.executionDetails.controller', [
  'ui.router',
  'deckApp.executionDetails.section.service',
  'deckApp.executionDetails.section.nav.directive',
])
  .controller('BakeExecutionDetailsCtrl', function ($scope, $stateParams, executionDetailsSectionService) {

    $scope.configSections = ['bakeConfig', 'taskStatus'];

    function initialize() {
      executionDetailsSectionService.synchronizeSection($scope.configSections);
      $scope.detailsSection = $stateParams.details;

      $scope.provider = $scope.stage.context.cloudProviderType || 'aws';
    }

    initialize();

    $scope.$on('$stateChangeSuccess', initialize, true);

  });
