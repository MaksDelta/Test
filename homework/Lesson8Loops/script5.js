for (let i = 1; i <= 10; i++) {
    let st = '';
    for (let j = 0; j < 10 - i; j++) {
        st += ' ';
    }
    for (let k = 0; k < i; k++) {
        st += '*';
    }
    st += '\n';
    console.log(st);
}
