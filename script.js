
/* hide navbar menu*/
const bar = document.getElementById('bar');
/*closing tag in nav manu*/
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
/*if anyone s click on the bar it will happened and open*/
if(bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
/*for closing tag*/
if(close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
