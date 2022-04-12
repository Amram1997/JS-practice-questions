function subStr(str, sub) {
  if (str.includes(sub)) {
    return true;
  } else {
    return false;
  }
}
console.log(subStr("hello", "ell"));
console.log(subStr("kill", "lolo"));
