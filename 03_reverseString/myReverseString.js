const reverseString = function(userString) {
  let stringArray = [];
  
  stringArray = userString.split('');
  
  return ((stringArray.reverse()).join(''));
};

// Do not edit below this line
module.exports = reverseString;
