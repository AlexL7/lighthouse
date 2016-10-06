var map = function(arr, _cb){
  var empty = [];
  arr.forEach(function(elm){
    empty.push(_cb(elm));
  });
  console.log(empty);
};


map(["ground", "control", "to", "major", "tom"], function(elm){ return elm.length });
