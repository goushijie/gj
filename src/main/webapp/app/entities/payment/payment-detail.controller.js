(function() {
    'use strict';

    angular
        .module('gjApp')
        .controller('PaymentDetailController', PaymentDetailController);

    PaymentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Payment', 'Household'];

    function PaymentDetailController($scope, $rootScope, $stateParams, entity, Payment, Household) {
        var vm = this;

        vm.payment = entity;

        var unsubscribe = $rootScope.$on('gjApp:paymentUpdate', function(event, result) {
            vm.payment = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
