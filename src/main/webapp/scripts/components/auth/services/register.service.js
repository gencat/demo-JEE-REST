'use strict';

angular.module('springbootdemoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


