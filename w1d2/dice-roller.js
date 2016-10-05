var args = process.argv;

//Math.floor(Math.random() * ((y-x)+1) + x)
// forumla too generate random number between 1 and 6

function roll(times){
  times = args[2];
  numbers = "";
  for (var i = 0 ; i < times; i++) {
    if(i == times-1){
      ranNum = Math.floor(Math.random() * 6 + 1);
      numbers += ranNum
    }
    else{
      ranNum = Math.floor(Math.random() * 6 + 1);
      numbers += ranNum +", ";
  }
  }
  console.log (`Rolled ${times} dice:`,numbers);

}
roll();
