angular.module('noserv').controller('ctrl', function($scope, service){

        
        $scope.animals = service.getAnimals();
        $scope.video = function(vid){
                document.getElementById('videoPlayer').setAttribute('src', vid);
        }
        $scope.facts = function(){
                var info = service.getFacts();
                var a = document.getElementById('fact1')
                var b = document.getElementById('fact2')
                var c = document.getElementById('fact3')
                roll();
                function roll(){
                        var randomNum1 = Math.floor(Math.random() * (info.length));
                        var randomNum2 = Math.floor(Math.random() * (info.length));
                        var randomNum3 = Math.floor(Math.random() * (info.length));
                        a.innerHTML = info[randomNum1];
                        b.innerHTML = info[randomNum2];
                        c.innerHTML = info[randomNum3];
                        rollAgain();
                        function rollAgain(){
                                if(randomNum1 == randomNum2 || randomNum2 == randomNum3 || randomNum1 == randomNum3){
                                        roll();
                                }
                        }
                }
        }

        // $scope.info = service.getInfo().then(function(response){
        //         console.log(response);
        // })

});