//Assignment 3: Company Product Catalog

// Define an array named inventory to store product information. 
type inventoryType = {
    name: string,
    model: string,
    cost: number,
    quantity: number
}

let inventory: inventoryType[] = [];

// Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity. 

let object1: inventoryType = {
    name: "Smart Phone",
    model: "Samsung A03",
    cost: 420000,
    quantity: 10
};

let object2: inventoryType = {
    name: "Mouse",
    model: "Logitech MX Master 3",
    cost: 23990,
    quantity: 9,
};

let object3: inventoryType = {
    name: "Smartwatch",
    model: "Apple Watch Series 6",
    cost: 390000,
    quantity: 3,
};

//Add these product objects to the inventory array using an appropriate array method. 
inventory.push(object1);
inventory.push(object2);
inventory.push(object3);

//Access and log the quantity property of a specific product (e.g., third product) in the 
//inventory array. 
console.log("The quanitity of " + object1.name + " is " + object1.quantity);

//Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.

let object4: inventoryType = {
    name: "Laptop",
    model: "Dell lattitude",
    cost: 65000,
    quantity: 10
};

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);

