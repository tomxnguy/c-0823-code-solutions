/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const k = array[i];
    if (k) {
      newArray.push(k);
    }
  }
  return newArray;
}
