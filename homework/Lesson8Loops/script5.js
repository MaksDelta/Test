let t = 10;
let st = '';
for (let i = 1; i <= t; i++) {
  for (let j = 0; j < t - i; j++) {
    st += ' ';
  }
  for (let k = 0; k < i; k++) {
    st += '*';
  }
  st += '\n';
}
console.log(st);