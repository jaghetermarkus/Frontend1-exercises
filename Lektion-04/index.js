
// VARIABLER
// var variableName = "" 
let letVariableName = "text"
const constVariableName = 5.123456
const boolValue = true
const nullValue = null
const undefinedValue = undefined

// OBJECT
const objectValue = {
    id: 1,
    name: "Markus",
    lastName: "Karlsson",
    age: 34
}

// ARRAY
const arrayValue = ["Päron", "Apelsin", "Äpple", "Banan", {firstName: objectValue}, `Mitt namn är ${objectValue.name}`]

arrayValue.push('Clementin')

// console.log(arrayValue[5])

// MAP
const cheatCodes = new Map

cheatCodes.set('infinite gold', 123456787654)
cheatCodes.set('god mode', 1177)
cheatCodes.set('tank', 1990)

// console.log(cheatCodes.has('god mode'))
// console.log(cheatCodes.get('tank'))
// console.log(cheatCodes.keys())

// SET - Som en Array men den ser till att det alltid är unika värden i listan
const setVariable = new Set

setVariable.add(1)
setVariable.add(2)
setVariable.add(1)
setVariable.add(3)
setVariable.add(2)
setVariable.add(223)
setVariable.add(1337)
setVariable.add("Markus")

// console.log(setVariable)


// INDEX.HTML
const button = document.querySelector('.btn')

function thisIsMyFunction() {

}

button.addEventListener('click', thisIsMyFunction)


// Anonym funktion
button.addEventListener('click', function(){
    alert('Bra klickat!')    
})

// Lambda funktion
button.addEventListener('click', () => {

})