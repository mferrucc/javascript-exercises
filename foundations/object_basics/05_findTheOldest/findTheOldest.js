function getAge(birth, death) {
    if (death === undefined) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    if (people.length === 0) {
        return null;
    }

    let oldest = people[0];

    for (const person of people.slice(1)) {
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        if (currentAge > oldestAge) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
