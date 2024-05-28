//Assignment 2:Manipulating an Array: Rearranging Words

// Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

const stringArray = scrambledArray.map(element => element.toString());


//Use methods like split(), join(), push(), pop(), shift(), and unshift() to:  
//  Convert non-strings (booleans, numbers) to strings if needed. 
//  Split elements into character arrays (optional). 
//  Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
const reArrangeArray: string[] = [];
reArrangeArray[0]=stringArray.pop()as string;
reArrangeArray[5]=stringArray.pop() as string;
reArrangeArray[2]=stringArray.pop() as string;
reArrangeArray[1]=stringArray.pop() as string;
reArrangeArray[3]=stringArray.shift() as string;
reArrangeArray[4]=stringArray.shift()as string;

// Use join() to combine elements back into a single string: "I am a student of GIAIC"
const finalSentence=reArrangeArray.join(" ");
console.log(finalSentence);


