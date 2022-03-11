function geraCorAleatoria(){
    let cor = "0123456789ABCDEF";
    let codigo = "#";

    for(let i = 0; i < 6; i++){
        codigo += cor[Math.floor(Math.random() * 16)]
    }
    return codigo;
}

let background = document.getElementById("background").style.backgroundColor = geraCorAleatoria();
let titulo = document.querySelector(".page-title").style.color = geraCorAleatoria();
let subtitulo = document.querySelector(".page-subtitle").style.color = geraCorAleatoria();


let numeroSecreto;
let tentativas = 3;


function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * 11);;
    console.log(`O número secreto é ${numeroSecreto}`);
    return numeroSecreto;
}
gerarNumeroSecreto();

function Chutar() {

    let valorCampo = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    resultado.style.color = geraCorAleatoria()
    let resultadoNaTela = document.getElementById("tentativas");
    resultadoNaTela.style.color = geraCorAleatoria();
    let maiorMenor = document.getElementById("resultadoMaiorMenor");
    maiorMenor.style.color = geraCorAleatoria();


    if (tentativas == 0){
        resultado.innerHTML = `Suas tentativas acabaram, O número secreto era ${numeroSecreto}`
        resultadoNaTela.innerHTML = "";
        maiorMenor.innerHTML = "";
    }

    if (tentativas > 0) {
        if (valorCampo == numeroSecreto) {
            tentativas--;
            resultado.innerHTML = `Você acertou o número secreto: ${numeroSecreto}`
            maiorMenor.innerHTML = "Um novo número foi gerado";
            valorCampo = gerarNumeroSecreto();
            tentativas = 3;
            resultadoNaTela.innerHTML = `Número de tentativas restantes ${tentativas}`
            console.log("tentativas " + tentativas)
        } else if (valorCampo < 0 || valorCampo > 10) {
            console.log("entrei aqui")
            resultado.innerHTML = `Digite um número entre 0 e 10, por favor`
            console.log("tentativas " + tentativas)
        } else if (valorCampo < numeroSecreto) {
            tentativas--;
            resultado.innerHTML = `Você errou!`
            maiorMenor.innerHTML = `O número secreto é maior que ${valorCampo}`
            resultadoNaTela.innerHTML = `Número de tentativas restantes ${tentativas}`
        } else if (valorCampo > numeroSecreto) {
            tentativas--;
            resultado.innerHTML = `Você errou!`
            maiorMenor.innerHTML = `O número secreto é menor que ${valorCampo}`
            resultadoNaTela.innerHTML = `Número de tentativas restantes ${tentativas}`
        }
        console.log("tentativas " + tentativas)
    } 


}
