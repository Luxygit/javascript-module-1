function birthyear(age) {
    return 2021- age;
}

function showYearBorn(name, age) {
    const message = name + " was born in the year " + birthyear(age);
    return message;
}
const agebornmsg = showYearBorn("Diego", 20);
console.log(agebornmsg);

