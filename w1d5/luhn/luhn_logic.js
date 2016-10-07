'use strict';

const doubleEveryOther = function(number){
  const removeLastNumber = number.slice(0,(number.length-1));
  const flip = removeLastNumber.reverse();
  const row = [];
  for (var i = 2; i < removeLastNumber.length+2 ; i++){
    if(i%2 == 0){
      if((flip[i-2]*2) > 9){
        row.push((flip[i-2]*2) - 9);
      }
      else{
        row.push(2*flip[i-2]);
      }
  }
  else{
    row.push(flip[i-2]);
  };
  }
  return row.reverse();
}

const check = function(num){

  let originalNum = ("" + num).split("").map(Number);
  const numCheck = doubleEveryOther(originalNum);

  const lastDigitOfOriginal = originalNum[originalNum.length-1];

  const sumNums =  lastDigitOfOriginal+(numCheck.reduce(function(a,b){
    return a + b;
  },0));
  const sumNine = ((sumNums-lastDigitOfOriginal)*9);
  const sumCheck = (""+sumNine).split("").map(Number);
  const lastDigit0fSum  = sumCheck[sumCheck.length-1];

  if (sumNums % 10 == 0 && lastDigit0fSum == lastDigit0fSum){
    console.log("You have a valid Number!")
  }
  else{
    console.log("Sorry, invalid Number.")
  }
}



check(4929783170962493);

//