let person = {
    firstname: "Meghana",
    lastname: "Devata",
    age: 20,
    isAlive: true,
    isSleep: null,
    email: "meghana@code.in"
}

console.log(person)

// To add a new key in a object
// phone :"7367634787"

person.phone = "7589475894" // add
console.log(person)

person.age = 23; // update
console.log(person)

delete person.isAlive 
console.log(person)
