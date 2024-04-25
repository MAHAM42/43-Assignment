"use strict";
// ASSIGNMENT NO 43:
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.
*/
console.log("ASSIGNMENT NO 43:");
// Define the function to show magicians names:
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names:
let magicians_name = ["Harry Poter", "Maham", "Uzma"];
// Making a copy of orignal array through .Slice() function:
let copy_magician_names = magicians_name.slice();
// Modify the copied array to include "The Great" with their names:
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays Original and Copied:
// Original:
console.log("Original Array\n");
show_magicians(magicians_name);
// Copied:
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
