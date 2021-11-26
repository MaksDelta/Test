//2 цифри

function calcDeclaration (firstNumber = 2, secondNumber = 3) {
    // return firstNumber * secondNumber; //для return statement
    let a = firstNumber * secondNumber;
    console.log(a)
}

calcDeclaration();
calcDeclaration(4,5);
// let summa = calcDeclaration(6.7);
// console.log(summa);


let calcExpression = function (firstNumber = 2, secondNumber = 3) {
    return firstNumber * secondNumber;
}

console.log(calcExpression());
console.log(calcExpression(4,5));



//3 цифри

function calcDeclaration3 (firstNumber = 1, secondNumber = 2, thirdNumber = 3) {
    // return firstNumber * secondNumber * thirdNumber; //для return statement
    let a = firstNumber * secondNumber * thirdNumber;
    console.log(a)
}

calcDeclaration3();
calcDeclaration3(4,5,6);
// let summa = calcDeclaration(7,8,9);
// console.log(summa);


let calcExpression3 = function (firstNumber = 1, secondNumber = 2, thirdNumber = 3) {
    return firstNumber * secondNumber * thirdNumber;
}

console.log(calcExpression3());
console.log(calcExpression3(4,5,6));
















// let firstNumber = +prompt('Введіть першу цифру')
// let secondNumber = +prompt('Введіть другу цифру')
// let thirdNumber = +prompt('Введіть третю цифру')



// alert(calcDeclaration (firstNumber, secondNumber))
// alert(calcDeclaration3 (firstNumber, secondNumber, thirdNumber))
// alert(calcExpression (firstNumber, secondNumber))
// alert(calcExpression3 (firstNumber, secondNumber, thirdNumber))



// степінь

function pow(x, n) {
  let result = x;
    for (let i = 1; i < n; i++) {
    result *= x;
  }
    return result;
}

// console.log(pow(2,3))

// let pow = function(x,n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//     return result;
// }



let x = +prompt("x?");
let n = +prompt("n?");

if (n < 1) {
  alert(`Степінь ${n} не підтримується`);
} else {
  alert( pow(x, n) );
}