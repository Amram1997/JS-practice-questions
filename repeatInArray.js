"Write a function which will remove all repeated items of array";
let testArray = [1, 4, 5, 5, 7, 7, 7, 9, 3, 4, 4];
function repeatInArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArray.indexOf(arr[i]) === -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(repeatInArray(testArray));

function repeatInArrayReduce(arr) {
  return arr.reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
      prev.push(curr);
    }
    return prev;
  }, []);
}
console.log(repeatInArrayReduce(testArray));
