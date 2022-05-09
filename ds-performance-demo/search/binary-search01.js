

const search=(array, item)=>{

    let lo=0;
    let hi=array.length; //exlclusive range
    let count=0;
    while(lo<hi){
        let mid= Math.floor((lo+hi)/2);
        count++;
        console.log(count, array[mid], hi,lo, mid);
        if(array[mid]===item)
            return {count,index:mid}; //we got result;
        else if (item> array[mid])
            lo=mid+1;  //it must be in upper range
        else
            hi=mid; // it must be in the lower part
    }

    return {count,index:-1};

}

let array=[];
let number =0;
for(let i=0;i<1000;i++){
    number+=Math.floor(Math.random()*10); 
    array.push(number);
}

console.log(array);

console.log('search(array,51)',search(array,51));







