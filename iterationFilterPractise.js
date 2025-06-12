//Filter out odd numbers from an array
// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.filter(function(value,index,arr){

// return value % 2 !== 0

// })
// console.log(result)




// Get names longer than 4 characters
// const names = ["Ram", "Shyam", "Mohit", "Raj"];

// const result = names.filter(function(value,index,arr){


//     return value.length > 4


// })
// console.log(result)



// // Filter positive numbers
// const nums = [-3, 4, -1, 5, -6, 2];

// const result = nums.filter(function(value,index,arr){

// return value >  0 



// })
// console.log(result)


//  Filter positive numbers
// const numbers = [1, 2, 3, 4];
// const result = numbers.map(function(value,index,arr){
// return value * 10

// })
// console.log(result)


// Convert an array of strings to uppercase
// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.map(function(value,index,arr){
//     return value.toUpperCase()
// })

// console.log(result);

// Get the length of each word in an array
// const words = ["car", "motorcycle", "bus"];
// const result = words.map(function(value,index,arr){
// return value.length

// })
// console.log(result)


//  Square only the even numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter(function(value,index,arr){

//     return value % 2 === 0
// })
//     const a =  result.map((val,ind,arr)=>{
//     return val*val
// })
// console.log(result,a)


// Extract names with more than 4 letters and convert to uppercase
// const names = ["Amit", "Sunita", "Raj", "Suresh"];
// const result = names.filter(function(value,index,arr){
// return  value.length >  4
// const a = names.filter(function(value,index,arr){

//     return value.toUpperCase()
// })
 
// })
// console.log(result)

// Sort numbers in ascending order
// const numbers = [5, 1, 8, 3, 2];
// const result = numbers.sort(function(a,b){
// return a-b  
// })

// console.log(result)

//Sort numbers in descending order
// const numbers = [4, 9, 1, 7];
// const result = numbers.sort(function(a,b){

// return b - a 

// })
// console.log(result)


// Sort strings alphabetically
// const names = ["Raj", "Amit", "Mohit", "Bhavna"];
// const result = names.sort()
// console.log(result)

//Sort strings by length (shortest to longest)
// const animals = ["cat", "elephant", "dog", "lion"];
//  const result = animals.sort()
 
// let finalResult = result.sort(function(a,b){      
//     return a.length - b.length
// })
// console.log(finalResult)

//Sum of all numbers in an array
// const nums = [1, 2, 3, 4];
// const result = nums.reduce(function(acc,val,index,arr){

// return acc = acc + val
// ;acc})
// console.log(result )

// Find the maximum number
// const numbers = [5, 9, 2, 8, 1];
// const result = numbers.reduce(function(acc,val,index,arr){
// return  acc = Math.max(acc,val)

// },0)
// console.log(result)

//Multiply all numbers in an array
// const nums = [2, 3, 4];
// const result = nums.reduce(function(acc,val,index,arr){
// return acc = acc * val

// })
// console.log(result)

//Count the total number of characters in an array of strings
const fruits = ["apple", "banana", "kiwi"];
const result = fruits.reduce(function(acc,val,index,arr){

result.length
return acc + val.length

},0)
console.log(result)