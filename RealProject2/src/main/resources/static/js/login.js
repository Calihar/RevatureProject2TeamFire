window.onload = function () {

    document.getElementById('login').addEventListener("click", loginCheck);

}

function preventBack() {
    window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = () => {
    // window.localStorage.clear();
    null;
}


/* var crypto = require('crypto');
var encrypt = function (clear){    

    let salt = process.env.USER_SALT;

    //SHA
    let hash = crypto.createHmac("sha256", salt);
    hash.update(clear);
    return{
        salt : salt,  //this is the salt (needs a column on DB unique for each user)
        hash : hash.digest('hex') //this is the hashed string (goes in the DB on the password field)
    }

}; */



function noEmptyFields(userName, passWord) {

    if (userName == "" || passWord == "") {
        return false;
    } else {
        return true;
    }
}

function loginCheck() {
    //need to change back to clear pass
    var passWord = document.querySelector("#password").value;  //this is the user password in plaintext    
    var userName = document.querySelector("#username").value;
    //var passWord = encrypt(clearpass);

    console.log(noEmptyFields(userName, passWord));
    if (noEmptyFields(userName, passWord)) {
        userLogin(userName, passWord);
    } else {
        document.getElementById('texto').innerHTML = "All fields must be filled";

    }
}

function userLogin(userName, passWord) {

    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', `http://localhost:9001/l-authentication`);
    xhttp.setRequestHeader("content-type", "application/json");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // let regObj = xhttp.responseText;
            // console.log(regObj);

            ///use this if the response text is the URI for user home page

            console.log("I'm in!")
            var urlBase = "http://localhost:9001"
            window.location = urlBase + xhttp.responseText;

            ///this if response text only says valid or invalid
            //maybe go with the above line instead of this one
            /////////this part should redirect to user home page after successfull login
            // window.location.replace("../html/logout.html");

        }
    }
    //no field is empty
    let userValidation = {
        "username": userName,
        "password": passWord
    }
    console.log(userValidation);
    
    // & passwordMatching()
    if (noEmptyFields()) {


        // console.log("Inside the json block");
        xhttp.send(JSON.stringify(userValidation));
    }

}
