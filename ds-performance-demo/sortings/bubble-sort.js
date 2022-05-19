const swap=(array, x,y)=>{
    let t=array[x];
    array[x]=array[y];
    array[y]=t;
}

const bubbleSort = (array,isGreater)=>{

    let size= array.length;
    let count=0;
    var sorted=false; //let us assume list is not sorted to begin with

    while(!sorted){

        sorted=true; //let us now assume list is sorted by previous run
        for(let i=0; i < size -1 ; i++){   //loop till second last item
            count++;
           // if( array[i]>array[i+1]){       //because we compare each item to the next
           if(isGreater(array[i], array[i+1])){
                swap(array,i,i+1);
                sorted=false; //assumption is contradicted.
            }
        }
        //now highest item is sorted. for others I am not sure
        //I have to repeat again.
        //but now my array size is 1 less
        size--;
    }

    return count;
    
}

module.exports=bubbleSort;




