/* exported initial */
function initial(array) {
  const newArray = [];
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    newArray[k] = array[i];
    k++;
  }
  return newArray;
}
