const bar = document.querySelector('.phone-svg')
const dropMenu = document.querySelector('.phone-drop-menu')
const mobileClose = document.querySelector('.phone-close')

bar.onclick = function (){
    dropMenu.classList.toggle('open')
}
mobileClose.onclick = function (){
    dropMenu.classList.toggle('open')
}

const icon = document.querySelector('.click-here')

setTimeout(()=>{
    icon.classList.add('hiddenElement')
},500)