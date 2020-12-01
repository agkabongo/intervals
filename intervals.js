//EXERCICE 1 

let word = 'prout'
let p = document.createElement('p')
let timeP = document.createElement('p')
let div = document.createElement('div')
div.className = 'apple'
document.body.appendChild(p)
document.body.appendChild(timeP)
document.body.appendChild(div)
let i = 0
let sec = 0
let min = 0

let display = () => {
    i++
    p.innerText = word.substring(0, i)
    setTimeout(display, 1000)
}

let timePassed = () => {
    sec++

    if (sec === 60) {
        sec = 0
        min++

    } else if (sec < 60 && min === 0) {
        timeP.innerText = sec + ' seconds have passed on the page singe it was opened'
    }

    if (min === 1) {
        timeP.innerText = 'a minute and ' + sec + ' seconds has passed on the page since it was opened'
    } else if (min > 1) {
        timeP.innerText = min + ' minutes and ' + sec + ' seconds have passed on the page since it was opened'
    }
    setTimeout(timePassed, 1000)
}
let move = (e) => {
    if (e.keyCode === 37 ) {
        x++
        div.style.left = x 
    } else if (e.keyCode === 39) {
        y--
        div.style.right  = y
     }
}

let fall = () => {
    
}

let apple = {
    x: 0,
    y: 0,
    a: 0
  }
  
  function gravity(){
    apple.a += 1
    apple.y += apple.a
    div.addEventListener('click', fall)
    document.addEventListener('keydown', move)
    setTimeout(gravity, 100)
  }

display()
timePassed()
gravity()