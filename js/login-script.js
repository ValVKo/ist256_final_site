document.getElementById('login-container').style.display = 'block';
document.getElementById('register-container').style.display = 'none';
document.getElementById('finished-login-container').style.display = 'none';

function loadRegistration() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function register(theForm) {
    var loginMssg = document.getElementById('login-message');
    loginMssg.innerHTML = "";
    var inputUsername= theForm["username2"];
    var inputPassword= theForm["password2"];
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("password", inputPassword.value);

    keepLoggedInOpen();
    return false;
}

function login(theForm) {
    document.getElementById('login-message').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var password = inputPassword.value;


    if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
        keepLoggedInOpen();

    } else {
        document.getElementById('login-message').innerHTML = "Wrong username or password!";
    }
    return false;
}

function keepLoggedInOpen() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('finished-login-container').style.display = 'block';
    document.getElementById('finished-login-text').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
    sessionStorage.setItem('finished-login', true);
}

function LogOut() {
    document.getElementById('finished-login-container').style.display = "none";
    sessionStorage.removeItem('finished-login');
    window.location.reload(true);
}

function enableRegister(checkbox) {
    if (checkbox.checked) {
        document.getElementById("register-button").disabled = false;
    }
    else {
        document.getElementById("register-button").disabled = true;
    }
}

window.onload = function() {
    var data = sessionStorage.getItem('finished-login');
    if (data === 'true') {
        keepLoggedInOpen();
    }
};
