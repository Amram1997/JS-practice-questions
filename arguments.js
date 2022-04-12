//Return the sum of all arguments passed to function.
//Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4

function sumArguments(...val) {
  return val.reduce((prev, curr) => {
    return prev * curr;
  });
}

console.log(sumArguments(1, 2, 3, 4));
console.log(sumArguments(4, 7));
