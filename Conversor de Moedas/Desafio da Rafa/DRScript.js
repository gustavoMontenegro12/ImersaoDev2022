function Converter() {
    let valorEmDolar = parseFloat(document.getElementById("valorEmdolar").value)
    console.log(valorEmDolar)

    const conversaoDolarEmReal = (valorEmDolar * 5.01).toFixed(2)

    let dolarConvertido = document.getElementById("valorConvertidoEmdolar")
    let elementoConersaoDolarEmReal = `O valor em dolares é $ ${conversaoDolarEmReal}`
    dolarConvertido.innerHTML = elementoConersaoDolarEmReal

    let valorEmEuro = parseFloat(document.getElementById("valorEmEuro").value)
    console.log(valorEmEuro)

    const conversaoEuroEmReal = (valorEmEuro * 5.55).toFixed(2)

    let EuroConvertido = document.getElementById("valorConvertidoEmEuro")
    let elementoConersaoEuroEmReal = `O valor em Real é R$ ${conversaoEuroEmReal}`
    EuroConvertido.innerHTML = elementoConersaoEuroEmReal



    let valorEmIene = parseFloat(document.getElementById("valorEmIene").value)
    console.log(valorEmIene)

    const conversaoIeneEmReal = (valorEmIene * 0.04).toFixed(2)

    let ieneConvertido = document.getElementById("valorConvertidoEmIene")
    let elementoConversaoIeneEmReal = `O valor em Real é R$ ${conversaoIeneEmReal}`
    ieneConvertido.innerHTML = elementoConversaoIeneEmReal

}