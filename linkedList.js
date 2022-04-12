let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function listValues(obj, arr = []) {
  if (obj.next === null) {
    arr.push(obj.value);
    return arr;
  }
  if (obj.next !== undefined) {
    arr.push(obj.value);
    return listValues(obj.next, arr);
  }
}
console.log(listValues(list));
