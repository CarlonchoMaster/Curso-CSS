let toogleMenu=document.getElementById('toggle-menu');
const body=document.body;
toogleMenu.addEventListener('click', (e) => {
    body.classList.toggle('translate');
    body.classList.add('overflow-hidden');
    body.addEventListener('transitionend', () => {
        if (! body.classList.contains('translate')) {
            body.classList.remove('overflow-hidden');
        }
    });
});

