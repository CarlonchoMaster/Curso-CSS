const scrollWidth= innerWidth - document.documentElement.clientWidth;

const rootStyles=document.documentElement.style;

const toogleScrollWidth=() => {
    rootStyles.setProperty('--scroll-width', scrollWidth);
    console.log(scrollWidth);
};

toogleScrollWidth();

