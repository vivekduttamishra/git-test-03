var LinkedList = require('./list');


var list=new LinkedList(14,29,11,8,2);

list.add(5,12,7,11,8);

//console.log(`List: ${list}`);

console.log('list.length',list.length);

for(let i=0;i<list.length;i++){
    let x= list.get(i);
    console.log(x);
    list.set(i,x*10);
}
console.log('list',list.toString());

console.log('list.get(100)',list.get(100));


