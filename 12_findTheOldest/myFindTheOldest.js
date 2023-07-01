const findTheOldest = function(peeps) {
  peeps.sort((personA, personB) => {
    const thisYear = new Date().getFullYear();

    return ((('yearOfDeath' in personA) ? (personA.yearOfDeath - personA.yearOfBirth) : (thisYear - personA.yearOfBirth)) > (('yearOfDeath' in personB) ? (personB.yearOfDeath - personB.yearOfBirth) : (thisYear - personB.yearOfBirth))) ? -1 : 1;
  })

  return (peeps[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
