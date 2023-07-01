const add = function(firstValue, secondValue) {
  return sum(firstValue, secondValue);
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function() {
	return Array.from(arguments).flat().reduce((sum, param) => {
    sum += +param;
    return sum;
  }, 0);
};

const multiply = function() {
  return Array.from(arguments).flat().reduce((product, param) => {
    product *= param;
    return product;
  }, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	return Array.from(Array(arguments[0] + 1).keys()).reduceRight((f, value) => {
    if (value === 0) {
      f *= 1;
    }
    else {
      f *= value;
    }
    return f;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
