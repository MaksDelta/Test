const arr = [1, 3, 5, 3, 2, 6, 3,];
    i = arr.length,
    result = [];
arr.sort(function (a, b) {
    return a - b;
});
for (let i = 0; i < arr.length; i++) {
    arr[i] != arr[i - 1] && arr[i + 1] != arr[i] && result.push(arr[i])
}

 console.log(result);
