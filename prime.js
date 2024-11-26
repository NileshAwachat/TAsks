function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    
    return true;
  }
  
  function getNextPrime(num) {
    let nextNum = num + 1;
    
    while (!isPrime(nextNum)) {
      nextNum++;
    }
    
    return nextNum;
  }
  
  const arr = [2, 5, 7, 8, 9];
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(getNextPrime(arr[i]));
  }
  
  console.log(newArr); // Output: [3, 7, 11, 11, 11]