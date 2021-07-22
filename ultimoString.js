const getLastCharacter = (x) => {return x[x.length - 1]} // se remover o 'x' [x.length - 1] retorna o numero de strings

console.log(getLastCharacter("Francisco"))


// alternatively:
const getLastCharacter1 = (x) => {return x.slice(-1)} // -1 retorna o ultimo indice de string -2 os dois ultimos

console.log(getLastCharacter1("Francisco"))

// run node ultimoString