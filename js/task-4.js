const loginForm = document.querySelector(".login-form");

const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (!login || !password) {
        return alert('All form fields must be filled in');
    }

    const userInf = {};
    userInf[form.elements.email.name] = login.trim();
    userInf[form.elements.password.name] = password.trim();

    console.log(userInf);

    loginForm.reset();
}

loginForm.addEventListener("submit", handleForm);