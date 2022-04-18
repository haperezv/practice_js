/**
 * 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
 */

const calculateMultiplication = () => {

    const num1 = parseInt(prompt('Enter first number'));
    const num2 = parseInt(prompt('Enter second number'));
    const mult = num1 * num2;
    const div = num1 / num2;
    console.log(`Multiplication of ${num1} and ${num2} is ${mult}`);
    console.log(`Division of ${num1} and ${num2} is ${div}`);

}

calculateMultiplication();