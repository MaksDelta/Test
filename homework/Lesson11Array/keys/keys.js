let arr = [['name', 'Maks'], ['age', 25]];

// first variant
let obj = arr.reduce((o, [ key, value ]) => {
    o[key] = value;
    return o
}, {});

console.log(obj);


//second variant

let obj1 = Object.fromEntries(arr);

console.log(obj1);


//third variant

let obj2 = Object.assign(...arr.map(([key, val]) => ({[key]: val})));

console.log(obj2);


//four variant

let obj3 = arr.reduce(function (o, currentArray) {
  let key = currentArray[0], value = currentArray[1];
  o[key] = value;
  return o
}, {});

console.log(obj3);



