function calcDeclaration (firstNumber, secondNumber, thirdNumber) {
    return firstNumber + secondNumber + thirdNumber; //для return statement і prompt
    // let a = firstNumber + secondNumber + thirdNumber;
    // console.log(a)
}

// calcDeclaration();
// calcDeclaration(4,5,6);
let summa = calcDeclaration(7,8,9);
console.log(summa);


let calcExpression = function (firstNumber, secondNumber, thirdNumber) {
    return firstNumber + secondNumber + thirdNumber;
}

console.log(calcExpression(1,2,3));




let firstNumber = +prompt('Введіть першу цифру')
let secondNumber = +prompt('Введіть другу цифру')
let thirdNumber = +prompt('Введіть третю цифру')

alert(calcDeclaration (firstNumber, secondNumber, thirdNumber))
// alert(calcExpression (firstNumber, secondNumber, thirdNumber))