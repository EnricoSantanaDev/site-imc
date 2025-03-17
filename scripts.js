function calcularDesconto(){

    let pesoTotal = document.getElementById("peso").value
    let alturaTotal = document.getElementById("altura").value

    let valorFinal = pesoTotal / (alturaTotal * alturaTotal)
    document.getElementById("resultado").textContent = "valor final:" + valorFinal
}