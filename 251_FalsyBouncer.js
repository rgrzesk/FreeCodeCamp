/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/
function filterValues(value) {
    if(value!==Boolean.false && value!==null && value!==0 && value!=="" && value!==undefined && value!==NaN) {
        return value;
    }
}

function bouncer(arr) {
  var filtered = arr.filter(filterValues);
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
