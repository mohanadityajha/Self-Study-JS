// function myFunction(arr){
//     return arr.filter(function(value,index,arr){
//          return value > 10
//    })
// }
// console.log(myFunction([2,4,6,8,10,12,14,16,18,20]))


// function myFunction(arr){

//   return arr.filter(function(value,index,arr)  {

//    return value > 10

//   })  
// }

// console.log(myFunction([2,4,3,5,10,12,10]))



function myFunction(arr){

    return arr.map(function(value,index,arr){

        return value * 2 
    })


}
console.log(myFunction([2,4,6,8,10]))