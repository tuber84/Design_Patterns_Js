"use strict";

//юез использования патерана нуль-обьекта:

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name == "Yuriy";
  }
}

const users = [new User(1, "Yuriy"), new User(2, "Piter")];
// console.log(users)

function getUser(id) {
  return users.find((element) => element.id == id);
}

function printUeser(id) {
  const user = getUser(id);

  let name = "Guest"; //вынуждены каждыц раз проверять на гостя
  if (user != null && user.name != null) name = user.name;
  console.log("Hellow " + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUeser(3)

// ----------------------------------------------------------------------------