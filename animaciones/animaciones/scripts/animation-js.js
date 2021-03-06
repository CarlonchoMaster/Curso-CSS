const btn=document.getElementById('button');
const timerElem=document.getElementById('timerElem');
const message=document.getElementById('messages');
let time=0;
let timer;
btn.addEventListener('click', e => {
    btn.classList.add('animate');
});

btn.addEventListener('animationstart', (e) => {    
    message.textContent = `La animación ${e.animationName} ha comenzado`;
    time=0.1;
    timer=setInterval(() => {
        time+=0.1;
        timerElem.textContent=time.toFixed(2);
    }, 100);    
});

btn.addEventListener('animationend', (e) => {               
    clearInterval(timer);
    btn.classList.remove('animate');    
    message.textContent = `La animación ${e.animationName} ha terminado`;
    console.log(e.elapsedTime, time);
    time=0;    
});