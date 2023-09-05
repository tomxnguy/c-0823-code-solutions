/* exported getLastChar */
function getLastChar(string) {
  for (let i = string.length - 1; i < string.length; i++) {
    if (i) return string[string.length - 1];
  }
}
