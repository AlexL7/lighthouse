function rString(string){
  newString = "";
  for (var i = string.length; i+1 > 0; i--) {
     var x = string.charAt(i);
     newString += x;
  }
  return newString;
}


function reverse(){
  for (var i = 2; i < args.length; i++) {
    console.log(rString(args[i]));
  }
}

var args = process.argv;
reverse(args);



