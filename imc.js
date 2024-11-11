const peso = document.querySelector('.peso')
const altura = document.querySelector('.alt')
const result = document.querySelector('.result')

const calcBtn = document.querySelector('.calcBtn')
const cleanBtn = document.querySelector('.cleanBtn')

calcBtn.addEventListener('click', () => {
    const pesoValue = parseFloat(peso.value)
    const alturaValue = parseFloat(altura.value)
    const imc = pesoValue / (alturaValue * alturaValue)

    let classificacao = ''

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso ideal. Grau de obesidade é 0.'
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Seu peso ideal. Grau de obesidade é 0.'
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso, acima do peso ideal. Grau de obesidade é 1.'
    } else if (imc >= 30 && imc < 39.9) {
        classificacao = 'Obesidade, bem acima do peso ideal. Grau de obesidade é 2.'
    } else if (imc <= 40) {
        classificacao = 'Obesidade grave, muito acima do peso ideal. Grau de obesidade é 3.'
    } else {
        classificacao = 'Valores inválidos, por favor tente novamente.'
    }

    if (classificacao === 'Valores inválidos, por favor tente novamente.') {
        result.innerHTML = classificacao    
    } else {
        result.innerHTML = `Seu IMC: ${imc.toFixed(2)} ${classificacao}`
    }
})

cleanBtn.addEventListener('click', () => {
    peso.value = ''
    altura.value = ''
    result.innerHTML = ''        
})

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a')
    const sections = document.querySelectorAll('.calculator-section')

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const targetId = link.getAttribute('href').substring(1)
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active')
                } else {
                    section.classList.remove('active')
                }
            })
        })
    })

    // Ativar uma seção específica como padrão
    const defaultSectionId = 'matCalc' // ID da seção desejada
    const defaultSection = document.getElementById(defaultSectionId)
    if (defaultSection) {
        sections.forEach(section => {
            section.classList.remove('active')
        })
        defaultSection.classList.add('active')
    } else if (sections.length > 0) {
        sections[0].classList.add('active')
    }
})