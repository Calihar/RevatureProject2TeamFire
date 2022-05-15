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



function noEmptyFields() {
    let userName = document.getElementById("username").value;
        console.log("username: "+ userName.value);
        console.log("username: "+ userName);
        console.log("username: "+ typeof userName);
    let passWord = document.getElementById("password").value;

    if (userName == "" || passWord == "") {
        return false;
    } else if (userName != "" & passWord != ""){
        return true;
    } else {
        return false;
    }
}

function loginCheck() {   
    
    console.log(noEmptyFields());
    if (noEmptyFields()) {
        userLogin();        
    } else {
        document.getElementById('texto').innerHTML = "All fields must be filled";

    }  
}

function userLogin(userName, passWord) {
    
    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', `http://localhost:9001/login`);
    xhttp.setRequestHeader("content-type", "application/json");

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status== 200) {            
            
            // let regObj = xhttp.responseText;
            // console.log(regObj);

            if(xhttp != null && xhttp != undefined) {

                ///use this if the response text is the URI for user home page
                console.log("I'm in!")
                window.location = xhttp.responseText;

                ///this if response text only says valid or invalid
                //maybe go with the above line instead of this one
                /////////this part should redirect to user home page after successfull login
                // window.location.replace("../html/logout.html");


             } else {
                // document.getElementById('texto').innerHTML = "In the user validation thingy"; 
                document.getElementById('texto').innerHTML = "Invalid username and/or password"
             }

            
        }
    }    
        
    // & passwordMatching()
    if (noEmptyFields() ) {

        //no field is empty
        let userValidation = {            
            "username" : userName,            
            "password" : passWord    
        }

        // console.log("Inside the json block");
        xhttp.send(JSON.stringify(userValidation));        
    } 
}

