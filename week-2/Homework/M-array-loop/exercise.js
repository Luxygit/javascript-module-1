/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function logT(arrayOfWeek) {
    for (let i=0; i<arrayOfWeek.length; i++) {
      if (arrayOfWeek[i].startsWith("T")) {
    console.log(arrayOfWeek[i]);
      }
  }
}
logT(daysOfWeek);