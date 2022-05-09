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

const testQueue=(size, insertCount, removeCount)=>{

    let q= new Queue(size);
    let U= [2,3,9,11,4,15,12,8,7,6,8,4,2,14,11,8];

    try{
        for(let i=0;i<insertCount;i++){
            q.enqueue(U[i]);
            console.log(`inserted ${U[i]}\t${q}`);
        }
    }catch(e){
        console.error(e.message);
    }
    
    try{
        for(let i=0;i<removeCount;i++){
            var v=q.dequeue();
            console.log(`removed ${v}\t${q}`);
        }
    }catch(e){
        console.error(e.message);
    }    

}

//testQueue(10, 8, 4);

//testQueue(5,8,4);

//testQueue(5,4,8);


