window.onload = function () {

    document.getElementById('login').addEventListener("click", loginCheck);
    document.getElementById('modalUpdateBtn').addEventListener('click', passwordReset)

}

function preventBack() {
    window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = () => {
    // window.localStorage.clear();
    null;
}


function noEmptyFields(userName, passWord) {

    if (userName == "" || passWord == "") {
        return false;
    } else {
        return true;
    }
}

function loginCheck() {
      
    var userName = document.querySelector("#username").value;
    var passWord = document.querySelector("#password").value;

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

function passwordReset() {
    let email = document.querySelector("#resetEmail").value;
    console.log(email);

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById('texto').innerHTML = "Email Sent Successfully!";
        }
    }

    xhttp.open('POST', "http://localhost:9001/sendemail") 

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let params = "emailName=" + email;

    xhttp.send(params);

}

