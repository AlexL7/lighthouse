function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest);


  console.log(border );
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;
  if(str =="*"){
    for (var i = 0; i < times+4; i++) {
      result += str;
    }
  }
  else{
  for (var i = 0; i < times; i++) {
    result += str;
  }
}

  return result;
}

function longestStr(list) {
  var long = list[0];

  for(var i = 0 ; i < list.length; i++) {

    if(list[i].length > long.length){
      long = list[i];
    }
  }
  return long;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
