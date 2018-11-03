let jumble_array = (arr, n) => {
  let result = new Array(n)
  let len = arr.length
  let taken = new Array(len)
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result
}

export { jumble_array }