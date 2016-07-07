 'use strict';

angular.module('springbootdemoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-springbootdemoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-springbootdemoApp-params')});
                }
                return response;
            },
        };
    });