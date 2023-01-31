const inputs = document.querySelectorAll("input");

function changeFocused(input) {
    if (input.value) {
        input.classList.add("is-focused");
    } else {
        input.classList.remove("is-focused");
    }
}

inputs.forEach((input) => {
    changeFocused(input);

    input.addEventListener("blur", (event) => {
        changeFocused(event.target);
    });
});
