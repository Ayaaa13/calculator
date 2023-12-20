    const buttons = document.querySelectorAll("button");
    const result = document.querySelector(".result")

   buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        e.preventDefault();
        let value = e.target.dataset.value;
        result.value += value;
    })
})