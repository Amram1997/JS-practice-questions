Array.prototype.myReduce = function (cb, initialValue) {
  let aggregate = initialValue || this[0];
  const start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    aggregate = cb(aggregate, this[i], i, this);
  }

  return aggregate;
};
const numbers = [1, 2, 3, 4];

const result = numbers.myReduce((acc, el) => {
  acc += el;
  return acc;
});
console.log(result);
