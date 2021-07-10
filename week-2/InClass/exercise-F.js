function validation(username, usertype) {
    if (usertype == "admin" || usertype == "manager") {
        return "Username valid"
    }
    else if (username[0] === username[0].toUpperCase() && username.length > 5 && username.length < 10){
        return "Username valid"
    }
    else {
        return "Username invalid"
    }
}

console.log(validation("die", "nonadmin"))
console.log(validation("diegoo", "nonadmin"))
console.log(validation("Diegoo", "nonadmin"))
console.log(validation("die", "admin"))
console.log(validation("die", "manager"))