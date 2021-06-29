function birthyear(age) {
    return 2021- age;
}

function showYearBorn(name, age) {
    const message = name + " was born in the year " + birthyear(age);
    return message;
}

console.log(showYearBorn("Diego",20));

