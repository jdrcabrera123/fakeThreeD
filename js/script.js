const l_eye = document.querySelector('#l_eye');
const r_eye = document.querySelector('#r_eye');
const nose = document.querySelector('#nose');
const moustache = document.querySelector('#moustache');
const l_eyebrow = document.querySelector('#l_eyebrow')
const r_eyebrow = document.querySelector('#r_eyebrow')
const l_ear = document.querySelector('#l_ear')
const r_ear = document.querySelector('#r_ear')
const hairOne = document.querySelector('#hairOne')
const hairTwo = document.querySelector('#hairTwo')
const hairthree = document.querySelector('#hairThree')
const face = document.querySelector('#face')



let cursorPosition = { //In here it set up the initial position of cursor through an object
    x: 0,
    y: 0
}

let windowWidth = window.innerWidth; // This is used to set the width 
let windowHeight = window.innerHeight; //This is used to set the height


function setScreenSize() { //This functino is used to set and update the screen size
    windowWidth = window.windowWidth;
    windowHeight = window.windowHeight;
}

function mouseMovement(e) {
    cursorPosition = {
        x: e.clientX, //clientX and clientY are properties to give coordinates
        y: e.clientY
    }
    follow()
}

function touchMovement (e){
    cursorPosition={
        x:e.targetTouche[0].offsetX, 
        y:e.targetTouches[0].offsetY
    }
    follow();
}

const followCursor = (element, xRelation, yRelation) => {
    const elOffset = element.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width / 2;

    const centerY = elOffset.y + elOffset.height / 2

    const distanceLeft = Math.round(
        ((cursorPosition.x - centerX) * 100) / window.innerWidth
    );

    const distanceTop = Math.round(
        ((cursorPosition.y - centerY) * 100) / window.innerHeight
    )

    element.style.transform = `translate(${distanceLeft / xRelation}px, ${distanceTop / yRelation}px)`
}

const follow = () => {
    if (l_ear) followCursor(l_ear, 38, 38)
    if (r_ear) followCursor(r_ear, 38, 38)
    if (l_eye) followCursor(l_eye, 1, 1)
    if (r_eye) followCursor(r_eye, 1, 1)
    if (nose) followCursor(nose, 1, 1)
    if (l_eyebrow) followCursor(l_eyebrow, 1, 1)
    if (r_eyebrow) followCursor(r_eyebrow, 1, 1)
    if (moustache) followCursor(moustache, 1, 1)
    if (hairOne) followCursor(hairOne, 3, 3)
    if (hairTwo) followCursor(hairTwo, 6, 6)
    if (hairThree) followCursor(hairThree, 8, 8)
    if (face) followCursor(face, 4, 4)
}

window.addEventListener('resize', setScreenSize)
window.addEventListener('mousemove', mouseMovement)
window.addEventListener('touchmove', touchMovement)
