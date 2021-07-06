function numberChecker(num) { //  definining function name and parameter //
  if (num > 20) {      //  setting the condition to numbers larger than 20  //
    return `${num} is greater than 20`; //  returns a message   // 
  } else if (num === 20) {    //  sets an alternate condition  // 
    return `${num} is equal to 20`; //  returns another message // 
  } else if (num < 20) {    //  sets another alternate condition // 
    return `${num} is less than 20`;    //  returns another message // 
  } else {            // sets another condition in case the number doens't meet any other condition // 
    return `${num} isn't even a number :(`;    //  sends yet another message // 
  }
}
console.log(numberChecker("meow"));