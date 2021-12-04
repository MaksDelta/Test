let user = {
    name: 'Maks',
    lastName: 'Delta',
    parents: {
        mother: {
            name: 'Svitlana',
        },
        father: {
            name: 'Bohdan',
        },
    },
    born: {
        day: 28,
        mounts: 'June',
        year: 1996,
    },
    age: 25,
    sex: 'male',
    nationality: 'Ukrainian',
    country: 'Ukraine',
    adress: {
        sity: 'Lviv',
        streat: 'Torfiana',
        house: 11,
    },
    skin: 'Withe',
    soul: 'Black',
    
};

console.log(user);

function copy() {
    let objCopy = {};
    let key;
    for (key in user) {
        objCopy[key] = user[key];
    }
    return objCopy;
}

let user2 = copy()
console.log(user2)