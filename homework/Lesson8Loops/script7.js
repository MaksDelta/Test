for (let i = 1; i <= 10; i++) {
    let str = '';
  for (let j = 1; j <= 10 - i; j++) {
    str += '|'; // не знайшов як зробити суцільну полоску
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
  console.log(str);
}
