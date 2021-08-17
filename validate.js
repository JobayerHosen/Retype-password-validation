
let oldPass = document.getElementById('old-pass');
let newPass = document.getElementById('new-pass');
let retypePass = document.getElementById('retype-pass');

oldPass.addEventListener('keyup', (Event) => {
    validate(Event.target);
})
newPass.addEventListener('keyup', (Event) => {
    validate(Event.target);
    confirmRetype(retypePass)
})
retypePass.addEventListener('keyup', (Event) => {
    confirmRetype(Event.target);
})

oldPass.addEventListener('blur', checkEmpty)
newPass.addEventListener('blur', checkEmpty)
retypePass.addEventListener('blur', checkEmpty)


function validate(input) {
    if(input.value.length > 7) {
        input.style.filter = "hue-rotate(300deg)";
    }
    else {
        input.style.filter = "hue-rotate(135deg)";
    }
}

function checkEmpty(Event) {
    if(Event.target.value.length > 0) {
        Event.target.classList.add('not-empty');
    }
    else {
        Event.target.classList.remove('not-empty');
    }
}

function confirmRetype(input) {
    if(input.value === newPass.value) {
        input.style.filter = "hue-rotate(300deg)";
    }
    else {
        input.style.filter = "hue-rotate(135deg)";
    }
}