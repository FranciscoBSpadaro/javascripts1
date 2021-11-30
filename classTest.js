class User {
  constructor(name, email,id,year) {
    this._name = name;
    this._email = email;
    this._id = id;
    this._year = year;
  }
  // permite que seja inserindo valores na classe usando set
  set name(string) {
    this._name = string;
  }
  // permitir que seja consultado os valores inseridos na classe com get , get nao precisa de parametros
  get name() {
    return this._name
  }
// metodo calculo da idade do usuário baseado na data de nascimento registrado na classe
  age() {
    let date = new Date();
    return date.getFullYear() - this._year;
  }
  // metodo para retorno das informaçoes para o console.log
  newUser() {
    return `O Usuário ${this._name} , foi criado usando o email ${this._email} tem o id ${this._id} e nasceu no ano de ${this._year} e tem a idade de`;
  }
}


const user = new User("Francisco Bianchi Spadaro", "francisco.spadaro@outlook.com", 'UUID123', '1989');
const user1 = new User("Mythoz89x", "mythoz@gmail.com", 2, 1990);

console.log(user.newUser(),user.age(),'anos');
console.log(user1.newUser(),user1.age(),'anos');

// herança
class Programmer extends User {
  constructor(name, programmingLanguage) {
    super(name);
    this._programmingLanguage = programmingLanguage;
  }

  writeCode() {
    console.log(
      this._name + ' is coding in ' + this._programmingLanguage + '.'
    );
  }
}

let user01 = new Programmer('Mythoz89x', 'JavaScript');


user01.writeCode(); 