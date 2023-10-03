import './style.css'


let scroll = document.querySelectorAll('.navbar') 
scroll.forEach(navbar=>
    navbar.addEventListener ('click', function(event){
    console.log(`${event.pageY}`);

}))

 