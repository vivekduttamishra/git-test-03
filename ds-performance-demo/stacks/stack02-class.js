
class DynamicStack{

    constructor(){
        this._collection=[];
    }

    push(value){
        this._collection.push(value);
    }

    get isEmpty(){
        return this._collection.length===0;
    }

    pop(){
        if(this.isEmpty)
            throw new Error('Stack Underflow');
        return this._collection.pop();
    }

    toString(){
        var str='DynamicStack( ';
        for(let value of this._collection)
            str=`${str}\t${value}`;
        return str+'\t)';
    }
}

var stack=new DynamicStack();

console.log(`${stack}`);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(`${stack}`);

while(!stack.isEmpty)
    console.log('stack.pop()',stack.pop());

console.log('stack.pop()',stack.pop());

    
