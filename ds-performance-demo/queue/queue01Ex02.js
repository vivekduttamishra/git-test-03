class Queue{
    constructor(size){
        this.size=size;
        this.array=[];
        this.array[size-1]=null; //create an array [undefined,undefined,..., null];
        this.front=0;
        this.rear=0;        
    }

    enqueue(value){
        if(this.isFull)
            throw new Error("Queue Overflow");

        this.array[this.rear++]=value; //value assigned to current rear and then rear increemnt
        
    }

    dequeue(value){
        if(this.isEmpty)
            throw new Error("Queue Underflow");

        return this.array[this.front++]; //return current item and increment front
        
    }

    get isFull(){
        return this.rear===this.size;
    }

    get isEmpty(){
        return this.rear===this.front;
    }

    toString(){
        let str='Queue(';

        for(let i=this.front;i<this.rear;i++)
            str+=`${this.array[i]}\t`;

        str+="\t)";

        return str;
    }
}

var q= new Queue(5);


for(let i=0;i<5;i++)
    q.enqueue(i);

console.log('q',q);


for(let i=0;i<5;i++)
    q.dequeue(); 

console.log('q',q);

console.log('q.isEmpty',q.isEmpty);

q.enqueue(10); //i am inserting in an empty queue. I should be able to add.
