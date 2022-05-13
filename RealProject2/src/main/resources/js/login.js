window.onload = function () {
    
    document.getElementById('login').addEventListener("click", loginCheck);

}


function loginCheck() {
    
    let allFieldsAreFilled = false;
    if (allFieldsAreFilled) {
        //call below function here
    } else {
        document.getElementById('texto').innerHTML = "all fields must be filled";
    }

}

function userLogin() {
    
    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', `http://localhost:9001/Project2/json/uservalidation`);
    xhttp.setRequestHeader("content-type", "application/json");

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status== 200) {            
            
            let regObj = xhttp.responseText;
            console.log(regObj);
            
        }
    }    
    
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;

    if (noEmptyFields() & passwordMatching()) {

        //no field is empty
        let userValidation = {            
            "username" : userName,            
            "password" : passWord    
        }

        console.log("Inside the json block");
        xhttp.send(JSON.stringify(userValidation));
        window.location.replace("/html/logout.html");

    } 
}

function redirectToHomePage(){
    window.location.replace("C:/Users/tapioca/Documents/P2Endpoints/html/register.html");
}