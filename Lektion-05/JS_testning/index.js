const h1Element = document.querySelector('.title')

// h1Element.style.backgroundColor = 'red'

h1Element.addEventListener('click', function() {
    h1Element.classList.add('pressed')
    // h1Element.className = 'pressed'

})

const button = document.querySelector('.btn')
const input = document.querySelector('#name-field')

const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')

button.addEventListener('click', function(){
    console.log(input);
    const paragraph = document.createElement('p')
    paragraph.textContent = `Jag heter ${input.value}`
    paragraph.style.margin = 0
    paragraph.style.padding = 0
    box1.appendChild(paragraph)
})
