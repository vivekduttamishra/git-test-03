

class Node{
    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class LinkedList{

    constructor(...values){
        this._first=null; //list is empty
        this._last=null;
        this.add(...values);
    }

    get isEmpty(){ return this._first==null; }

    add(...values){
        for(let value of values)
            this._add(value);
    }

    _add(value){
        var node=new Node(value);

        if(this.isEmpty){
            this._first=node;
            this._last=node;
            return ;
        }

        this._last.next=node; //add new item as next of last
        this._last=node; //make new item as the last
    }

    
    _locate(index){
        let node=this._first;
        
        for(let i=0; node && i<index;i++){            
                node=node.next;
        }

        if(node)
            return node;
        else
            throw new Error(`Invalid Index ${index}`);
    }


    get(index){
       return this._locate(index).value;
    }

    
    set(index, value){
        this._locate(index).value=value;
    }

    delete(index){

       if(this.isEmpty) 
            throw new Error(`Invalid Index ${index}`);

        if(index===0){
            this._first=this._first.next;
            return ;
        }

        //for all other items
        let previous= this._locate(index-1); //I want previous node of what I want to deleted
        let delNode= previous.next; //this is the node I want to delte

        //I have to update the address of previous node 
        previous.next= delNode.next; 

        //delete successful.


    }




    get length(){ 
        let i=0;
        let p=this._first;
        while(p){
            p=p.next;
            i++;
        }
        return i;
        
    }


    toString(){
        let str='LinkedList(\t';
        for(let n=this._first; n!=null;n=n.next) 
            str=`${str}${n.value}\t`;

        str+=")";
        return str;
    }
}

module.exports=LinkedList;