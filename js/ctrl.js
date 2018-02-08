angular.module('noserv').controller('ctrl', function($scope, service){

        
        $scope.animals = service.getAnimals();
        $scope.facts = function(){
                var info = service.getFacts();
                var a = document.getElementById('fact1')
                var b = document.getElementById('fact2')
                roll();
                function roll(){
                        var randomNum1 = Math.floor(Math.random() * (info.length));
                        var randomNum2 = Math.floor(Math.random() * (info.length));
                        a.innerHTML = info[randomNum1];
                        b.innerHTML = info[randomNum2];
                        rollAgain();
                        function rollAgain(){
                                if(a.innerHTML == b.innerHTML){
                                        roll();
                                }
                        }
                }
        }

        // $scope.info = service.getInfo().then(function(response){
        //         console.log(response);
        // })

});