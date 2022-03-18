function sort(arr) {
  let result = [];
  let leftOver = [];

  let min = Math.min.apply(Math, arr);
  leftOver = arr.filter(i => i != min);
  result.push(min);

  for (let n=0; n<arr.length-1; n++) {
    min = Math.min.apply(Math, leftOver);
    leftOver = leftOver.filter(i => i != min);
    result.push(min);
  }
  return result;
}