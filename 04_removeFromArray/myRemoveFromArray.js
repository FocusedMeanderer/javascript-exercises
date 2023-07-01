const removeFromArray = function() {
  for (let i = 1; i < arguments.length; i++) {
    let indexOfArg = arguments[0].indexOf(arguments[i]);
    if (indexOfArg >= 0) {
      arguments[0].splice(indexOfArg, 1);
    }
  }

  return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
