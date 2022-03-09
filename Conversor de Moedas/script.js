function ConverterEmDolar() {
    let valorEmDolar = parseFloat(document.getElementById("valorEmdolar").value)
    console.log(valorEmDolar)

    const conversaoEmReal = (valorEmDolar * 5.01).toFixed(2)

    let dolarConvertido = document.getElementById("valorConvertidoEmdolar")
    let elementoValorConvertido = `O valor em dolares é $ ${conversaoEmReal}`
    dolarConvertido.innerHTML = elementoValorConvertido

}

function ConverterEmEuro() {
    let valorEmEuro = parseFloat(document.getElementById("valorEmEuro").value)
    console.log(valorEmEuro)

    const conversaoEmReal = (valorEmEuro * 5.55).toFixed(2)

    let EuroConvertido = document.getElementById("valorConvertidoEmEuro")
    let elementoValorConvertido = `O valor em Real é R$ ${conversaoEmReal}`
    EuroConvertido.innerHTML = elementoValorConvertido


}

function ConverterEmIene() {
    let valorEmIene = parseFloat(document.getElementById("valorEmIene").value)
    console.log(valorEmIene)

    const conversaoEmReal = (valorEmIene * 0.04).toFixed(2)

    let ieneConvertido = document.getElementById("valorConvertidoEmIene")
    let elementoValorConvertido = `O valor em Real é R$ ${conversaoEmReal}`
    ieneConvertido.innerHTML = elementoValorConvertido

}