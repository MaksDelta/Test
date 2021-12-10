function noRepeat(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let str = [1, 3, 5, 3, 2, 6, 3, 6, 2];

console.log(noRepeat(str));



//second variant

let a = [1, 3, 5, 3, 2, 6, 3, 6, 2];

function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

console.log(uniq(a));