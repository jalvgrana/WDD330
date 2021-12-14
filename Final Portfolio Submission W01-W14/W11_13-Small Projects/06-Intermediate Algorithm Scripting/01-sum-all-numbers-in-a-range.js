function sumAll(arr) {
  const sortedArr = arr.sort(compareFuction);
  let sum = 0;
  for (let i=sortedArr[0]; i <= sortedArr[1]; i++) {
    sum +=i;
  }
  return sum;
}

function compareFuction(a,b){
  return (a-b);
}

console.log(sumAll([1, 4]));