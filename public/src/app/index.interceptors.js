(function() {
  'use strict';

  angular
    .module('jwtNg')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push(appInterceptor);
    });

  function appInterceptor($injector, $log) {
    return {
      request: function(config) {
        $log.log(config);
        return config;
      },
      responseError: function(rejection) {
        var MsgService = $injector.get('MsgService');
        $log.log('Rejection: ', rejection);
        if (rejection.status === -1) {
          MsgService.error('Server error');
        } else if (rejection.status === 401 || rejection.status === 400) {
          MsgService.error(rejection.data);
        }
        return rejection;
      }
    }
  }

})();