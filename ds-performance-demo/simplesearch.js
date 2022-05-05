

const indexOf = (array, value)=>{

    for(let i=0;i<array.length;i++)
        if(array[i]===value)
            return i;
    return -1;

}


let numbers=[2,9,11,17,4,29,22,18,12,6,5];

console.log('indexOf(numbers,29)',indexOf(numbers,29)); //5
console.log('indexOf(numbers,51)',indexOf(numbers,51)); //-1
console.log('indexOf(numbers,2)',indexOf(numbers,2)); //0




