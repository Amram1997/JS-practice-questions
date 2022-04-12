let obj = {
  get date() {
    return new Date().getFullYear();
  },
};
console.log(obj.date);
