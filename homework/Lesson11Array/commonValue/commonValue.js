const array1 = [1, 2,];
const array2 = [2, 3,];

let duplicates = array1.filter(function(val) {
  return array2.indexOf(val) != -1;
});

console.log(duplicates);