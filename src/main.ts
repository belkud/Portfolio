import './style.css'


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