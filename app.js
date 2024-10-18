// setInterval(setAsosiy,1000)
// const milSoat = document.querySelector('[bu-soat-mili]')
// const milMinut = document.querySelector('[bu-minut-mili]')
// const milSecund = document.querySelector('[bu-secund-mili]')  
// function setAsosiy() {
//     const currentDate = new Date()
//     const secundsRatio = currentDate.getSecunds() / 60
//     const minutesRatio = (secundsRatio + currentDate.getMinutes()) / 60
//     const  hoursRatio = (minutesRatio + currentRatio.getHours()) / 12
//     setRotion(milSecund,secundsRatio) 
//     setRotion(milMinut, minutesRatio)
//     setRotion(milSoat, hoursRatio)
// }
// function setRotion(element, rotationRatio){
//     element.style.setProperty('--rotation', rotationRatio * 360)
//     }

// setHours()
setInterval(setAsosiy, 1000);

const milSoat = document.querySelector('[bu-soat-mili]');
const milMinut = document.querySelector('[bu-minut-mili]');
const milSecund = document.querySelector('[bu-secund-mili]');

function setAsosiy() {
    const currentDate = new Date();
    const secundsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secundsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    
    setRotion(milSecund, secundsRatio);
    setRotion(milMinut, minutesRatio);
    setRotion(milSoat, hoursRatio);
}

function setRotion(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setAsosiy();
