'use strict';

angular.module('springbootdemoApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
