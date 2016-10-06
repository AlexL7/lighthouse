// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function(elm){
    if (elm === "Waldo"){
      found(arr.indexOf(elm)+1);
    }
  });
}

function actionWhenFound(num) {

  console.log("Found him at index " + num + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


