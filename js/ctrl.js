angular.module('noserv').controller('ctrl', function($scope, service){

        
        $scope.data = service.getData()
});