"use strict"  // ajuda a nao sobescrever as propriedades 

class Aluno {
    get nota (){
        return 6
    }
}

let aluno = new Aluno()
aluno.nota = 10   // sem use strict iria retornar 6  , com use strict retorna type error pois o get da classe não se pode alterar ou subscrever
console.log(aluno.nota)



/**
 * https://www.youtube.com/watch?v=-iiSEKTotyg
 *  */ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode
 