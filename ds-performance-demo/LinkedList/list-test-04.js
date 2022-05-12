var LinkedList = require('./list');


var list=new LinkedList(14,29,11,8,2);

list.delete(2); //delete 11

console.log('list',list.toString());

list.delete(0); //delete 14

console.log('list',list.toString());

list.delete(2); //2

console.log('list',list.toString());

list.delete(5); //should throw exception