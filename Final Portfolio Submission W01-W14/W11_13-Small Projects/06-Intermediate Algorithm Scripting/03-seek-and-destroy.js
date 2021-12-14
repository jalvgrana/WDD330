function destroyer(arr, ...rest) {
  return arr.filter(item =>rest.indexOf(item) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);