/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()*/



function titleCase(str) {
  var array = [];
  array = str.split(" ");

   var changedArray = array.map (function (val)  {
        val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        console.log(val);
        return val;
    });

  str = changedArray.join(" ");
  return str;
}

console.log(titleCase("I'm a litASDA tea pot"));
