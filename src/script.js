
//------------Cached reference------------

const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const body = document.querySelector("body");


//------------Functions------------

function lightMode() {
    if (document.body.className === 'darkMode') {
        document.body.className = '';
    }
}

function darkMode() {
    if (document.body.className === '') {
        document.body.className = 'darkMode';
    }
}

function iconUnderlineSun(){
    if (sun.style.borderBottom === '0px' || sun.style.borderBottom === '') {
        sun.style.borderBottom = '3px solid';
    }
    else if (sun.style.borderBottom === '3px solid') {
        sun.style.borderBottom = '0px';
    }
}
function iconUnderlineMoon(){

if (moon.style.borderBottom === '0px' || moon.style.borderBottom === '') {
    moon.style.borderBottom = '3px solid';
}
else if (moon.style.borderBottom === '3px solid') {
    moon.style.borderBottom = '0px';
}
}

//------------Event Listener------------

sun.addEventListener('click',lightMode);
moon.addEventListener('click',darkMode);

sun.addEventListener('mouseenter',iconUnderlineSun)
sun.addEventListener('mouseout',iconUnderlineSun)

moon.addEventListener('mouseenter',iconUnderlineMoon)
moon.addEventListener('mouseout',iconUnderlineMoon)

