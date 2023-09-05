/* exported isVowel */
function isVowel(character) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowel.length; i++) {
    if (character === vowel[i]) {
      return true;
    }
  }
  return false;
}
