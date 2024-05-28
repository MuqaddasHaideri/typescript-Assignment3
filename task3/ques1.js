//Assignment 1: Building Your Friend List 
//1. Define an object named people containing an empty array called friends.
var people = {
    friends: []
};
// Create three separate objects, each representing a friend, with properties like firstName, 
//lastName, and optionally id. 
var friendOne = {
    firstName: "Alya",
    lastName: "batool",
    id: 22
};
var friendtwo = {
    firstName: "Hafsa",
    lastName: "Izhar",
    id: 26
};
var friendthree = {
    firstName: "Nawaira",
    lastName: "Sajjad",
};
// Add these friend objects to the friends array within the people object. 
people.friends.push(friendOne);
people.friends.push(friendtwo);
people.friends.push(friendthree);
console.log(people);
