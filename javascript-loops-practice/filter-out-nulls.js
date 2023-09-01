/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNulls = [];
  for (let i = 0; i < values.length; i++) {
    const k = values[i];
    if (k) {
      noNulls.push(k);
    }
  }
  return noNulls;
}
