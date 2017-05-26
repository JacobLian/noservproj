angular.module('noserv').controller('ctrl', function($scope, service){

$scope.getData = service.getData()

})