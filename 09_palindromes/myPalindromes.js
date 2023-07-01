const palindromes = function (string) {
  const arrayed = string.toLowerCase().replace(/[,\.!\s]/g, '').split('');
  
  return (arrayed.join('') === arrayed.slice().reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
