import './style.css'


 
// ! ящик с шириной экрана (пиксели)
// const width_of_display = document.querySelector ('#width_of_display') as HTMLButtonElement
// window.addEventListener ('resize', ()=> {
//   let computedStyle = getComputedStyle(document.body)
//   width_of_display.innerHTML = 'ширина экрана ' + computedStyle.width 
  
// })




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


const carBlock = document.querySelector('#carBlock') as HTMLDivElement
const car = document.querySelector('#car') as HTMLImageElement
const car2 = document.querySelector('#car2') as HTMLImageElement
carBlock.addEventListener('mousemove', ()=> {
  car.style.filter = `drop-shadow(10px 10px 2px rgb(57, 85, 85))`
  car.style.transition = .3 + 's'
})

carBlock.addEventListener('mouseout', ()=> {
  car.style.filter = ''
})

setInterval(()=> {
car2.style.opacity = '0'
},1000)
setInterval(()=> {
car2.style.opacity = '1'
},2000)

const catLeg = document.querySelector('#catLeg') as HTMLImageElement
setInterval(()=> {
  setTimeout (()=> {
    catLeg.style.rotate = 30 + 'deg'
    catLeg.style.transition = .2 + 's'
  }, 500)
  setTimeout (()=> {
    catLeg.style.rotate = 0 + 'deg'
    catLeg.style.transition = .2 + 's'
  }, 1000)
}, 3000)


// const catBox = document.querySelector ('#catBox') as HTMLDivElement
// catBox.addEventListener('mousemove', ()=> {   })
const eye = document.querySelector ('#eye') as HTMLImageElement
setInterval(()=> {
  setTimeout (()=> {
    eye.style.marginTop = 20 + '%'
    eye.style.opacity =  '1'
    eye.style.transition = 0 + 's'
  }, 500)
  setTimeout (()=> {
    eye.style.marginTop = 36 + '%'
    eye.style.opacity =  '0'
    eye.style.transition = 2 + 's'
  }, 1000)
}, 9000)

 

