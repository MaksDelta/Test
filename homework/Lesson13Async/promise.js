let isError = false;
const setError = () => {
    isError = true;
};

let user = null;
const setUser = (newUser) => {
    user = newUser;
};








function getUserCB (id, callback) {
    callback({id: id, name: 'anton'}, false);

    setTimeout(()=> {
        setUser({id: 'another id', name: 'another name'});
    },5000);
    
};

getUserCB('users-1', (user, error) => {
    if (error) {
        return setError();
    }   else {
        setUser(user)
    }
});

const getUserPromise = (userId) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            getUserCB(userId, (user, error) => {
        if (error) {
            return setError();
        }   else {
            setUser(user)
        }
})
resolve(user);
}, 3000);
         
});
};

getUserPromise('userID').then(result => {
    console.log('result ',result);
},
error => {
    console.log('error ' + error)
})


console.log(user);
console.log(isError);