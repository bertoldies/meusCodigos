
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function newGame() {
    window.location.reload()
}


function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1)
   console.log(computerNumber)
}

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('textOutput').style.color = 'blue';
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
            document.getElementById('textOutput').style.color = 'orange';
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
            document.getElementById('textOutput').style.color = 'green';
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
           }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
        document.getElementById('textOutput').style.color = 'red';
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

   
}