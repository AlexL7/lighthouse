var countdownGenerator = function (x) {
  var count = x;
  var say = ["T-minus ","Blast Off!","Rockets already gone, bub!"]

  return function(){
    count -= 1;

     if (count > 0){
      console.log(say[0]);
      }
     else if(count == 0){
      console.log(say[1]);
      }
     else{
      console.log(say[2]);
    }
  }
}








var countdown = countdownGenerator(4);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
