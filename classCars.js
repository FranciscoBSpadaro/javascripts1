/**
 * JavaScript Classes
JavaScript Classes are templates for JavaScript Objects.

Use the keyword class to create a class.

Always add a method named constructor():

JavaScript Classes são modelos para Objetos JavaScript.

Use a palavra-chave para criar uma classe.class

Adicione sempre um método chamado:constructor()

class ClassName {
  constructor() { ... }
}
 */

/**
 * class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  } /**
  The example above creates a class named "Car".

The class has two initial properties: "name" and "year".

A JavaScript class is not an object.

It is a template for JavaScript objects.

Uma classe JavaScript não é um objeto.

É um modelo para objetos JavaScript.
  */

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  

  
  const myCar1 = new Car("Ford", 2014)
  const myCar2 = new Car("Audi", 2019)

  console.log(myCar1)
  console.log(myCar2)
  console.log(`Meu carro é um  ${myCar1.name} ele tem ${myCar1.age()}  anos.`)
  console.log(`Meu carro é um  ${myCar2.name} ele tem ${myCar2.age()}  anos.`)

  // run  node classCars.js
