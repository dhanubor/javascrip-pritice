// Define an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Access object properties
console.log(person.firstName); // Output: John
console.log(person.lastName);  // Output: Doe
console.log(person.age);       // Output: 30

// Call object method
console.log(person.fullName()); // Output: John Doe
const studentId ={
    id: 1,
    name: "dhanu",
    group:"science",
    favarate: "english"


}
var fullName = studentId["name"]
console.log(fullName);

