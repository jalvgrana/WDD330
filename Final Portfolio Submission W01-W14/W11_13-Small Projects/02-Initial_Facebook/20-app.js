var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "JavaScript is soooo coool!",
  },
  {
    username: "Mitch",
    timeline: "JavaScript is pretty coool!",
  }, //esa coma del final se puede poner o no en el úlitmo elemento
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password!");
  }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);
