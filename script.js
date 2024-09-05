
let coloritems = document.querySelectorAll(".coloritem")
let colorblock = document.querySelector(".colorblock")
let reset = document.querySelector(".reset")

let colors = ['green','yellow','red','black','orange','blue','brown']

coloritems.forEach(
    coloritem =>{
        coloritem.addEventListener('click',()=>{
            let randomNumber = Math.floor(Math.random()*colors.length)
            coloritem.style.backgroundColor= colors[randomNumber]
        })
    } 
)

reset.addEventListener('click',()=>{
    coloritems.forEach(
        coloritem =>{
            coloritem.style.backgroundColor= "white"
        }
    )
})




