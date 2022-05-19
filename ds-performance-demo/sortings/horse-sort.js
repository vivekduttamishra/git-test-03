
let bubbleSort=require('./bubble-sort');

class Horse{
    constructor(name,racesWon){
        this.name=name;
        this.racesWon=racesWon;
    }
}

let horses=[

    new Horse("Hero",5),
    new Horse('Chetak',8),
    new Horse('Alpha', 4),
    new Horse('Beta',6),
    new Horse('Gama',3)
];


bubbleSort(horses, (h1,h2)=> h2.racesWon>h1.racesWon);

console.log(horses);





