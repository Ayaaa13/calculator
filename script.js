const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result")

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        let value = e.target.dataset.value
        result.innerHTML = value;
        console.log(value);
    });
});