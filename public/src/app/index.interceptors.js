(function() {
  'use strict';

  angular
    .module('public')
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push(appInterceptor);
    }]);

  function appInterceptor($injector, $log) {
    return {
      request: function(config) {
        $log.log(config);
        return config;
      },
      responseError: function(rejection) {
        $log.log('Rejection: ', rejection);
        if (rejection.status === -1) {
          var MsgService = $injector.get('MsgService');
          MsgService.error('Server error');
        } else if(rejection.status === 401 || rejection.status === 400) {
          var MsgService = $injector.get('MsgService');
          MsgService.error(rejection.data);
        }
        return rejection;
      }
    }
  }

})();