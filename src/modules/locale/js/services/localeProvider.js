'use strict';

var localeProvider = function ($translateProvider) {

	var languages = [
		'es-MX',
		'en-US'
	];

	var defaultLanguage = languages[0];

	this.getDefaultLaguage = function(){
		return defaultLanguage;
	};

	this.getLanguages = function() {
		return languages;
	};

	this.init = function(translates){
		for(var i = 0; i < translates.keys().length; i++){
			$translateProvider.translations(translates(translates.keys()[i]).language, translates(translates.keys()[i]).translate);
		}
		$translateProvider.preferredLanguage(this.getDefaultLaguage());
		$translateProvider.useSanitizeValueStrategy('sanitize');
	};

	this.$get = function () {
		return {
			getDefaultLaguage: this.getDefaultLaguage,
			getLanguages     : this.getLanguages
		};
	};
};

module.exports = require('../../main').provider('locale', localeProvider);