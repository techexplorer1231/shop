'use strict';

angular.module('shopApp.auth', [
  'shopApp.constants',
  'shopApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
