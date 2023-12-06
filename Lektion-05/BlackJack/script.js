const cards = new Map()

// SPADER
cards.set('images/svg/2_of_spades.svg', 2)
cards.set('images/svg/3_of_spades.svg', 3)
cards.set('images/svg/4_of_spades.svg', 4)
cards.set('images/svg/5_of_spades.svg', 5)
cards.set('images/svg/6_of_spades.svg', 6)
cards.set('images/svg/7_of_spades.svg', 7)
cards.set('images/svg/8_of_spades.svg', 8)
cards.set('images/svg/9_of_spades.svg', 9)
cards.set('images/svg/10_of_spades.svg', 10)
cards.set('images/svg/jack_of_spades.svg', 10)
cards.set('images/svg/queen_of_spades.svg', 10)
cards.set('images/svg/king_of_spades.svg', 10)
cards.set('images/svg/ace_of_spades.svg', 11)
// RUTER
cards.set('images/svg/2_of_diamonds.svg', 2)
cards.set('images/svg/3_of_diamonds.svg', 3)
cards.set('images/svg/4_of_diamonds.svg', 4)
cards.set('images/svg/5_of_diamonds.svg', 5)
cards.set('images/svg/6_of_diamonds.svg', 6)
cards.set('images/svg/7_of_diamonds.svg', 7)
cards.set('images/svg/8_of_diamonds.svg', 8)
cards.set('images/svg/9_of_diamonds.svg', 9)
cards.set('images/svg/10_of_diamonds.svg', 10)
cards.set('images/svg/jack_of_diamonds.svg', 10)
cards.set('images/svg/queen_of_diamonds.svg', 10)
cards.set('images/svg/king_of_diamonds.svg', 10)
cards.set('images/svg/ace_of_diamonds.svg', 11)
// KLÖVER
cards.set('images/svg/2_of_clubs.svg', 2)
cards.set('images/svg/3_of_clubs.svg', 3)
cards.set('images/svg/4_of_clubs.svg', 4)
cards.set('images/svg/5_of_clubs.svg', 5)
cards.set('images/svg/6_of_clubs.svg', 6)
cards.set('images/svg/7_of_clubs.svg', 7)
cards.set('images/svg/8_of_clubs.svg', 8)
cards.set('images/svg/9_of_clubs.svg', 9)
cards.set('images/svg/10_of_clubs.svg', 10)
cards.set('images/svg/jack_of_clubs.svg', 10)
cards.set('images/svg/queen_of_clubs.svg', 10)
cards.set('images/svg/king_of_clubs.svg', 10)
cards.set('images/svg/ace_of_clubs.svg', 11)
// HJÄRTER
cards.set('images/svg/2_of_hearts.svg', 2)
cards.set('images/svg/3_of_hearts.svg', 3)
cards.set('images/svg/4_of_hearts.svg', 4)
cards.set('images/svg/5_of_hearts.svg', 5)
cards.set('images/svg/6_of_hearts.svg', 6)
cards.set('images/svg/7_of_hearts.svg', 7)
cards.set('images/svg/8_of_hearts.svg', 8)
cards.set('images/svg/9_of_hearts.svg', 9)
cards.set('images/svg/10_of_hearts.svg', 10)
cards.set('images/svg/jack_of_hearts.svg', 10)
cards.set('images/svg/queen_of_hearts.svg', 10)
cards.set('images/svg/king_of_hearts.svg', 10)
cards.set('images/svg/ace_of_hearts.svg', 11)

const cardsArray = Array.from(cards)

const startBtn = document.querySelector('.start-game')
const drawBtn = document.querySelector('.draw-card')
const stopBtn = document.querySelector('.stop-game')
const myDiv = document.querySelector('.myCards')
const dealerDiv = document.querySelector('.dealer')
const dealerSum = document.querySelector('.dealer-value')
const mySum = document.querySelector('.my-value')
const popupH3 = document.querySelector('.popup-content h3')

let dealerValue = 0
let myValue = 0
let aceCount = 0
let dealerAceCount = 0

// Kollar om det finns ess som ska värderas som 1 istället för 11
const checkAce = function() {

        while (myValue > 21 && aceCount > 0) {
            myValue = myValue - 10
            aceCount = aceCount - 1
        } 
        
        if (myValue > 21 && aceCount === 0) {
            winner()
        }
}

// Kollar om det finns ess som ska värderas som 1 istället för 11
const checkDealerAce = function() {
    while (dealerValue > 21 && dealerAceCount > 0) {
        dealerValue = dealerValue - 10
        dealerAceCount = dealerAceCount - 1
    } 
}

