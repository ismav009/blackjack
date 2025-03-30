let firstcard = 3
let secondcard = 4
function getRandomIntInclusive(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum = firstcard + secondcard

let hasblackjack = false
let alive = true

let message = " "
let messageEl = document.getElementById("message-el")
// console.log(messageEl)

let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")

function startGame() {
   
cardsEl.textContent = "Cards: " + firstcard + " " + secondcard
if (sum <= 20) {
   message = "Do you want to draw a new card? Your cards add up to " + sum

   
} else if (sum ===21) {
   message = "You've got Blackjack!"
   hasblackjack = true
} else {
   message = "You're out of the game!"
   alive = false
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum

}

let newcardEL = document.querySelector(".newcard-btn")
function newCard() {
  message = "Your new card is " + getRandomIntInclusive(2, 11)
  console.log(message)

}



