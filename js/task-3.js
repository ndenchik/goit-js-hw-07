const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");


const nameUser = (event) => {
    textOutput.textContent = event.currentTarget.value.trim();

    if (!textOutput.textContent) {
        textOutput.textContent = 'Anonymous';
    }
}

textInput.addEventListener('input', nameUser);