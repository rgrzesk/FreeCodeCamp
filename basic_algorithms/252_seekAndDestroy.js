/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/


function destroyer(arr) {
var toRemove = [];
for(var i = 1; i<arguments.length; i++) {
   toRemove.push(arguments[i]);
}
    arr = arr.filter( function( el ) {
  return toRemove.indexOf( el ) < 0;
} );
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));