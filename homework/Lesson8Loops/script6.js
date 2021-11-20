let k = 10;
let str = '';

for (let i = 0; i <= k - 1; i++) {
  for (let j = 0; j < k - i; j++) {
    str += '*';
  }
  str += '\n';
}
console.log(str);
