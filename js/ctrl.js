angular.module('noserv').controller('ctrl', function($scope, service){

        
        $scope.animals = service.getAnimals()
        $scope.fact1 = service.getFact1();
        $scope.fact2 = service.getFact2();
        // $scope.getFact = service.getFact();
        // $scope.info = service.getInfo().then(function(response){
        //         console.log(response);
        // })
});