const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
function allowedtodrive(years) {
    return years < 2004;
} 

const filteredyears = years.filter(allowedtodrive);
console.log("These are the birth years of people who can drive: " + filteredyears)