

function isPrime(number) {
    if (number <=1) {
        
    }
    if (number <= 3) {
        return true;
    }
    if (number %2 === 0 || number % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= number; i +=6) {
        if (number % i === 0 || number (i + 2) == 0) {n 
            return false;
        }        
    }
    return true;
}
console.log(isPrime(11));
console.log(isPrime(21));