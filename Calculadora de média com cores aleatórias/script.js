//função responsável por gerar cores aleatorias
function geraCoresAleatorias() {
    let cor = "0123456789ABCDEF";
    let codigoDaCor = "#";

    for (let i = 0; i < 6; i++) {
        codigoDaCor += cor[Math.floor(Math.random() * 16)];
    }
    return codigoDaCor;
}

//variasveis que aramazenam as cores aleatorias
let corBackground = geraCoresAleatorias();
let corTitulo = geraCoresAleatorias();
let corSubtitulo = geraCoresAleatorias();

//aqui identifico os elementos html e os manipulo através do js
//background
document.getElementById('background').style.backgroundColor = corBackground;

//Título
let corFonteTitulo = document.getElementsByClassName('page-title');
corFonteTitulo[0].style.color = corTitulo;

//Subtítulo
let corFonteSubtitulo = document.getElementsByClassName('page-subtitle');
corFonteSubtitulo[0].style.color = corSubtitulo;


const nome = prompt("Digite seu nome completo");
const notaPrimeiroBimestre = prompt("Qual a nota de seu primeiro bimestre");
const notaSegundoBimestre = prompt("Qual a nota de seu segundo bimestre");
const notaTerceiroBimestre = prompt("Qual a nota de seu terceiro bimestre");
const notaQuartoBimestre = prompt("Qual a nota de seu quarto bimestre");
//Conversão das notas em números

const primeiroBimestre = Number(notaPrimeiroBimestre);
const segundoBimestre = Number(notaSegundoBimestre);
const terceiroBimestre = Number(notaTerceiroBimestre);
const quartoBimestre = Number(notaQuartoBimestre);

let notaFinal = ((primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4).toFixed(2);

if (notaFinal >= 6) {
    alert(`Você foi aprovado ${nome}. Aproveite as férias hehe.\nNota: ${notaFinal}`);
} else {
    alert(`Você foi reptovado ${nome}. Sem férias para você, volte a estudar.\nNota: ${notaFinal}`);
}

//DESAFIO DO PAULO SILVEIRA!!!!
console.log(((primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4).toFixed(2));
