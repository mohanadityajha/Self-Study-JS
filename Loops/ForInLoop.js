 const person = { name: "John", age: 25, city: "New York" };

// for (let key in person) {

//     console.log(key)
// }

// What will be the output of this code?
//    const car = { brand: "Toyota", model: "Corolla", year: 2020 };
//       for (let key in car) {
//        console.log(car[key]);
// }


// const user = { username: "aditya", email: "adi@example.com" };
// for(let key in user){

//     console.log(`${key}: ${user[key]}`);
// }

 const student = { name: "Aditya", age: 25, course: "B.Tech" };
// for(let key in student){

//     console.log(key);
// }

// for(let key in student){

//     console.log(student[key])
// }

for(let key in student){

    console.log(`${key}: ${student[key]}`)
}