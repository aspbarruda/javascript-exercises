const findTheOldest = function(people) {
    const sortedAge = people.sort((pA, pB) => {
        let ageA = 0;
        let ageB = 0;
        if (pA.yearOfDeath == undefined) {
            ageA = (new Date()).getFullYear() - pA.yearOfBirth;
        }
        else {
            ageA = pA.yearOfDeath - pA.yearOfBirth;
        }
        if (pB.yearOfDeath == undefined) {
            ageB = (new Date()).getFullYear() - pB.yearOfBirth;
        }
        else {
            ageB = pB.yearOfDeath - pB.yearOfBirth;
        }
        return ageA > ageB ? -1 : 1;
    })
    return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
