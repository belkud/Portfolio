import './style.css'


let mouseCoordinate = document.querySelector('.container') as HTMLDivElement
mouseCoordinate.addEventListener ('click', function(event){
    innerHTML(`${event.pageY}`);

})

 