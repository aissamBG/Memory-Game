let name = document.querySelector(`.name span`)
let number = document.querySelector(`.number span`)
let cardZone = document.querySelector(`.card-zone`)
let imgs = document.querySelectorAll(`.back img`)
let button = document.querySelector(`.start-game div`)
let replay = document.querySelector(`.game-over`)
let flippImg = []
let countWrongTry = 0
let countRightTry = 0
let imgSrc = ["./pic-game/Albert.jpg", "./pic-game/alexander.jpg", "./pic-game/algorithm.jpg", "./pic-game/av.jpg", "./pic-game/bee.jpg", "./pic-game/bird.jpg", "./pic-game/butterfly.jpg", "./pic-game/cheval.jpg", "./pic-game/cobra.jpg", "./pic-game/dog.jpg", "./pic-game/cat2.jpg", "./pic-game/tesla.jpg", "./pic-game/pantera.jpg", "./pic-game/newton.jpg", "./pic-game/netche.jpg", "./pic-game/leipntez.jpg", "./pic-game/l9irch.jpg", "./pic-game/john-luck.jpg", "./pic-game/hamster.jpg", "./pic-game/farabi.jpg", "./pic-game/Albert.jpg", "./pic-game/alexander.jpg", "./pic-game/algorithm.jpg", "./pic-game/av.jpg", "./pic-game/bee.jpg", "./pic-game/bird.jpg", "./pic-game/butterfly.jpg", "./pic-game/cheval.jpg", "./pic-game/cobra.jpg", "./pic-game/dog.jpg", "./pic-game/cat2.jpg", "./pic-game/tesla.jpg", "./pic-game/pantera.jpg", "./pic-game/newton.jpg", "./pic-game/netche.jpg", "./pic-game/leipntez.jpg", "./pic-game/l9irch.jpg", "./pic-game/john-luck.jpg", "./pic-game/hamster.jpg", "./pic-game/farabi.jpg"]

imgs.forEach(img => {
    let index = Math.floor(Math.random() * imgSrc.length);
    img.setAttribute(`src`, imgSrc[index])
    imgSrc.splice(index, 1)
})

button.onclick = () => {
    button.parentNode.style = "display:none"
    let n = prompt(`Type your name`)
    if (n) name.textContent = n
    else name.textContent = `Unknown`
}
cardZone.onclick = (e) => {
    if (e.target.classList.contains(`front`)) {
        e.target.parentNode.classList.add(`flipped`)
        flippImg.push(e.target.parentNode)

        if (flippImg.length > 1) {
            cardZone.style.pointerEvents = "none"
            isImgEqual(e, e.target.parentNode.querySelector(`.back img`).getAttribute(`src`))
        }
    }
}

let isImgEqual = (e, img) => {
    if (img === flippImg[flippImg.length - 2].querySelector(`.back img`).getAttribute(`src`)) {
        console.log(`images equal`)
        flippImg = []
        let wait = setInterval(() => {
            cardZone.style = "pointer-events:auto"
        }, 1000)
        setInterval(() => clearInterval(wait), 1000)
        document.getElementById(`success2`).play()
        countRightTry++
        if (countRightTry === 20) {
            document.getElementById(`success`).play()
            replay.style = "display:block"
        }
    } else {
        countWrongTry++
        number.textContent = countWrongTry;
        console.log(`images not equal`)
        let removeFlip = setInterval(() => notEqual(e), 1000)
        setInterval(() => { clearInterval(removeFlip) }, 1000)
        document.getElementById(`failure`).play()
    }
}

function notEqual(e) {
    e.target.parentNode.classList.remove(`flipped`)
    flippImg[flippImg.length - 2].classList.remove(`flipped`)
    flippImg = [];
    console.log(flippImg)
    cardZone.style = "pointer-events:auto"
}

