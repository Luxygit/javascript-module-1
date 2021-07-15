const class1 = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

const class2 = ["Diego", "Ian", "Aiden", "Ron", "Evie"];

const classtotal = class1.concat(class2)

console.log(classtotal.sort())

function result (name, array) {
    if (array.includes(name)) {
        return name + ' is at the class with ' + array;
    }
    else {
        return name + ' is not at the class with ' + array;
    }
}

console.log(result("Diego", classtotal));
console.log(result("Mamadou", classtotal));
