/**
 * Bitwise XOR (^)
The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
 */

const x = (x, y) => { return x ^ y };

console.log(`Resultado em bits ${x (3, 11)}`)
console.log(`Resultado em bits ${x (6, 22)}`)
console.log(`Resultado em bits ${x (12, 44)}`)

//binario para decimal
var binary = "100000000";
const decimal = parseInt(binary, 2);   // raiz 2
console.log(`O Valor em Decimal é ${decimal}`); // 100000000 = 256

//decimal para binario
const dec2bin = (x) => {return (x >>> 0).toString(2)} //  (2) é a raiz e pode ser base entre 2 e 36
// operador bit a bit de deslocamento à direita não assinado ( >>>) permite exibir numeros negativos corretamente
console.log(`O Numero Binario é ${dec2bin(256)}`)  //  256 = 100000000

// node bitwiseXor.js