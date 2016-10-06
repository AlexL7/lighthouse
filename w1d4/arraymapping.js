var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(left){

  var a = left.x;
  var b = left.y;
  var z = Math.sqrt((a*a)+(b*b));

  return z
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);