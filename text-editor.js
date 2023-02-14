let count = 0;

const textValue = document.getElementById('textarea');

function bold() {
    count++;
    if (count % 2 != 0) {
        textValue.style.fontWeight = 'bold';
    } else {
        textValue.style.fontWeight = 'normal';
    }
}

function italic() {
    count++;
    if (count % 2 != 0) {
        textValue.style.fontStyle = 'italic';
    } else {
        textValue.style.fontStyle = 'normal';
    }
}

function underLine() {
    count++;
    if (count % 2 != 0) {
        textValue.style.textDecoration = 'underline';
    } else {
        textValue.style.textDecoration = 'none';
    }
}

function textLeft() {
    textValue.style.textAlign = 'left';
}
function textCenter() {
    textValue.style.textAlign = 'center';
}
function textRight(){
    textValue.style.textAlign = 'right';
}
function textJustify(){
    textValue.style.textAlign = 'justify';
}

function number(){
    const numberValue = document.getElementById('number').value;
    textValue.style.fontSize =`${numberValue}px`;
}
function upperLower() {
    count++;
    if (count % 2 != 0) {
        textValue.style.textTransform = 'uppercase';
    } else {
        textValue.style.textTransform = 'lowercase';
    }
}
function color(){
    const color = document.getElementById('favcolor').value;
    textValue.style.color = color;
}

