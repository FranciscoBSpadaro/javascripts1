class User {
  constructor(name, email,id) {
    this._name = name;
    this._email = email;
    this._id = id;
  }
  // permite que seja inserindo valores na classe usando set
  set name(string) {
    this._name = string;
  }
  // permitir que seja consultado os valores inseridos na classe com get , get nao precisa de parametros
  get name() {
    return this._name
  }

  // metodo para retorno das informaçoes para o console.log
  newUser() {
    return `${this.name} , and email ${this._email} foi incluido na classe com o id ${this._id}`;
  }
}

const user = new User("NickName", "nick@nicks.com.br", '1a');
const user1 = new User("Mythoz89x", "mythoz@gmail.com", 2);

console.log(user.newUser());
console.log(user1.newUser());
