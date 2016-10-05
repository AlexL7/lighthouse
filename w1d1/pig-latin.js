var args = process.argv;

function transform(word){
  newWord = "";
  for (var i = 1; i < word.length; i++){
      var x = word.charAt(i);
      newWord += x;
  }
  return newWord + word.charAt(0) +"ay";

}


function pigLatin(){
  var s = "";
  for (var i = 2; i < args.length; i++) {
    s += transform(args[i]) + " ";
  }
  return console.log(s);
}

pigLatin(args);