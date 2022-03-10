function ConverterEmAnosLuz() {
    let valorEmKm = parseFloat(document.getElementById("valorEmKm").value)


    //tudo isso em KM
    const segundosNoAno = 31536000
    const velocidadeLuzPorSegundo = 300000
    const velocidadeLuzPorminuto = velocidadeLuzPorSegundo * 60
    const velocidadeLuzPorHora = velocidadeLuzPorminuto * 60
    const velocidadeLuzPorDia = velocidadeLuzPorHora * 24
    const anoLuz = velocidadeLuzPorSegundo * segundosNoAno
    const proximaCentauri = 40000000000000
    console.log((proximaCentauri / anoLuz).toFixed(2) + "Anos")

    console.log("ano luz = " + velocidadeLuzPorSegundo * segundosNoAno)

    const segundosViajando = (valorEmKm / velocidadeLuzPorSegundo).toFixed(2)
    const minutosViajando = (valorEmKm / velocidadeLuzPorminuto).toFixed(2)
    const horasViajando = (valorEmKm / velocidadeLuzPorHora).toFixed(2)
    const diasViajando = (valorEmKm / velocidadeLuzPorDia).toFixed(2)
    const anosLuzViajando = (valorEmKm / anoLuz).toFixed(2)

    let elementoSegundos = document.getElementById("valorConvertidoEmSegundos")
    let elementoMinutos = document.getElementById("valorConvertidoEmMinutos")
    let elementoHoras = document.getElementById("valorConvertidoEmHoras")
    let elementoDias = document.getElementById("valorConvertidoEmDias")
    let elementoAnos = document.getElementById("valorConvertidoEmAnos")
    
    //texto 
    let elementoTexto = document.getElementById("texto")
    let texto = "Você irá viajar na velocidade da luz por:"
    elementoTexto.innerHTML = texto

    let valorConvertidoEmSegundos = `Segundos: ${segundosViajando}`
    let valorConvertidoEmMinutos = `Minutos: ${minutosViajando}`
    let valorConvertidoEmHoras = `Horas: ${horasViajando}`
    let valorConvertidoEmdias = `Dias: ${diasViajando}`
    let valorConvertidoEmAnos = `Anos: ${anosLuzViajando}`

    elementoSegundos.innerHTML = valorConvertidoEmSegundos 
    elementoMinutos.innerHTML = valorConvertidoEmMinutos
    elementoHoras.innerHTML = valorConvertidoEmHoras
    elementoDias.innerHTML = valorConvertidoEmdias
    elementoAnos.innerHTML = valorConvertidoEmAnos

}