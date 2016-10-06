// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(i+1);   // execute callback
    }
  }
}

function actionWhenFound(num) {

  console.log("Found him at index " + num + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);