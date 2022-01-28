// variáveis
const {floor, random } = Math
const btnGeneratePass = document.getElementById("btnGenerate")
const screen = document.getElementById("screen")

const charsList = ['0123456789', 'abcdefghijklmnopqrstuvwxyz',
				   'ABCDEFGHIJLMNOPQRSTUVWXYZ', '!@#$%^&*()+?><:']

const randChar = (min, max) => Math.floor(Math.random() * (max - min) + min)

function shuffleArray(array) {
    const newArray = []
    let number = Math.floor(Math.random() * array.length)
    let count = 1
    newArray.push(array[number])

    while (count < array.length) {
        const newNumber = Math.floor(Math.random() * array.length)
        if (!newArray.includes(array[newNumber])) {
            count++
            number = newNumber
            newArray.push(array[number])
        }
    }

    return newArray;
}

// Array.prototype.shuffle = shuffleArray()

const generate = () => {
    let password = []
    
    for (let itemChars of charsList) {
        let counter = 0
        
        while (counter < 2) {
            let rand = itemChars.split('')[randChar(0, itemChars.length)]
      
            if (!password.includes(rand)) {
                password.push(rand)
            }
            counter++
        }
    }

    const passShuffle = shuffleArray(password)
    return passShuffle.join('')
}
	
const render = () => screen.value = generate()

// renderização na DOM
btnGeneratePass.addEventListener("click", render)

// Variaveis para troca do Modo claro e escuro
const lightMode = "lightMode"
const main = document.getElementsByTagName("main")[0]
const h1 = document.getElementsByTagName("h1")[0]
const github = document.getElementById("github")
const link = document.getElementsByTagName("a")[0]
const img = document.getElementById("img")
const btnImg = document.getElementById("btnImg")

// Invoca a função changeImg quando a tela é carregada
window.addEventListener("load", function(){changeImg()})

// Adiciona a classe lightMode 
function changeMode () {
    main.classList.toggle(lightMode)
    h1.classList.toggle(lightMode)
    screen.classList.toggle(lightMode)
    btnGeneratePass.classList.toggle(lightMode)
    github.classList.toggle(lightMode)
    link.classList.toggle(lightMode)   
    img.classList.toggle(lightMode)
    changeImg()
}

// Substitui as imagens
function changeImg (){
    if(img.classList.contains("lightMode")){
        img.src="Img/lua.png"
    }else{
        img.src="Img/lampada.png"
    }    
}

btnImg.addEventListener("click", changeMode)