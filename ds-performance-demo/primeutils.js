const isPrime0 = n=>{
 
    if(n<2)
        return false;

    for(var i=2;i<=n;i++)
        if(n%i===0) 
            return false;

    return true;

}




const isPrime1 = n=>{
 
    if(n<2)
        return false;
    if(n===2)
        return true;

    if(n%2===0)
        return false;

    for(var i=3;i<=n;i+=2)
        if(n%i===0) 
            return false;

    return true;

}

const isPrime2 = n=>{
 
    if(n<2)
        return false;
    if(n===2)
        return true;

    if(n%2===0)
        return false;

    for(var i=3;(i*i)<=n;i+=2)
        if(n%i===0) 
            return false;

    return true;

}

const getPrimes=(min,max, isPrime)=>{
    var primes=[];
    for(var i=min;i<max;i++)
        if(isPrime(i)) 
            primes.push(i);
    return primes;
}


const measurePerformance=(min,max,isPrime)=>{
    var start=new Date();
    var result=getPrimes(min,max,isPrime);
    var end=new Date();

    console.log(`Total primes in range ${min}-${max} is ${result.length}`);
    console.log(`Total time taken is ${end-start} ms`);
}

measurePerformance(2,500000,isPrime2);  //25

measurePerformance(2,500000,isPrime0);  //25

measurePerformance(2,500000,isPrime1);  //25

