(function() {
    'use strict';

    angular
        .module('gjApp')
        .controller('OwnerDetailController', OwnerDetailController);

    OwnerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Owner', 'Household'];

    function OwnerDetailController($scope, $rootScope, $stateParams, entity, Owner, Household) {
        var vm = this;

        vm.owner = entity;

        var unsubscribe = $rootScope.$on('gjApp:ownerUpdate', function(event, result) {
            vm.owner = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
