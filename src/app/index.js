'use strict';

angular.module('mdm', ['restangular', 'ui.router', 'mgcrea.ngStrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
        })
        .state('login', {
            url: '/login',
            template: 'app/account/login.html',
            controller: 'LoginCtrl'
        })
        .state('user', {
            url: '/user',
            template: 'app/user/user.html',
            controller: 'UserCtrl'
        });

    $urlRouterProvider.otherwise('/');
  })
;
