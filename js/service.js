angular.module('noserv').service('service', function(){

    var data = [
{
    species:'',
    strengths:'',
    weakness:'',
    family:'',
    habitat:''
    
},
{
    species:'',
    strengths:'',
    weakness:'',
    family:'',
    habitat:''
    
}



    ]


this.getData = function(){
    return data;
}

})