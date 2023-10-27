/* exported truncate */
function truncate(length, string) {
  const cutString = string.slice(0, length);
  const newWord = cutString + '...';
  return newWord;
}
