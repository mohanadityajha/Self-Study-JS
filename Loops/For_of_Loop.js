// const cars = ["BMW", "Volvo", "Mini"];
// for(let key of cars){
// const result = key
// console.log(result)
//}

// let language = "JavaScript";
// for(let key of language){

//     const res = key;
//     console.log(res);
// }

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// for(let key of fruits){

//     const result = key;
//     console.log(result )
// }

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0
// for(let key of numbers){
//     sum = sum + key;

// // console.log("The sum of the numbers is " + sum)
// }
//console.log("The sum of the numbers is " + sum);

// const nam = "Aditya";
// for(let key of nam){

// console.log(key)
// }

// const nums = [2, 4, 6, 8];
// for(let key of nums){

// console.log(2* key)
// }


// const values = [1, 2, 3, 4, 5, 6];
// for(let num of values){

//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for(let key of matrix){
//     for(let value of key){
// console.log(value)
//     }
// }

// const userMap = new Map([
//   ['name', 'John'],
//   ['age', 30],
//   ['city', 'Delhi']
// ]);
// for(let key of userMap){
//     console.log(key)
// }
// -----------or----------------
// for(let [key, value] of userMap) {
//     console.log(`${key}: ${value}`);
// }   

// const city = "bangalore";
// for(let key of city){

//     console.log(key.toUpperCase())
// }

const animals = ["dog", "cat", "lion", "tiger"];
function checkAnimal(){
for (let animal of animals) {
    if (animal === "lion") {
        console.log("Lion is a wild animal");
        break;
    }

}
}
console.log(checkAnimal());
