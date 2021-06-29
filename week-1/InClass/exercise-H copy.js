
function greetingFcn(name, greetingStart) {
    const greetingMsg = greetingStart + name;
    return greetingMsg;
}
const greet = greetingFcn("Diego", "Yooo ")

console.log(greet);