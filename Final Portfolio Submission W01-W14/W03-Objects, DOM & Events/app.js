//Building Objects
var myDog = {
    "name": "Rambo",
    "legs": 2,
    "tails": 1,
    "friends": ["Maria", "Juan"]
    };


//Using Objects for lookups
function phoneticLookup(val) {
    var result = "";

    var lookup = {
      alpha:"Adams",
      bravo:"Boston",
      charlie:"Chicago",
      delta:"Denver",
      echo:"Easy",
      foxtrot:"Frank" 
    }
    result = lookup[val];
    
    return result;
  }

  phoneticLookup("charlie");


//Testing objects for properties
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
}


//Accessing nested objects
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];

  
