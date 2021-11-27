function sayMe (sayYes, SayNo) {
    let answer = confirm('Що ти скажеш?');
    if (answer) {
        sayYes();
    } else {
        SayNo();
    }
}

function positiveReply() {
    alert('Yes');
}

function negativeReply() {
    alert('No');
}

sayMe(positiveReply, negativeReply)