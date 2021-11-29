// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

// Métodos Protótipos

class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}
var x = prompt("Digite o valor ")

var y = prompt("Digite o valor ")

let quadrado = new Retangulo(`${x}, ${y}`);

console.log(quadrado.area);