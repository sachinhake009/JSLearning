

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Numbers to find factorial for
const numbers = [5, 9, 11, 7];

// Calculate and display factorial for each number
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const fact = factorial(num);
    console.log(`Factorial of ${num} is ${fact}`);
}