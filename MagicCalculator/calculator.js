const display = document.getElementById("display");

function apendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
}

function square(){
    display.value *= display.value;
}