'use strict';

angular.module ('ark_explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('kapu_explorer-currency') || 'KAPU';

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('kapu_explorer-currency', currency);
      }
    };
  });
