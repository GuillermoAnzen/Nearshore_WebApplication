'use strict';

/**
 * @ngdoc service
 * @name app.locale.service:localeService
 * @param {Object} $translate Module that contain a reference to the languages.
 * @description 
 * Service that change the language in the application.
 * @returns {File} The file which to will use in the application. 
 */

var localeService = function($translate) {

    /**
     * @ngdoc function
     * @name app.locale.function:useLanguaje
     * @description This function get the default language. 
     * @param {null} this This function does not get parameters.
     * @returns {String} Return the default language.
     */
    this.useLanguage = function(language) {
        $translate.use(language);
    };

    return {
        useLanguage: this.useLanguage
    };
};

module.exports = require('../../main').service('localeService', localeService);