class Queue{
    constructor(size){
        this.size=size;
        this.array=[];
        this.array[size-1]=null; //create an array [undefined,undefined,..., null];
        
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


        let v= this.array[0]; //return current item and increment front
        //move each item one space to left
        for(let i=1;i<this.rear;i++){
            this.array[i-1]=this.array[i]; 
        }
        this.rear--;
        return v;
    }

    get isFull(){
        return this.rear===this.size;
    }

    get isEmpty(){
        return this.rear===0;
    }

    toString(){
        let str='Queue(';

        for(let i=0;i<this.rear;i++)
            str+=`${this.array[i]}\t`;

        str+="\t)";

        return str;
    }
}

var q= new Queue(5);


for(let i=0;i<5;i++)
    q.enqueue(i);

console.log('after enqueue',q, q.toString());


for(let i=0;i<5;i++)
    q.dequeue(); 

console.log('after dqueue',q,q.toString());

console.log('q.isEmpty',q.isEmpty);

q.enqueue(10); //i am inserting in an empty queue. I should be able to add.

console.log('after enqueue(10)',q, q.toString());

