var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var count = -1;


  return function(){
    count += 1;

    return list[count];
  }
}
)();


console.log(loadedDie());  // 5
console.log(loadedDie());  // 4