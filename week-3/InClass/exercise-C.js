function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
/*
  function uppercaseall(namesArray) {
       return namesArray.map((name) => name.toUpperCase());
        }
*/

const uppercaseall = (namesArray) => namesArray.map((name) => name.toUpperCase()).sort();
         
console.log(magician(uppercaseall));
