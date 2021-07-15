const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Diego",
    "Chris",
    "Antigoni" ];

function findname(name){
    if (namesArray.includes(name)) {
    return "Found me!";}
    else {
        return "Haven't Found me :( ";
    }
}
console.log(findname("Diego"));

console.log(findname("Trix"));



