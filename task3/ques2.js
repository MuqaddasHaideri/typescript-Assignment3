var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var stringArray = scrambledArray.map(function (element) { return element.toString(); });
// Prepare an array to rearrange the elements
var reArrangeArray = [];
reArrangeArray[0] = stringArray.pop();
reArrangeArray[5] = stringArray.pop();
reArrangeArray[2] = stringArray.pop();
reArrangeArray[1] = stringArray.pop();
reArrangeArray[3] = stringArray.shift();
reArrangeArray[4] = stringArray.shift();
var finalSentence = reArrangeArray.join(" ");
// reArrangeArray.push(stringArray.pop() as string); // "I"
// reArrangeArray.push(stringArray.pop() as string); // "GIAIC"
// reArrangeArray.push(stringArray.pop() as string); // "a"
// reArrangeArray.push(stringArray.pop() as string); // "am"
// reArrangeArray.unshift(stringArray.shift() as string); // "student"
// reArrangeArray.splice(1, 0, stringArray.shift() as string); // "of"
// // Join the elements into a single string
// const finalString = reArrangeArray.join(" ");
console.log(finalSentence); // Output: "I am a student of GIAIC"
