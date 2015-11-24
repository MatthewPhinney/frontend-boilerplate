'use strict';
var RippleBinaryCode = require('ripple-binary-codec');

angular
  .module('app')
  .controller('AppController', AppController);

AppController.$inject = ['$rootScope', '$scope'];

function AppController ($rootScope, $scope) {
  $scope.parseTxn = function() {
    try {
      var txJSON = RippleBinaryCode.decode($scope.txBlob);
      console.log(txJSON);
      $scope.txJSON = JSON.stringify(txJSON, null, 2);
    } catch(e) {
      console.log('Caught error: ', e);
      $scope.parseError = true;
    }
  };

  $scope.reset = function() {
    $scope.txBlob = '';
    $scope.txJSON = '';
    $scope.parseError = false;
  };
}
