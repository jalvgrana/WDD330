function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  collection.forEach(item => {
    let countProps = 0;
    let countEqualProps = 0; 
    for (let key in source) {
      countProps++
      if(item[key] && item[key] === source[key]) {
        countEqualProps++;
      }      
    }

      if (countEqualProps === countProps) {
        arr.push(item);
      }

  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });