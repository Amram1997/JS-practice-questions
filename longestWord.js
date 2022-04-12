function longestWord(str) {
  let newStr = str.split(" ");
  let maxWord = newStr[0];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length >= maxWord.length) {
      maxWord = newStr[i];
    } else {
      return maxWord;
    }
  }
}
console.log(longestWord("Web Development Tutorial"));

function longestWordForeach(str) {
  let newStr = str.split(" ");
  let maxWord = newStr[0];
  newStr.forEach((element) => {
    return element.length >= maxWord.length ? (maxWord = element) : maxWord;
  });
  return maxWord;
}

console.log(longestWordForeach("Web Development Tutorial"));
