function factorial(n){
    let result=0;
    if(n==0) return 1;
    return n*factorial(n-1);
}
let n=5;
console.log(factorial(n));    
