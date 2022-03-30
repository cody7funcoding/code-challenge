
 const findSum = function sumOfAll(arr) {
   var total = 0;
   for(var i in arr) {
   total += arr[i];
}
return total;
}
console.log(findSum([1,3,5,7,9]))








const findFrequency = function(array) {
const map = new Map();
const mostLeast = {
  most: 1,
  least: 100
};

array.forEach(item => {
  if(map.has(item)) {
    map.set(item, map.get(item)+1);
  } else{
    map.set(item, 1);
  }
});

for (const [key, value] of map) {
  if (mostLeast.most < value) {
    mostLeast.most = value;
  }
    if (mostLeast.least > value)
   { mostLeast.least = value;  }
}
return mostLeast;
};
console.log(findFrequency(['a', 'a', 'a', 'b', 'a', 'b', 'c', 'a']))








const isPalindrome = function(str) {
   let fwd = 0;
   let bkwd = str.length-1;
   while (fwd <= bkwd) {
  if (str[fwd] != str[bkwd])
  return false;
  fwd++;
  bkwd--;
}
return true;
   }

console.log(isPalindrome('able was I ere I saw elba'))

const largestPair = function(array) {
  var product = 0;
  for (var i = 0; i < array.length - 1; i++ ) {
product = Math.max(product, array[i] * array[i + 1])
  }
  return product;
}

console.log(largestPair([1,2,3,4,5,5,6,46,64,6]))



const removeParenth = function(str) {


  return str.slice(0,8).concat(str.slice(6 + 7));
}


  console.log(removeParenth('codingis(not)fun'))
  

  const scoreScrabble = function(str) {
    scores = {'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4, 'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3, 'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8, 'y': 4, 'z': 10}
  var sum = 0;
  for (var i = 0; i <str.length; i++) {
   sum += scores[str.charAt(i)] || 0;
  }
  return sum;
  }
console.log(scoreScrabble('zebra'))
