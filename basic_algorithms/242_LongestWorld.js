/*Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length*/


function findLongestWord(str) {
  var array = [];
  array = str.split(" ");
  var longest = 0;
  array.map(function(val){
      if(val.length > longest) {
          longest = val.length;
      }
      return longest;
  });
  return longest
}

findLongestWord("The quick brown fox jumped over the lazy dog");
