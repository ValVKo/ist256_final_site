document.getElementById('login-container').style.display = 'block';
document.getElementById('register-container').style.display = 'none';

function logIn() {
    for(var i = 0; i < accounts.length; i++) {
        var obj = accounts.users[i];
        console.log(obj.email);

        if (obj.email === document.getElementById('InputEmail').value && obj.password
            === document.getElementById('InputPassword1').value) {
            console.log('we got here!');
        }
        else {
            document.getElementById('invalid-login').innerText = "invalid email/password!";
        }
    }
}

function loadRegistration() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function register() {
    var email;
    var password;
    var firstName;
    var lastName;
    var flag = true;

    if (document.getElementById('firstNameInput').value != null) {
        firstName = document.getElementById('firstNameInput').value;
    }
    else {
        flag = false;
    }

    if (document.getElementById('lastNameInput').value != null) {
        lastName = document.getElementById('lastNameInput').value;
    }
    else {
        flag = false;
    }

    if (document.getElementById('InputEmail2').value != null) {
        email = document.getElementById('InputEmail2').value;
    }
    else {
        flag = false;
    }

    if (document.getElementById('InputPassword2').value != null) {
        password = document.getElementById('InputPassword2').value;
    }
    else {
        flag = false;
    }

    if (flag) {
        var len = Object.keys(accounts.users[0]).length;
        var newuser = 'user' + len + 1;
        console.log(newuser);
        var myObj = { newuser : {
                "email": email,    //your artist variable
                "password": password,   //your title variable
                "firstName": firstName,
                "lastName": lastName
            }
        };


        console.log(accounts.users[2])
    }
}

var accounts = { 'users':
{
    "user1" : {
        "email" : "valentina@kononenko.net",
        "password" : "admin",
        "firstName" : "Valentina",
        "lastName" : "Kononenko"
    }
}};

