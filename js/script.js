const inp = document.querySelector('#range')
const div = document.querySelector('.container')
inp.addEventListener('input' ,function(event){
    div.style.filter='brightness('+event.target.value+'%)'    
})