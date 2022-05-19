let BinaryTree=require('./binary-search-tree/tree');

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


let tree=new BinaryTree( (h1,h2)=> h2.racesWon-h1.racesWon);

tree.insert(...horses);

let sortedHorses=[]

tree.inorder(h=>sortedHorses.push(h));

console.log('sortedHorses',sortedHorses);

