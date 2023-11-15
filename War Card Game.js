
const cardSuits= ["♠", "♣", "♥", "♦"]
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let playerSum = 0;

//classes that I used for Cards, Deck, Player.
class Deck {
    constructor(cards = deckShuffled()){
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }



   shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
    }
   } 
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}


class Player {
    constructor(name){
        this.name = name,
        this.hand = [],
        this.score = 0
    }
}

function deckShuffled(){
    return cardSuits.flatMap(suit => {
       return cardValues.map(value => {
        return new Card(suit, value)
       }) 
    })
}

//cards are being handed out with 26 per player

function startWar(){
const newShoot = new Deck()
newShoot.shuffle()

const midWar = Math.ceil(newShoot.numberOfCards /2)

let playerOne = new Player("Nick")
let playerTwo = new Player ("Michael")
playerOne.hand = newShoot.cards.slice(0, midWar)
playerTwo.hand = newShoot.cards.slice(midWar, newShoot.numberOfCards)
console.log(playerOne, playerTwo)

  let testCard1 = playerOne
  let testCard2 = playerTwo
 for (let i = 0; i < 26 ; i++) {
     console.log(testCard1.hand[i].value, testCard2.hand[i].value)
    if (testCard1.hand[i].value > testCard2.hand[i].value){
              console.log("player 1 won")
                testCard1.score += 1
              } else if (testCard2.hand[i].value > testCard1.hand[i].value){
                 console.log("player 2 won")
                 testCard2.score += 1
 } else{
    console.log("Tie no points")
    
 }
 console.table({
    player: playerOne.name,
    score: testCard1.score,
    "player number": 1,
 });
 console.table({
    player:playerTwo.name,
    score: testCard2.score,
    "player number": 2,
 })
 }
 

 function final(score) {
    playerSum = score => {
      return previousValue + currentValue;
    };
    return playerSum
}


let playerOneTotalScore = playerSum.score;
let playerTwoTotalScore = playerSum.score;
if (playerOneTotalScore > playerTwoTotalScore) {
    console.log(- "Game Over - Player One Wins with", playerOneTotalScore);
} else if (playerTwoTotalScore > playerOneTotalScore) {
  console.log(-"Game Over - Player Two Wins with", playerTwoTotalScore);
} else {
    console.log("DRAW")
}
}
startWar() 