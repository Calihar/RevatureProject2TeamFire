window.onload = function () {
    
    document.getElementById('submit').addEventListener("click", newUserRegister);

}

function newUserRegister() {
    
    // let xhttp = new XMLHttpRequest;

    // xhttp.open('POST', `http://localhost:9001/Project2/json/newuserregistration`);
    // xhttp.setRequestHeader("content-type", "application/json");

    // xhttp.onreadystatechange = function(){
    //     if (xhttp.readyState == 4 && xhttp.status== 200) {            
            
    //         let regObj = xhttp.responseText;
    //         console.log(regObj);
            
    //     }
    // }    
    
    console.log("no empty fields: "+ noEmptyFields());        
    console.log("passwords match: " + passwordMatching());        
    if (noEmptyFields() & passwordMatching()) {

        //no field is empty
        // let newUserRegistration = {
        //     "firstName" : userFirstName,
        //     "lastName" : userLastName,
        //     "username" : userName,
        //     "userEmail" : email,
        //     "password" : userPassword
    
        // }
        console.log("Inside the json block");
        // xhttp.send(JSON.stringify(newUserRegistration));
        // window.location.replace("/html/logout.html");

    } 
}

function noEmptyFields() {
    let userFirstName = document.getElementById("firstname").value;
    let userLastName = document.getElementById("lastname").value;
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (userFirstName & userLastName & userName & email) {
        return true;        
    } else {
        document.getElementById('texto').innerHTML = "all fields must be filled";
        return false;
    }
}

function passwordMatching() {
    let userPassword = document.getElementById("password").value;
    let retypePassword = document.getElementById("repass").value;
    if (userPassword & retypePassword  & (userPassword === retypePassword)) {
        return true;        
    } else if (userPassword & retypePassword  & (userPassword != retypePassword)) {
        document.getElementById('texto').innerHTML = "passwords don't match";
        return false;
    } else {
        return false;
    }
}


    
    

    


    