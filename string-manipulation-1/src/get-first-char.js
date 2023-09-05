/* exported getFirstChar */
function getFirstChar(string) {
  for (let i = 0; i < string.length; i++) {
    if (i) {
      return string[0];
    }
  }
}
