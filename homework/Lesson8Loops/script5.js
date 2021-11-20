for (let i = 0; i <= 10; i++) {
    let str = '';
    for (let j = 0; j < 10 - i; j++) {
        str += ' ';
    }
    for (let k = 0; k < i; k++) {
        str += '*';
    }
    str += '\n';
    console.log(str);
}
