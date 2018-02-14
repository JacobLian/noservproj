angular.module('noserv').service('service', function($http){
        var animals = [{
                'species':'Rhinoceros',
                'strengths':'Strengths: Extremely strong hearing and sense of smell',
                'weakness':'Weakness: Very poor eyesight nearly blind',
                'family':'Family: Rhinos travel alone unless it is mating season',
                'habitat':'Habitat: Generally live in grassy areas or wide open Savannas',
                'video': 'https://www.youtube.com/embed/R02QrS2aCDM'
            },{
                'species':'Wild Boar',
                'strengths':'Strengths: Boars are suprisingly good swimmers and great at hiding',
                'weakness':'Weakness: Extremely slow runners and must rely on brush and trees to hide',
                'family':'Family: Wild boars are often found in packs as they mate alot and provide for their offspring',
                'habitat':'Habitat: Boars will rarely come out in the open, they dwell mainly in mountains or foresty areas',
                'video':'https://www.youtube.com/embed/-CFtIKfYDv0'
            },{
                'species':'Gorilla',
                'strengths':'Strengths: Gorillas\'s muscles and skeleton are extremely robust and are able to soak up alot of pain before injury',
                'weakness':'Weakness: Females are only able to produce 3 or 4 offspring in their lifetime leading to low population and difficulty to bounce back',
                'family':'Family: Gorillas live in groups called troops. One male multiple female mates and the offspring',
                'habitat':'Habitat: Mountain Gorillas dwell in volcanic areas with high vegetation. Lowland Gorillas live in forests',
                'video':''
            },{
                'species':'Crocodile',
                'strengths':'Strengths: Crocodiles have webbed feet which, allow them to make swift turns and sudden moves to attack prey',
                'weakness':'Weakness: Females are only able to produce 3 or 4 offspring in their lifetime leading to low population and difficulty to bounce back',
                'family':'Family: Gorillas live in groups called troops. One male multiple female mates and the offspring',
                'habitat':'Habitat: Mountain Gorillas dwell in volcanic areas with high vegetation. Lowland Gorillas live in forests',
                'video':''
            }
            ]
//     var animals = [
//         {
//     'species':'Orszarvú',
//     'strengths':'Erőségek: kiváló hallás és szaglás',
//     'weakness':'Gyengeségek: viszonzlag gyenge látásúak',
//     'family':'Utazás: Főleg magányosan találhatóak meg, társaságban csak párosodás alkalmával',
//     'habitat':'Élőhely: Füves területeken és nyílt szavannákon',
//     'video': 'https://www.youtube.com/embed/R02QrS2aCDM'
// },{
//     'species':'Vaddisznó',
//     'strengths':'Erőségek: Jól úsznak',
//     'weakness':'Gyengeségek: Többnyire lassú ügetéssel szaladnak',
//     'family':'Utazás: A vaddisznó családi közösségekben, csapatokban jár, ezt kondának nevezzük',
//     'habitat':'Élőhely: Csak a minden búvóhely nélküli, teljesen nyílt területeket és a hegyek magas részeit kerülik.',
//     'video':'https://www.youtube.com/embed/-CFtIKfYDv0'
// }];
var facts = [
    'Gorillas can catch human colds and other illnesses',
    'Ostriches can run faster than horses, and the males can roar like lions', 
    'A lion in the wild usually makes no more than twenty kills a year.',
    'Female lions do 90% of the hunting!',
    'There are 50,000 spiders per acre in green areas',
    'Bats are the only mammals who can fly',
    'Bat leg bones are so thin that no bat can walk',
    'Cows can sleep standing up, but they can only dream laying down',
    'Aligators can live up to 100 years',
    'An elephant tooth can weigh up to 9 pounds',
    'Ants never sleep and don\'t have lungs',
    'One cow gives off enough methane gas in a single day to fill 400 liter bottles',
    'At birth, baby kangaroos are only about an inch long',
    'Blue whales weigh as much as 300 elephants',
    'Cats have 32 muscles in each ear',
    'Baby horses can walk and run after just a few hours of being born',
    'Komodo dragons can run up to 11 miles an hour in short bursts',
    'Spectacled bears are the only wild bear species in South America',
    'An elephant can smell water up to 3 miles away',
    'If you cut off a snail\'s eye, it will grow a new one',
    'On average, cows poop 16 times per day',
    'Deer can\'t eat hay',
    'No tigers ever have the same stripes, and this is how individual tigers can be identified',
    'Oysters can change from one gender to another and back again depending on which is best for mating',
    'Squirrels cannot see the  color red',
    'A starving mouse will eat its own tail',
    'Only 5 to 10 recent of cheeetah cubs make it to adulthood',
    'Ferets sleep around 20 hours a day',
    'Sharks have been aroound longer than dinosaurs',
    'Aligators cannot move backwards',
    'Shark corneas are being used in human eye transplants',
    'There are currently over a million animal species upon planet earth',
    'The crocodile\'s tongue is unmovable, as it is attached to the roof of its mouth',
    'The Tyrannosaurus Rex went extinct 65 million years ago',
    'The color red doesn\'t make bulls angry; they are color-blind',
    'The oldest recorded elephant lived for 82 years',
    'There are over 2700 types of snakes in the world and they live in deserts, forests, oceans, streams, lakes',
    'An adult lion\'s roar is so loud; it can be heard up to five miles away',
    'Crocodiles eat stones',
    'A male gorilla can eat 40 pounds of food a day',
    'There is no record of a human being attacked by a healthy wolf',
    'Hyenas regulary eat the faces of other animals',
    'A giraffe has the same number of bones in its neck as a man'

];
this.getAnimals = function(){
    return animals;
}
this.getFacts = function(){
    return facts;
}
})