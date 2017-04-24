(function() {
    'use strict';

    function config($logProvider, toastrConfig, $httpProvider, $authProvider, Api) {
        $authProvider.httpInterceptor = function() {
            return true;
        };
        $authProvider.withCredentials = false;
        $authProvider.tokenRoot = null;
        $authProvider.baseUrl = '/';
        $authProvider.loginUrl = Api.URL_API + '/authenticate';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.unlinkUrl = '/auth/unlink/';
        $authProvider.tokenName = 'auth_token';
        $authProvider.tokenPrefix = 'satellizer';
        $authProvider.tokenHeader = 'Authorization';
        $authProvider.tokenType = 'Bearer';
        $authProvider.storageType = 'localStorage';
        // Http interceptor
        $httpProvider.interceptors.push('appInterceptor');
        // Enable log
        $logProvider.debugEnabled(true);
        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = false;
        toastrConfig.progressBar = true;
    }
    angular.module('lcv2').config(['$logProvider', 'toastrConfig', '$httpProvider', '$authProvider', 'Api', config]);
})();