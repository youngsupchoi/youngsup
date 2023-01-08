const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


/* version1
function handleButtonClick() {
    const username = loginInput.value;
    if(username === ""){
        alert("pleas write your name");
    }else if(username.length > 15){
        alert("your name is too long")
    }

    else{
        console.log("click!!!!");
        console.log("hello", loginInput.value);
    }
    
}
loginButton.addEventListener("click", handleButtonClick);

*/
const HIDDEN_CLASSNAME ="hidden";
const USER_NAME_KEY = "user name";
const display = document.querySelector("#greeting");
function onLoginSubmit(tomato){
    tomato.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    localStorage.setItem(USER_NAME_KEY, username);
    
}

loginForm.addEventListener("submit",onLoginSubmit )

const saveUsername = localStorage.getItem(USER_NAME_KEY);

function paintGreetings(username){
    display.innerText = `Hello ${username}`;
    display.classList.remove(HIDDEN_CLASSNAME);
}

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(saveUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME)
}


