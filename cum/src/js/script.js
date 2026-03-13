/* CONTADOR */

function actualizarCuenta(){

const ahora = new Date()

let año = ahora.getFullYear()

let evento = new Date(año,2,28,18,0,0)

if(ahora > evento){
evento = new Date(año+1,2,28,18,0,0)
}

const diferencia = evento - ahora

const dias = Math.floor(diferencia/(1000*60*60*24))
const horas = Math.floor((diferencia/(1000*60*60))%24)
const minutos = Math.floor((diferencia/(1000*60))%60)
const segundos = Math.floor((diferencia/1000)%60)

document.getElementById("countdown").innerHTML =
`${dias} DÍAS ${horas}H ${minutos}M ${segundos}S`

}

setInterval(actualizarCuenta,1000)
actualizarCuenta()


/* COLORES PARA EFECTOS */

const colors = ["#ff3b3b","#ffd93b","#3bff91","#3bb9ff","#ff3be1","#ffffff"]


/* CONFETTI */

function createConfetti(){

const confetti = document.createElement("div")

confetti.classList.add("confetti")

confetti.style.left = Math.random()*100 + "vw"

confetti.style.background = colors[Math.floor(Math.random()*colors.length)]

confetti.style.animationDuration = (4+Math.random()*3) + "s"

document.body.appendChild(confetti)

setTimeout(()=>confetti.remove(),7000)

}

setInterval(createConfetti,120)


/* FUEGOS ARTIFICIALES */

function createFirework(){

const x = Math.random()*window.innerWidth
const y = Math.random()*window.innerHeight*0.6

for(let i=0;i<25;i++){

const particle = document.createElement("div")

particle.classList.add("particle")

particle.style.left = x+"px"
particle.style.top = y+"px"

particle.style.background = colors[Math.floor(Math.random()*colors.length)]

const angle = Math.random()*2*Math.PI
const distance = Math.random()*120

const moveX = Math.cos(angle)*distance+"px"
const moveY = Math.sin(angle)*distance+"px"

particle.style.setProperty('--x',moveX)
particle.style.setProperty('--y',moveY)

document.body.appendChild(particle)

setTimeout(()=>particle.remove(),1000)

}

}

setInterval(createFirework,2500)


/* MUSICA CUANDO APARECE EL 19 */

const music = document.getElementById("music")

window.addEventListener("load", () => {

music.play().catch(() => {

document.addEventListener("click", () => {
music.play()
},{ once:true })

})

})