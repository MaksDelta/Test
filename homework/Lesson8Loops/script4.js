for (let i = 0; i < 10; i++) {
    let str = '';
    for (let j = 0; j < 10 - i; j++) {
        str += '*';
    }
  str += '\n';
  console.log(str);
}