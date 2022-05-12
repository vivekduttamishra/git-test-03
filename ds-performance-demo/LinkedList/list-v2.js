

class Node{
    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class LinkedList{

    constructor(...values){
        this.first=null; //list is empty
        
        this.add(...values);
    }

    get isEmpty(){ return this.first==null; }

    add(...values){
        for(let value of values)
            this._add(value);
    }

    _add(value){
        var node=new Node(value);

        if(this.isEmpty){
            this.first=node;
            return ;
        }

        //for the non-empty list. search for the last node
        for(var p=this.first; p.next!==null; p=p.next)
            ;

        p.next=node;       

    }

    
    _locate(index){
        let node=this.first;
        
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
            this.first=this.first.next;
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
        let p=this.first;
        while(p){
            p=p.next;
            i++;
        }
        return i;
        
    }


    toString(){
        let str='LinkedList(\t';
        for(let n=this.first; n!=null;n=n.next) 
            str=`${str}${n.value}\t`;

        str+=")";
        return str;
    }
}

module.exports=LinkedList;