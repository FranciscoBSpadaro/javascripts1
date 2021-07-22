/**
 * A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

Using Symbol() to create a unique identifiers, solves this problem:

‎Um símbolo JavaScript é um tipo de dados primitivo como Number, String ou Boolean.‎

‎Ele representa um identificador "oculto" único que nenhum outro código pode acessar acidentalmente.‎

‎Por exemplo, se diferentes codificadores quiserem adicionar uma propriedade person.id a um objeto de pessoa pertencente a um código de terceiros, eles podem misturar os valores uns dos outros.‎

‎Usando o Symbol() para criar um identificador único, resolve este problema:‎
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  // Symbol identificador unico 'oculto'
  let id = Symbol('id');
  person[id] = 140353;
  // Now Person[id] = 140353
  // but person.id is still undefined

  console.log(person[id])
  console.log(person.id)
  console.log(`The Person id is ${person[id]} The  Name is ${person.firstName} ${person.lastName} `)
  console.log(person)


  // run node symbolType.js

  /**
   * Symbols are always unique.

   If you create two symbols with the same description they will have different values.
   * Symbol("id") == Symbol("id") // return false
   */