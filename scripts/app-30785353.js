"use strict";angular.module("trackApp",["ngAnimate","ngCookies","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"MainCtrl"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"MainCtrl"}),t.otherwise("/")}]).run(["$rootScope",function(a){a.$on("$stateChangeStart",function(a,t){dataLayer&&(dataLayer.push({event:"pageview",virtualUrl:t.url}),console.log(dataLayer))})}]),angular.module("trackApp").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("trackApp").controller("MainCtrl",["$scope",function(){}]),angular.module("trackApp").run(["$templateCache",function(a){a.put("app/about/about.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>SPA for GTM testing</h1><p class="lead">Built with<br><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br></p></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>'),a.put("app/contact/contact.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><p class="lead">Nikhil Walvekar</p><p>walvekar@gmail.com</p></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>'),a.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>Hello!</h1><p class="lead">Let\'s try to track activities performed here, in GTM.</p></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> GTM Tracking</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="home">Home</a></li><li ui-sref-active="active"><a ui-sref="about">About</a></li><li ui-sref-active="active"><a ui-sref="contact">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);