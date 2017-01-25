var angular = require('angular');

/**
 * @ngdoc overview
 * @name app
 * @requires angular-route
 * @requires angular-sanitize
 * @requires angular-translate
 * @description
 * This is the aplication's main module.
 * Additionally this module depens from the all modules contained in the /src/modules path.
 */

var app = angular.module('app', [
    require('angular-route'),
    require('angular-sanitize'),
    require('angular-translate')
].concat(getModuleDependencies()));

app.config(['$translateProvider',
    '$routeProvider',
    '$locationProvider',
    'localeProvider',
    function(
        $translateProvider,
        $routeProvider,
        $locationProvider,
        localeProvider
    ) {

        /***** i18n Configuration *****/
        localeProvider.init(require.context('./i18n/', false, /.js$/));
        /***** i18n Configuration *****/

        /***** routes Configuration *****/
        //$locationProvider.hashPrefix('!');
        $routeProvider.otherwise({ redirectTo: '/login' });

    }
]);

/**
 * @ngdoc function
 * @name getModuleDependencies
 * @methodOf app
 * @description
 * Descripción del metodo
 * @param {undefined} This function does not get parameters.
 * @returns {undefined} It doesn't return
 */

function getModuleDependencies() {
    var moduleDep = [];
    var loadModules = require.context('./modules', true, /main.js$/);
    for (var i = 0; i < loadModules.keys().length; i++) {
        moduleDep.push(loadModules(loadModules.keys()[i]).name);
    }
    return moduleDep;
}

require('./css/index.less');
require('./css/index.scss');