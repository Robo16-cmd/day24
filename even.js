// Write a function that return the sum of even numbers.
// Hints:
// 1. Function will take in an integer arguments 
// 2. Use a loop to iterate through the number 
// 3. Save only the even numbers to sum.
// 4. Use the modulo operator to get the even number



function getSumOfEvenNumber(x){
  let even = [];
  let sum = 0;
  for (let index = 0; index <= x; index++) {
    if(index%2 == 0){
      even.push(index);
      // sum += index;
      sum = sum + index;
    }
  }
  
  console.log(even, sum);
}

getSumOfEvenNumber(10);
