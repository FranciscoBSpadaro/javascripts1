class User {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  // permite que seja inserindo valores na classe usando set
  set name(string) {
    this._name = string;
  }
  set email(string) {
    this._email = string;
  }
  // permitir que seja consultado os valores inseridos na classe com get , get nao precisa de parametros
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }

  newUser() {
    return `${this.name} , and email ${this._email} foi incluido na classe`;
  }
}

const user = new User("NickName", "nick@nicks.com.br");
const user1 = new User("Mythoz89x", "mythoz@gmail.com");

console.log(user.newUser());
console.log(user1.newUser());
