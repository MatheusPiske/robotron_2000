const tintas = document.querySelectorAll("[tipo]")
const lista_tintas = document.querySelector(".lista")

function mostraTintas() {
    tintas.forEach((element) => {
        element.classList.toggle("esconder")
    })
}
