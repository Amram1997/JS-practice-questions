function sumArguments(...val) {
  return val.reduce((prev, curr) => {
    return prev * curr;
  });
}

console.log(sumArguments(1, 2, 3, 4));
console.log(sumArguments(4, 7));
