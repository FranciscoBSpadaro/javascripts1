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

let quadrado = new Retangulo(10, 10);

console.log(quadrado.area);