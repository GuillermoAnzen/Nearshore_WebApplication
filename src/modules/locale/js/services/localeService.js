'use strict';

var localeService = function ($translate) {

	this.useLanguage = function (language) {
		$translate.use(language);
	};

	return {
		useLanguage: this.useLanguage
	};
};

module.exports = require('../../main').service('localeService', localeService);