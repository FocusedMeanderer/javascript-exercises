const convertToCelsius = function(f) {
  let c = ((f - 32) * (5 / 9));
  if (Number.isInteger(c)) return c;
  return +(c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let f = (((9*c)/5)+32);
  if (Number.isInteger(f)) return f;
  return +(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
