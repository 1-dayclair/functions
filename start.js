const numbers = [5, 6, 7, 8, 10, 20, 30, 40, 50, 60, 70, 77]
// Take an array of numbers and return the sum.

const initialValue = 0; 
const sum = numbers.reduce((accumulator, currentValue) => 
accumulator + currentValue, initialValue); 
console.log(sum); 

// Take an array of numbers and return the average.

const average = (numbers) => numbers.reduce((sum, currentValue) => sum + currentValue, 0) / numbers.length;
console.log(average(numbers)); 

// Take an array of strings and return the longest string

const list = ["Robots", "Heart Surgeons", "Nuclear Strategist", "Programmer", "Business Woman", "Journalist", "Poet", "Filmmaker", "Chef", "Official"]

function theLongest() {
    return list.sort((a, b) => b.length - a.length) [0]; 
}
console.log(theLongest()); 

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

const variety = ["Robots", "Heart", "tax", 5, "Nuclear", "Programmer"] 

const result = variety.filter((word) => word.length > 5); 
console.log(result);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const recursive = (n) => {
    console.log(n)
    if (n > 0) {
        n = n - 1;
        recursive(n);        
    }
}
recursive(7);

// Part 2: Thinking Methodically

const library = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.

library.sort((a, b) => a.age - b.age);
console.log(library);

// Filter the array to remove entries with an age greater than 50.

const answer = library.filter((book) => book.age < 50); 
console.log(answer); 

// Map the array to change the “occupation” key to “job” and increment every age by 1.

const edit = library.map((redo) => {
    return {
        id: redo.id,
        name: redo.name,
        job: redo.occupation,
        age: ++redo.age
    }
});

console.log(edit); 

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

const collection = library.reduce((accumulator, currentValue) => 
accumulator + currentValue.age, initialValue);

console.log(collection);

const avg = collection / library.length; 

console.log(avg); 

// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.

const object = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };

console.log(++object.age);

const anotherObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

const copy = {...anotherObject}; 
console.log(++copy.age); 

