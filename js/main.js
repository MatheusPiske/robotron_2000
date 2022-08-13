// A função addEventListener só captura um elemento de cada vez

const upgrades = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const img_robotron = document.querySelector(".robo")
const robos = [
    "img/robotron_amarelo.png",
    "img/robotron_azul.png",
    "img/robotron_branco.png",
    "img/robotron_preto.png",
    "img/robotron_rosa.png",
    "img/robotron_vermelho.png"
]
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

let i = 1
img_robotron.addEventListener("click", () => {
    img_robotron.setAttribute('src', robos[i])
    if (i <= 5) {
        i = i + 1
    }else{
        i = 0
        img_robotron.setAttribute('src', robos[i])
        i = i + 1
    }
})


upgrades.forEach((element) => {
    element.addEventListener("click", (event) => {
        if(mudaNome(event.target.dataset.controle, event.target.parentNode) === true){
            atualizaEstatistica(event.target.dataset.peca, event.target.dataset.controle)
        }
    })
})

function mudaNome(input, peca_pai) {
    const peca = peca_pai.querySelector("[data-contador]")
    if(input === "+") {
        peca.value = parseInt(peca.value) + 1
        return true
    }else{
        if((parseInt(peca.value) - 1) < 0){
            alert("Você não pode utilizar números negativos!")
            return false
        }else{
            peca.value = parseInt(peca.value) - 1
            return true
        }
    }
}

function atualizaEstatistica(input, operacao) {
    estatisticas.forEach((element) => {
        const nome_estatistica = element.dataset.estatistica
        const valor_estatistica = element.textContent
        
        // Utilize o código abaixo para entender a conexão feita ao objeto do projeto

        // console.log(element.dataset.estatistica)
        // console.log(element.textContent)
        // console.log(pecas[input][element.dataset.estatistica])
        
        if(operacao === "+") {
            element.textContent = parseInt(valor_estatistica) + pecas[input][nome_estatistica]
        }else{
            element.textContent = parseInt(valor_estatistica) - pecas[input][nome_estatistica]
        }
    })
}
