var fib = function(N) {
  let arr = [0,1];
  if (arr[N])
    return arr[N];

  for (let i=2; i<=N; i++){
      arr.push(arr[i-1] + arr[i-2]);      
  }
    
  return arr[N];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));