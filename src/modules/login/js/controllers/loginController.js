'use strict';

/**
 * @ngdoc controller
 * @name app.login.controller:loginCtrl
 * @description 
 * Controller for the handle to authentication page
 * @param {undefinided} this This function does not get parameters yet.
 * @returns {undefinided} This function does not return values.
 */

var loginCtrl = function($scope, $location) {
    $scope.validateLogin = function() {
        $location.path("/principal");
    }
};

module.exports = require('../../main').controller('loginCtrl', loginCtrl);