const homeEl = document.getElementById('home-el')
const guestEl = document.getElementById('guest-el')
const scoreHome = document.getElementById('score-home')
const scoreGuest = document.getElementById('score-guest')
let homePoints = 0
let guestPoints = 0


function addTwoPointsToHome() {
    homePoints += 2
    homeEl.textContent = homePoints
}

function addThreePointsToHome() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function addFivePointsToHome() {
    homePoints += 5
    homeEl.textContent = homePoints
}

function addTwoPointsToGuest() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function addThreePointsToGuest() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function addFivePointsToGuest() {
    guestPoints += 5
    guestEl.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = homePoints
    guestEl.textContent = guestPoints
}

// if(homePoints > guestPoints) {

//     // scoreGuest.classList.remove("accent")
//     // scoreHome.classList.add('accent')
//     console.log('porca madonna')

// } else if (homePoints < guestPoints) {

//     // scoreHome.classList.remove("accent")
//     // scoreGuest.classList.add("accent")
//     console.log('porco dio')

// }
