const changeThemeButtons = document.querySelectorAll('[name=theme]');

const rootStyles=document.documentElement.style;

const lightTheme = {
    '--bg-body': 'hsl(100, 8%, 93%)',
    '--bg-section': 'white',
    '--accent-color' : 'hsl(207, 88%, 46%)',
    '--text-color': '#53575a'
};

const darkTheme = {
    '--bg-body': '#53575a',
    '--bg-section': '#282d31',
    '--accent-color' : '#ff3c32',
    '--text-color': '#eee'
};

const changeTheme = theme => {
    let cssVars= Object.keys(theme);
    for(let cssVar of cssVars) {
        rootStyles.setProperty(cssVar, theme[cssVar]);
    }
};

for(let radio of changeThemeButtons) {
    radio.addEventListener('change', e => {
        if (e.target.id === 'dark') {
            changeTheme(darkTheme);
        } else {
            changeTheme(lightTheme);
        }
    });
}