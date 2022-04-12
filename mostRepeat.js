let arr = [1, 3, 4, 5, 3, 3, 4, 1, 7];
function mostRepeat(val) {
  let index = 1;
  let most = 0;
  let obj = {};
  for (let i = 0; i < val.length; i++) {
    if (val[i] in obj) {
      obj[val[i]] += index;
    } else {
      obj[val[i]] = index;
    }
  }
  console.log(obj);
  for (let key in obj) {
    if (obj[key] > most) {
      most = obj[key];
    }
  }
  for (let key in obj) {
    if (obj[key] === most) {
      return key;
    }
  }
}
console.log(mostRepeat(arr));
console.log(mostRepeat("aaabgkkkkkll"));
