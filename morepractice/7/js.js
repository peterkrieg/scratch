// Copied and pasted this animals array from something I saw from devmountain on slack.  
// Wrote returnAnimals function myself

var animals = [
{
    name: 'Dog',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Carnivora',
    family: 'Canidae',
    species: 'Canis lupus'
},
{
    name: 'Cat',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Carnivora',
    family: 'Felidae',
    species: 'Felis catus'
},
{
    name: 'Hippopotamus',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Artiodactyla',
    family: 'Hippopotamidae',
    species: 'Hippopotamus amphibius'
},
{
    name: 'Playtpus',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Monotremata',
    family: 'Ornithorhynchidae',
    species: 'Ornithorhynchus anatinus'
},
{
    name: 'Lizard',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Reptilia',
    order: 'Squamata',
    family: 'Agamidae',
    species: 'Pogona vitticeps'
},
{
    name: 'Blackbird',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Aves',
    order: 'Passeriformes',
    family: 'Turdidae',
    species: 'Turdus merula'
}
];

//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}


function returnAnimals(){
    var animalCount = {
        name: {},
        kingdom: {},
        phylum: {},
        class: {},
        order: {},
        family: {},
        species: {}
    };
    for(var i = 0; i<animals.length; i++){
        for(var prop in animals[i]){
            var name = animals[i][prop];
            var currentObj = animalCount[prop];
            if(currentObj.hasOwnProperty(name)){
                currentObj[name]++;
            }
            else{
                currentObj[name]=1;
            }
        }
    }
    console.log(animalCount);
}


returnAnimals();




