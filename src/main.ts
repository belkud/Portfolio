import './style.css'


 
// ! ящик с шириной экрана (пиксели)
const width_of_display = document.querySelector ('#width_of_display') as HTMLButtonElement
window.addEventListener ('resize', ()=> {
  let computedStyle = getComputedStyle(document.body)
  width_of_display.innerHTML = 'ширина экрана ' + computedStyle.width 
  
})




const options = {
    treshold: 1,
    rootMargin: '-50px 0px'
}

const battery = document.querySelectorAll('.imgbattery') as NodeListOf<HTMLDivElement>

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target)
          entry.target.classList.add('anim')
          observer.unobserve(entry.target)
        }
      })
},options)

battery.forEach((el)=>observer.observe(el))


const car2 = document.querySelector('#car2') as HTMLImageElement
setInterval(()=> {
car2.style.display = 'block'
},1000)
setInterval(()=> {
car2.style.display = 'none'
},2000)