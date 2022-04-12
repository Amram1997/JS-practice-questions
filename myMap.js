let arrArr = [1, 2, 7, 8, 10];
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};
let newArr = arrArr.myMap((elem) => {
  return elem;
});
console.log(newArr);
