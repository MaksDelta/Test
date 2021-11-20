let n = 10;
let s = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    s += '*';
  }
  s += '\n';
}
console.log(s);