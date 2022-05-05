
//javascript array has basic stack functionality


var stack = [] ;  //we have an empty stack.

stack.push(20);
stack.push(40);
stack.push(80);

console.log(stack);

console.log('stack.length',stack.length);

while(stack.length > 0) {
    console.log('stack.pop()',stack.pop());    
}
console.log('stack',stack);

console.log('stack.pop()',stack.pop()); //javascript doesn't throw exception when we pop from empty array.


//why javascript array is not a stack despite having push and pop.
stack.push(10);
stack.push(20);
stack.push(30);
console.log('stack',stack);

console.log('stack.splice(1,1)',stack.splice(1,1));

console.log('stack',stack);  //we can remove the middle items also



