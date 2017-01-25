var angular = require('angular');

module.exports = angular.module('app.login', [
    require('angular-route'),
    require('angular-sanitize'),
    require('angular-translate')
]).config(['$routeProvider', '$translateProvider', 'localeProvider', function($routeProvider, $translateProvider, localeProvider) {

    /***** i18n Configuration *****/
    localeProvider.init(require.context('./i18n/', false, /.js$/));
    /***** i18n Configuration *****/

    $routeProvider.when('/login', {
        template: require('./views/login.html'),
        controller: require('./js/controllers/loginController').name
    });

}]);


//var loadFiles = require.context('./js', true, /.js$/);
//for (var i = 0; i < loadFiles.keys().length; i++) {
//    loadFiles(loadFiles.keys()[i]);
//}