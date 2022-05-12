var LinkedList = require('./list-v2');


var list=new LinkedList();

let start=new Date();

for(let i=0;i<100000;i++)
    list.add(i);

let end=new Date();

console.log(`total time taken is ${end-start} ms`);


