let total = 0;
let plusPressed = false;

keyDown = (evt) => {
    console.log(evt.target.innerText);
    evt.target.classList.add('keySelected')
}

keyUp = (evt) => {
    evt.target.classList.remove('keySelected');
    let display = document.getElementById('display');
    let keyPressed = evt.target.innerText;
    if(keyPressed != "+" && keyPressed != "C"){
        if(display.innerText == "0" || plusPressed){
            plusPressed = false;
            display.innerText = keyPressed;
        } else {
            display.innerText += keyPressed;
        }
    } else if(keyPressed == "+"){
        plusPressed = true;
        let currentNumber = parseInt(display.innerText);
        total += currentNumber;
        display.innerText = total.toString();
    } else {
        total = 0;
        display.innerText = "0";
    }
}


let keys = document.querySelectorAll('.key')

keys.forEach(element => {
    element.addEventListener('mousedown', keyDown);
    element.addEventListener('mouseup', keyUp);
})

