(function() {
  'use strict';

  angular
    .module('public')
    .config(appInterceptorConfig);

  function appInterceptorConfig($httpProvider) {
    $httpProvider.interceptors.push(appInterceptor);
  }

  function appInterceptor($log) {
    return {
      request: function(config) {
        $log.log(config);
        return config;
      },
      responseError: function(rejection) {
        $log.log('Rejection: ', rejection);
        if (rejection.status === -1) {
          $log.log('Server error');
        }
        return rejection;
      }
    }
  }

})();