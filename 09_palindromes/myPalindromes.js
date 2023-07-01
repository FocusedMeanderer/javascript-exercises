const palindromes = function (str) {
  const arrayed = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  return (arrayed.join('') === arrayed.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
