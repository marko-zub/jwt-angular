/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('public')
    .constant('malarkey', malarkey)
    .constant('CONFIG', {
      baseUrl: 'http://localhost:9000'
    })
    .constant('moment', moment);

})();