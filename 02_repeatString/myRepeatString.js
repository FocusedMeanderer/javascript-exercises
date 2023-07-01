const repeatString = function(userString, howMany) {
  let finalString = '';

  if (howMany < 0) return 'ERROR';

  for (let i = 0; i < howMany; i++) {
    finalString += userString;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
