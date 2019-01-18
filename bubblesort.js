function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  for (let j = array.length-2; j = 0; j --) {
    for (let i = 0; i < j; i ++) {
      let basket = false;
      if (array[i] > array[i+1]) {
        basket = array[i];
        array[i] = array[i+1];
        array[i+1] = basket;
      }
      if (basket === false) {
        return array;
      }
    }
    return array;
  }
}

let test = bubbleSort([]);

console.log(test);

console.log('test');
