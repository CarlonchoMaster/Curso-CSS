let h1=document.documentElement.scrollHeight;
let h2=document.documentElement.clientHeight;

let scrollUnits=(h1-h2);
let rootStyles=document.documentElement.style;
let progressbar;

addEventListener('scroll', () => {    
    progressbar=Math.round((scrollY/scrollUnits)*100);
    rootStyles.setProperty('--width-bar', `${progressbar}`);
});