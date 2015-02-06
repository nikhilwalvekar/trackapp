'use strict';

angular.module('trackApp', ['ngAnimate', 'ngCookies', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'MainCtrl'
      })
	  .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope){
  	$rootScope.$on('$stateChangeStart', 
		function(event, toState) {
			if (dataLayer) {
				dataLayer.push({
				  'event':'pageview',
				  'virtualUrl':toState.url 
				});
				console.log(dataLayer);
			}
		}
	);
  });
;
