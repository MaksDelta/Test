
let number = 37;
console.log(number);
console.log(typeof(number));

let string = 'Message';
console.log(string);
console.log(typeof(string));

var boolean = true;// false
console.log(boolean);
console.log(typeof(boolean));

var object = {d: 8};
console.log(object);
console.log(typeof(object));

const isNull = null;
console.log(isNull);
console.log(typeof(isNull));

const undef = undefined;
console.log(undefined);
console.log(typeof(undefined));




console.log(('vol') + ' ' + 4);
console.log(1 + 'vh');
console.log(2 + 8 + 8 + ' ' + 'number')
console.log(13 + '$')
console.log(1 + ' plus ' + 1 + ' will be ' + 2)


console.log(1 * '2')
console.log(13 - 'var')
console.log('22' / 2)
console.log('18' + 12 / '3' * 10 - 4)
console.log('14' / 2 * '0')





console.log(1 + '2') //конвертує число в 'cтрінгу' бо йому так легше (все може стати 'стрінгою')
console.log('' + 1 + 0) //через лапки думає шо 'стрінга'
console.log('' - 1 + 0) //'стрінга' не може віднімати і тому це номер
console.log('2' * '3') //множення діє тільки для номерів, тому мутує в номер
console.log(2 + 2 + 'px') //додавання зі 'странгою' робить 'стрінгу'
console.log('px' + 2 + 1) //додавання зі 'странгою' робить 'стрінгу'
console.log('2' - 1) //'стрінга' не може віднімати і тому це номер
console.log('2px' - 1) //коли є текст разом із номером воно не може створити номер тому NaN
console.log(null + 1) //нуль є (значенням) цифрою тому до нього можна додати
console.log(undefined + 1) //undefined (відсутнє значення) тому думає що там може бути все шо завгодно


