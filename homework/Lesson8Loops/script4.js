for (let i = 0; i < 10; i++) {
    let s = '';
    for (let j = 0; j < 10 - i; j++) {
        s += '*';
    }
  s += '\n';
  console.log(s);
}