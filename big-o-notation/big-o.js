/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * n = O(n)
    i < words.length; // 2 * n = O(2n) ~= O(n)
    i++ // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i]; // 2 * n = O(2n) ~= O(n)
    if (!seen[word]) {
      // 3 * n = O(3n) ~= O(n)
      seen[word] = true; // 2 * n = O(2n) ~= 0(n)
      unique[unique.length] = word; // 2 * n = O(2n) ~= O(n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n)
    i++ // 2 * n = O(2n)
  ) {
    const word = words[i]; // 2 * n = O(2n)
    let isUnique = true; // 1 * _n= O(n)
    for (
      let c = 0; // 1 * n = O(?)
      c < i; // 2 * n * n = O(2n^2)
      c++ // 2 * n * n = O(2n^2)
    ) {
      const comparing = words[c]; // 2 * n^2 = O(2n^2)
      if (comparing === word) {
        // 1 * n^2 = O(n^2)
        isUnique = false; // 1 * n^2 = O(n^2)
      }
    }
    if (isUnique) {
      // 1 * n = O(n)
      unique[unique.length] = word; // 2 * n = O(2n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(2n^2)
