let imagesElems=document.querySelectorAll('img');
let imagesArray = Array.from(imagesElems);
let imagesScrollTop=imagesArray.map( image => image.getBoundingClientRect().top - (window.innerHeight/2));

window.addEventListener('scroll', () => {
    imagesScrollTop.forEach((elem, index) => {        
        if (scrollY >= elem) {
            imagesArray[index].classList.add('animate');
        }
    });
});


