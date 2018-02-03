angular.module('noserv').service('service', function($http){

    var animals = [
        {
    'species':'Orszarvú',
    'strengths':'Erőségek: kiváló hallás és szaglás',
    'weakness':'Gyengeségek: viszonzlag gyenge látásúak',
    'family':'Utazás: Főleg magányosan találhatóak meg, társaságban csak párosodás alkalmával',
    'habitat':'Élőhely: Füves területeken és nyílt szavannákon'
    
},{
    'species':'Vaddisznó',
    'strengths':'Erőségek: Jól úsznak',
    'weakness':'Gyengeségek: Többnyire lassú ügetéssel szaladnak',
    'family':'Utazás: A vaddisznó családi közösségekben, csapatokban jár, ezt kondának nevezzük',
    'habitat':'Élőhely: Csak a minden búvóhely nélküli, teljesen nyílt területeket és a hegyek magas részeit kerülik.'
    
}];
var facts = [
    'I like Cats',
    'You like cats',
    'we like cats',
    'they like cats',
    'it likes cats',
    'dogs',
    'money',
    'dig',
    'wow',
    'happy'
];
this.getAnimals = function(){
    return animals;
}
this.getFacts = function(){
    return facts;
}
})