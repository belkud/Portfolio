import './style.css'



let button = document.querySelector('.btn')
button.addEventListener('click', function(){
  console.log('55555');
  
})

let x =document.querySelector('.coordinate') as HTMLDivElement
document.addEventListener ('mousemove', function(event){
  x.innerHTML= `координаты окна по Х ${event.clientX} <br> координаты окна по У ${event.clientY}`
})