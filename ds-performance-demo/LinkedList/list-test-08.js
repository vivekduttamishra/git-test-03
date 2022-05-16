var LinkedList = require('./list-v4');


var list=new LinkedList();

let size=10000000;

for(let i=0;i<size;i++)
    list.add(i);

console.log('all items added...');
let start=new Date();
var length= list.length;
console.log('length',size===length);
let end=new Date();

console.log(`total time taken is ${end-start} ms`);


