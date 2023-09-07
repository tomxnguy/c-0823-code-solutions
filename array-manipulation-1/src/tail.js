/* exported tail */
function tail(array) {
  const newArray = [];
  let k = 0;
  for (let i = 1; i < array.length; i++) {
    newArray[k] = array[i];
    k++;
  }
  return newArray;
}
