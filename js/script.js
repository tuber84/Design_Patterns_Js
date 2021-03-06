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
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Yuriy"), new User(2, "Piter")];
// console.log(users)

function getUser(id) {
  const user = users.find((element) => element.id == id);
  if (user == null) {
    return  new NullUser();
  }else{
    return user;
  }
}

function printUeser(id) {
  const user = getUser(id);
  let box = document.querySelector('.alcohol_user')

  box.innerHTML = "Hellow, " + user.name +" !";


  if (user.hasAccess()) {
    box.innerHTML += "You have access"
    
  } else {
    box.innerHTML += "You are not allowed here"
    
  }
}
// все эти проверки на null каждый раз- это плохо, можно лучше!
printUeser(3);

// ----------------------------------------------------------------------------
//  тестовый коментарий для иминения и теста cmder


