
class FixedStack{

    constructor(size){
        this._collection=[];
        this._size=size;
        //lets have fixed size array
        for(let i=0;i<size;i++){
            this._collection.push(null);
        }
        this._top=0; //where next item will go
    }

    push(value){

        if(this.isFull)
            throw new Error("Stack Overflow");

        this._collection[this._top]=value;
        this._top++;
    }

    get isEmpty(){
        return this._top===0;
    }

    get isFull(){
        return this._top>=this._size;
    }

    pop(){
        if(this.isEmpty)
            throw new Error('Stack Underflow');
        this._top--;

        return this._collection[this._top];
    }

    toString(){
        var str='FixedStack( ';
        for(let i=0;i<this._top;i++)
            str=`${str}\t${this._collection[i]}`;
        return str+'\t)';
    }
}


function testStack(stackSize, pushCount, popCount){

    var stack=new FixedStack(stackSize);

    try{
        for(let i=0;i<pushCount;i++)
            stack.push(i);
    }catch(error){
        console.log(error.message)
    }

    console.log(`stack after push: ${stack}`);

    try{
        for(let i=0;i<popCount;i++){
            console.log('stack.pop()',stack.pop());
            
        }
    }catch(e){
        console.log(e.message);
    }

    console.log(`stack after pop: ${stack}`);

    while(!stack.isEmpty){
        console.log(`flushing ${stack.pop()}`);
    }
}

//testStack(10, 8, 4); 

testStack(5, 8, 8);


    
