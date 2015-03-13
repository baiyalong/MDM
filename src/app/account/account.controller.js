/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdm')
    .controller('LoginCtrl', function ($scope) {

        $scope.account = {userName: 'Admin', passWord: '123', rememberMe: 'true'};

    });
