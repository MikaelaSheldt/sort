function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  for (let j = array.length-1; j >= 0; j --) {
    let basket = false;
    console.log('j is', j, );
    for (let i = 0; i < j; i ++) {
      console.log('i =', i, 'value is', array[i]);
      if (array[i] > array[i+1]) {
        basket = array[i];
        array[i] = array[i+1];
        array[i+1] = basket;
      }
    }
    if (basket === false) {
      console.log("I'm in the basket");
      return array;
    }
  }
  return array;
}

let test = bubbleSort([3, 4, 1, 9, 2, 5]);

console.log(test);

console.log('test');
