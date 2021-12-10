function reverse(array){
  let output = [], i;
  for (i = 0; i < array.length; i++){
    output.unshift(array[i]);
  }
  return output;
}

console.log(reverse([1,2,9,4]));