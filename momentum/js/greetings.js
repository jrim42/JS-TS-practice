const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden"
const KEY_USERNAME = "username"

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(KEY_USERNAME, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    paintGreetings(savedUsername);
    greeting.classList.remove(CLASSNAME_HIDDEN);
}