const fibonacci = function(position) {

  let prev = 0;
  let next = 1;

  if (position < 0) return 'OOPS';

  if (position < 2) return +position;

  for (let i = 2; i <= +position; i++) {
    next = next + prev;
    prev = next - prev;
  }

  return next;
};

// Do not edit below this line
module.exports = fibonacci;
