import './style.css'




let battery = document.querySelector('.imgbattery') as HTMLDivElement
let nums = document.querySelector('.digitals') as HTMLDivElement
let num = nums.innerHTML
 battery.style.color = 'red'
 battery.style.transition = 5+'s'
// battery.style.width += num*10+'px'
console.log(`${nums.style.width} +'px'`);
console.log(num);
