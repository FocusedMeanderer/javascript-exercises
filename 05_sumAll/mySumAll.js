const sumAll = function(first, last) {
  let total = 0;
 
  if (isNaN(first) || isNaN(last) || first < 0 || last < 0 || typeof first === 'string' || typeof last === 'string')
    return 'ERROR';

  if (last > first) {
    for (num = first; num <= last; num++) {
      total += num;
    }
  }
  else {
    for (num = first; num >= last; num--) {
      total += num;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
