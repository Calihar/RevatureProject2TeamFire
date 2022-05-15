window.onload = function () {
    
    document.getElementById('submit').addEventListener("click", newUserRegister);
    document.getElementById('cancel').addEventListener("click", redirectToLoginPage);

}

function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);

window.onunload = () => {
    window.localStorage.clear();
    null;
}

function redirectToLoginPage(){

    ///this the line of the GODs!!!!!!
    window.localStorage.clear();

    window.location.replace("../html/login.html");
}



function newUserRegister() {
    
    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', `http://localhost:9001/r-authentication`);
    xhttp.setRequestHeader("content-type", "application/json");

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status== 200) {            
            
            // let regObj = xhttp.responseText;
            // console.log(regObj);

            // /////the response text will send the URI main page of the newly created account
            // window.location = xhttp.responseText;
        }
    } 
    
    var userFirstName = document.querySelector("#firstname").value;
    var userLastName = document.querySelector("#lastname").value;
    var userName = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var userPassword = document.querySelector("#password").value;
    
    
    
    // console.log("no empty fields: "+ noEmptyFields());        
    // console.log("passwords match: " + passwordMatching());        
    if (noEmptyFields(userFirstName,userLastName,userName,email) && passwordMatching(userPassword)) {

        console.log("name: "+ userFirstName);
        console.log("last name: "+ userLastName);
        console.log("username: "+ userName);
        console.log("email: "+ email);
        console.log("password: "+ userPassword);

        //no field is empty
        let newUserRegistration = {
            "firstName" : userFirstName,
            "lastName" : userLastName,
            "username" : userName,
            "userEmail" : email,
            "password" : userPassword
    
        }
        // console.log("Inside the json block");
        console.log(newUserRegistration);
        xhttp.send(JSON.stringify(newUserRegistration));
        

    } 
}

function noEmptyFields(userFirstName,userLastName,userName,email) {    

    if (userFirstName != "" & userLastName != "" & userName != "" & email != "") {
        return true;        
    } else {
        document.getElementById('texto').innerHTML = "all fields must be filled";
        return false;
    }
}

function passwordMatching(userPassword) {
    var retypePassword = document.querySelector("#repass").value;
    if ((userPassword != "" & retypePassword != "")  & (userPassword === retypePassword)) {
        console.log("hooray passwords match");
        return true;        
    } else /* if ((userPassword != "" & retypePassword != "")  & (userPassword != retypePassword)) */ {
        console.log("passwords don't match");
        document.getElementById('texto').innerHTML = "passwords don't match";
        return false;
    } /* else {
        return false;        
    } */
}


    
    

    


    