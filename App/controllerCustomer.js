onboardapp.controller('Customer', function ($scope, $uibModal) {


    $scope.show = function () {
        debugger;
        alert('u have clicked the show button');
        $scope.test = "test1212121333";
                var myModal = $uibModal.open({
            templateUrl: '/Content/modal/testmodal.html',           
            controller: 'ModalInstanceCtrl',
            resolve: {
                test: function () {
                    return $scope.test;
                },               
            }
        });


    }

    $scope.showsameController = function () {
        debugger;
        alert('u have clicked the show button');
        $scope.test = "test1212121333";
        var myModal = $uibModal.open({
            templateUrl: '/Content/modal/testmodal.html',
            controller: 'Customer',
            scope: $scope
        });


    }


});

onboardapp.controller('ModalInstanceCtrl', function ($uibModalInstance, test, $scope) {
   
    $scope.test = test;

    $scope.save = function () {

        $uibModalInstance.close($ctrl.selected.x);
      

    };

    $scope.cancel = function () {
        debugger;
        $uibModalInstance.dismiss();
        location.reload();
    };


});
