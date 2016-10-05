
function countLetters(string){
  var singleLetters = string.split(" ").join("").toLowerCase();
  var list = {};

  for( var i = 0; i<singleLetters.length ; i++)
  {
    if (!list[singleLetters[i]]){
        list[singleLetters[i]] = 1;

    }
    else{

    list[singleLetters[i]] += 1 ;
  }

  }
  return list;
}

console.log(countLetters("hello"));