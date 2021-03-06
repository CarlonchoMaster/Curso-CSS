let hoursNumber=document.getElementsByClassName('hour-number');
console.log(hoursNumber);
for (let index = 0; index < hoursNumber.length; index++) {
    let element = hoursNumber[index];    
    if (element != undefined) element.classList.add(`hour-number-${index + 1}`);        
}
