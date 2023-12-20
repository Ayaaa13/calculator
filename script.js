const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result")
const specialChars = ["%", "-", "+", "/", "*", "="];

let output = "";

function calculate(buttonValue) {
    if(buttonValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (buttonValue === "AC") {
        output = "";
    } else if (buttonValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
       if (output === "" && specialChars.includes(buttonValue)) return;
       output += buttonValue ; 
    }
    result.value = output;
}


   buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        e.preventDefault();
        let inputValue = e.target.dataset.value;
        calculate(inputValue)
    })
})