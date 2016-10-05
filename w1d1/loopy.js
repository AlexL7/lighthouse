
function loopyLighthouse(range,multiples,words){
  var r1 = range[0];
  var r2 = range[1];
  var m1 = multiples[0];
  var m2 = multiples[1];
  var w1 = words[0];
  var w2 = words[1];

  for(var i = r1; i <= r2;i++){
    if(i % m1 == 0 && i % m2 == 0 ){
      console.log(w1 + w2); }
    else if (i % m1 == 0){
      console.log(w1); }
    else if (i % m2 == 0){
      console.log(w2); }
    else{
      console.log(i);
    }

  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);