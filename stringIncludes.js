// The includes() method returns true if a string contains a specified value, otherwise false:

let text = "Hello world, welcome to the universe.";
let checktext = text.includes("world")    // Returns true

console.log(checktext)

/**
 * String.startsWith()
The startsWith() method returns true if a string begins with a specified value, otherwise false:
 */

let text1 = "Hello world, welcome to the universe.";

let checktext1 = text1.startsWith("Hello")   // Returns true

console.log(checktext1)

/**
 * String.endsWith()
The endsWith() method returns true if a string ends with a specified value, otherwise false:
 */

let text2 = "John Doe";
let checktext2 = text2.endsWith("Doe")    // Returns true
console.log(checktext2)