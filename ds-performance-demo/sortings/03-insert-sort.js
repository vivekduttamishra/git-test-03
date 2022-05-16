// 4, 7, 11, 13, 9, 5, 17, 2, 6
//               i ( x = 9)
// 
function insersort(array){
    //var i = 4;
    for( var i=1; i<array.length; i++ ){
        var x = array[i];
        if(x<array[i-1]){
        //    console.log(`inserting ${x}`);
            for( var j=i-1; j>=0; j-- ){
                if(array[j]>x){
                    array[j+1] = array[j];
                }
                else{
                    break;
                }
            }
        //    console.log(array);
            array[j+1] = x;
        }

    }
    
}

var arr = [4, 7, 11, 13, 9, 5, 17, 2, 6];
insersort(arr);
console.log(arr);
