

//function getRandomIntInclusive(min, max) {
  // return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let cards = []
let sum = 0

let hasblackjack = false
let alive = false

let player = {
     name : "jack",
     chips : 145

}


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

let message = " "
let messageEl = document.getElementById("message-el")
// console.log(messageEl)
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")


function getRandomCard() {
    rnum = meth.floor(math.random() * 13) + 1
    if(rnum === 1) {
        return 11
    } else if (rnum > 10) {
        return 10
    } else {
        return rnum
    }
}

function startGame() {
    alive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard

   renderGame()
}

function renderGame() {
    cardsEL.textContent = "cards: "
   for (let i = 0; i < cards.length; i++) {

       cardsEl.textContent += cards[i] + " "
   }

sumEl.textContent = "Sum: " + sum
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


}

// let newcardEL = document.querySelector(".newcard-btn")



function newCard() {
    if (alive === true && hasblackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}



