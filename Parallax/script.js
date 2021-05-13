let moon = document.getElementById("moon")
let text = document.getElementById("text")
let btn = document.getElementById("btn")
let stars = document.getElementById("stars")
let mountains_front = document.getElementById("mountains_front")
let mountains_behind = document.getElementById("mountains_behind")

window.addEventListener('scroll', function(){
    let value = window.scrollY
    stars.style.left = value * 0.5 + "px"
    text.style.marginRight = value * 2 + "px"
    btn.style.marginTop = value * 1.5 + "px"
    //moon.style.top = value * -0.6 + "px"
    moon.style.marginRight = value * 2 + "px"

    mountains_behind.style.top = value * 2 + "px"
    mountains_front.style.top = value * 0.1 + "px"
})