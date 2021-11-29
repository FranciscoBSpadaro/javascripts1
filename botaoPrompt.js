document.querySelector('#bt1').addEventListener('click', promptMe);

function promptMe() {
   let msg = prompt("Envie uma mensagem");
    alert ("mensagem enviada");
    console.log(`Conteúdo da mensagem : ${msg}`)
}
console.log("😎")
