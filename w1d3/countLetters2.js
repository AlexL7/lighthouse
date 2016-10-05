function countLetters(string){
  var singleLetters = string.split(" ").join("").toLowerCase();
  var list = {};

  for( var i = 0; i<singleLetters.length ; i++)
  {
    if (!list[singleLetters[i]]){
        list[singleLetters[i]] = [i];

    }
    else{

    list[singleLetters[i]].push(i);
  }

  }
  return list;
}

console.log(countLetters("alexander"));