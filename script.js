const firstNumber = +prompt("Введіть перше число: ");
const secondNumber = +prompt("Введіть друге число: ");
const userAction = prompt('Що ви хочете зробити (add, sub, mult, div) ?');

let result;

if (userAction === 'add' || userAction === '+') {
    result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
} else if (userAction === 'sub' || userAction === '-') {
    result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`)
} else if (userAction === 'mult' || userAction === '*') {
    result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`)
} else if (userAction === 'div' || userAction === '/') {
    result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
} else {
    alert('Numbers pls');
}

let test = 'я тест для гіта';
let tes3 = 'я тест другої гілки';