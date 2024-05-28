//Assignment 1: Building Your Friend List 

//1. Define an object named people containing an empty array called friends.

let people = {
    friends: [] as
        {
            firstName: string;
            lastName: string;
            id?: number;

        }[]
}

// Create three separate objects, each representing a friend, with properties like firstName, 
//lastName, and optionally id. 

let friendOne = {
    firstName: "Alya",
    lastName: "batool",
    id: 22
}
let friendtwo = {
    firstName: "Hafsa",
    lastName: "Izhar",
    id: 26
}
let friendthree= {
    firstName: "Nawaira",
    lastName: "Sajjad",
}

// Add these friend objects to the friends array within the people object. 
people.friends.push(friendOne);
people.friends.push(friendtwo);
people.friends.push(friendthree);

//Output the entire people object to the console, displaying your information and your 
//friend list. 
console.log(people);