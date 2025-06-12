function findPrimeNumber(num) {
    for (let i = 1; i < num; i++) {
        if (num === 2) {
            return "It is the Prime Number"
        } if (num % 2 === 0) {
            return "It is not Prime Number"
        } else {
            return "It is the Prime Number"
        }

    }

}
console.log(findPrimeNumber(29));