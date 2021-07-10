const array = ["Diego", "NotAmy", "Amy"];

function secondMatchesAmy(array) {
  if (array[2] == "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(array));