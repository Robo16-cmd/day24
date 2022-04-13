// Question: Write a condition inside the sumofeven function that ensure start parameter is less than end parameter

function sumOfEven(start,end){
  
  if(typeof start !== 'number' || typeof end !== 'number'){
    return 'Invalid number supplied';
  }
  
  if(start > end){
    console.log('start should not be more than end');
    return 'start should not be more than end';
  }
  var sum = 0;
  for(var i=start; i<=end; i++){
    if(i%2===0){
      sum = sum + i;
    }
  }
  console.log(start,end, sum)
  return sum;
}
sumOfEven(5,10)