// Första dragningen för dealer och spelare när spelet börjar
const startDraw = function() {
    showElements()
    for (let card = 0; card < 2; card++) {
        const card = document.createElement('img')
        let randomIndex = Math.floor(Math.random() * 52)
        const randomCard = cardsArray[randomIndex]
        card.src = randomCard[0]
        card.style.height = '7rem'
        card.style.margin = '.5rem'
        dealerDiv.appendChild(card)
        dealerValue = dealerValue + randomCard[1]
        if (randomCard[1] === 11) {
            dealerAceCount++
        }
        checkDealerAce()
        dealerValueUpdate()
    }
    for (let card = 0; card < 2; card++) {
        const card = document.createElement('img')
        let randomIndex = Math.floor(Math.random() * 52)
        const randomCard = cardsArray[randomIndex]
        card.src = randomCard[0]
        card.style.height = '7rem'
        card.style.margin = '.5rem'
        myDiv.appendChild(card)
        if (randomCard[1] === 11) {
            aceCount++
        }
        myValue = myValue + randomCard[1]
        checkAce()
        myValueUpdate()
    }
    startBtn.style.display = 'none'

    if (myValue === 21) {
        popupH3.textContent = 'BLACK JACK, DU VANN!!!'
        showPopup()
    }
}

// Drar nytt kort till spelare
const draw = function() {
    const card = document.createElement('img')
    let randomIndex = Math.floor(Math.random() * 52)
    const randomCard = cardsArray[randomIndex]
    card.src = randomCard[0]
    card.style.height = '7rem'
    card.style.margin = '.5rem'
    myDiv.appendChild(card)
    myValue = myValue + randomCard[1]
    if (randomCard[1] === 11) {
        aceCount++
    }
    checkAce()
    myValueUpdate()
}

// Drar nytt kort till dealer
const dealerDraw = function() {
    while (dealerValue < 17) {
        const card = document.createElement('img')
        let randomIndex = Math.floor(Math.random() * 52)
        const randomCard = cardsArray[randomIndex]
        card.src = randomCard[0]
        card.style.height = '7rem'
        card.style.margin = '.5rem'
        dealerDiv.appendChild(card)
        dealerValue = dealerValue + randomCard[1]
        if (randomCard[1] === 11) {
            dealerAceCount++
        }
        checkDealerAce()
        dealerValueUpdate()
    }
}

// Anropas när spelare stoppar, kollar om dealer ska dra mer kort och sen vem som vinner
const winner = function(){
    
    if (myValue <= 21) {
        dealerDraw()
    }

    if (dealerValue <= 21) {
        if (dealerValue > myValue || myValue > 21) {
            // Dealer win!
            popupH3.textContent = 'YOU LOOSE.... :('
            showPopup()
        } else if (myValue > dealerValue) {
            // You win!
            popupH3.textContent = 'DU VANN!'
            showPopup()
        } else {
            // Draw!
            popupH3.textContent = 'Draw :/'
            showPopup()
        }
    } else {
        // You win!
        popupH3.textContent = 'DU VANN!'
        showPopup()
    }

}

// Nolställer och döljer de element som inte ska visas
const reload = function() {
    startBtn.style.display = 'block';
    dealerValue = 0
    myValue = 0
    aceCount = 0
    dealerAceCount = 0
    myValueUpdate()
    dealerValueUpdate()
    emptyCardDiv()
    hideElements()
}

// Tömmer dealer/spelarens kort
const emptyCardDiv = function() {
    while (dealerDiv.firstChild) {
        dealerDiv.removeChild(dealerDiv.firstChild)
    }
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild)
    }
}

// Göm element som inte ska visas vid start
const hideElements = function() {
    drawBtn.style.display = 'none'
    stopBtn.style.display = 'none'
    const h2Elements = Array.from(document.querySelectorAll('h2'))
    
    h2Elements.forEach(x => {
        x.style.display = 'none'
    })

    const pElements = Array.from(document.querySelectorAll('p'))
    
    pElements.forEach(x => {
        x.style.display = 'none'
    })

    document.querySelector('hr').style.display = 'none'
}

// Visa element som ska synas under spelet
const showElements = function() {
    drawBtn.style.display = 'inline'
    stopBtn.style.display = 'inline'
    const h2Elements = Array.from(document.querySelectorAll('h2'))
    
    h2Elements.forEach(x => {
        x.style.display = 'inline'
    })

    const pElements = Array.from(document.querySelectorAll('p'))
    
    pElements.forEach(x => {
        x.style.display = 'inline'
    })

    document.querySelector('hr').style.display = 'block'
}

// Uppdatera p-tag med dealerns värde
const dealerValueUpdate = function(){
    dealerSum.textContent = dealerValue
}

// Uppdatera p-tag med spelarens värde
const myValueUpdate = function(){
    mySum.textContent = myValue
}

// Visa pop-up ruta när spelet är slut
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}
  
// Stänger pop-up ruta och aktiverar startskärm
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    reload()
}

// Eventlisteners för knapparna
startBtn.addEventListener('click', startDraw)
drawBtn.addEventListener('click', draw)
stopBtn.addEventListener('click', winner)