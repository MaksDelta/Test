function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let number = getRandom(1, 10)

let getRandom = +prompt('Введіть число від 1 до 10')
alert(getRandom)