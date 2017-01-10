(function() {
  'use strict';

  angular
    .module('jwtNg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $log, $rootScope) {

    $log.debug('runBlock end');

    var bodyClass = 'jwt-ng-body';
    $rootScope.bodyClass = bodyClass;

    $rootScope.$on('$stateChangeSuccess', function($state, $stateParams) {
      if (angular.isDefined($stateParams.data)) {
        $rootScope.bodyClass = bodyClass + ' ' + $stateParams.name + ' ' + $stateParams.data.bodyClass;
      } else {
        $rootScope.bodyClass = bodyClass;
      }
    });

  }

})();
