let button=document.querySelector('.btn');
// button.classList.add('btn-primary')
const styles=`color: #333;    
    cursor: pointer;`;
button.addEventListener('click', e => {
    button.classList.add('btn-primary');
    button.setAttribute('style', styles);    
});

const setStyles = (elem, styles) => {
    elem.setAttribute('style', styles);
}

const addStyles = (elem, styles) => {
    elem.style += `;${styles}`;
}

const mediumBp= matchMedia('(min-width: 800px)');

const changeColor= mql => mql.matches ? document.body.style.backgroundColor='red' : document.body.style.backgroundColor='yellow';

changeColor(mediumBp);
mediumBp.addEventListener('change', changeColor);