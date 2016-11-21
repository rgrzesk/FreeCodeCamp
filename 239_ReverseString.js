
function reverseString(str) {
  var array = [];
  array = str.split('');
  array.reverse();
  str = array.join('');
  return str;
}

console.log(reverseString("hello"));
