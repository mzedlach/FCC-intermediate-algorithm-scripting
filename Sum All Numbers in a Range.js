// FreeCodeCamp - Challenge #1
// Link : https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

// Instructions:  
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

// # My Solution

function sumAll(arr) {
  
  var maxVal = Math.max(...arr);
  var minVal = Math.min(...arr);
  var sum = 0; 
  
  for ( var i = minVal ; i <= maxVal ; i++ ) { 
        sum = sum + i ;
  }
  return sum;
}

sumAll([1, 4]);
