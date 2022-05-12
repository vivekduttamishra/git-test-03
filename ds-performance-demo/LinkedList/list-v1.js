

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

    
    get(index){

        let p=this.first;
        
        for(let i=0; p && i<index;i++){            
                p=p.next;
        }

        if(p)
            return p.value;
        else
            throw new Error(`Invalid Index ${index}`);

    }

    delete(index){

        let p=this.first;
        
        for(let i=0; p && i<index-1;i++){            
                p=p.next;
        }

        if(!p)
            throw new Error(`Invalid Index ${index}`);

        //now time to delete
        

    }


    set(index, value){
        let p=this.first;
        
        for(let i=0; p && i<index;i++){            
                p=p.next;
        }

        if(p)
            p.value=value;
        else
            throw new Error(`Invalid Index ${index}`);
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