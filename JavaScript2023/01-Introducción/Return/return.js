const calculator = (type, num1, num2) => {
    if (type === '+') {
        return num1 + num2;
    } else if (type === '-') {
        return num1 - num2;
    }
}
const myVariable = calculator('-', 22, 10); // 2
console.log(myVariable);