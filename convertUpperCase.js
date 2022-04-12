function convertUpperCase(str) {
  let newStr = str.split(" ");
  console.log(newStr);
  let convertString = newStr.map((item) => {
    return item.substring(0, 1).toUpperCase() + item.substring(1);
  });
  let joinString = convertString.join(" ");
  return joinString;
}
console.log(convertUpperCase("i love you"));
