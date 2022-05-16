async function myEncryptionFunc() {

  
    
    const key = await crypto.subtle.generateKey(
      // The algorithm is AES in CBC mode, with a key length
      // of 256 bits.
      {
        name: 'AES-CBC',
        length: 256
      },
      // Allow extracting the key material (see below).
      true,
      // Restrict usage of this key to encryption.
      ['encrypt']
    );
  
    
    // AES-CBC requires a 128-bit initialization vector (iv).
    // const iv = "MayTheForceBeWithYou";
    // const iv = crypto.getRandomValues(new Uint8Array(16));
    const iv =  new Uint8Array(16);
    iv[0] = 128;
    iv[1] = 179;
    iv[2] = 80;
    iv[3] = 25;
    iv[4] = 46;
    iv[5] = 94;
    iv[6] = 76;
    iv[7] = 18;
    iv[8] = 60;
    iv[9] = 138;
    iv[10] = 150;
    iv[11] = 212;
    iv[12] = 50;
    iv[13] = 143;
    iv[14] = 74;
    iv[15] = 252;    
    
    // This is the plaintext:
    const encoder = new TextEncoder();
    // const message = encoder.encode('Hello world!');
    // const message = encoder.encode('passwordlmao');
    const message = encoder.encode(document.querySelector("#password").value);
    
    // Finally, encrypt the plaintext, and obtain the ciphertext.
    const ciphertext = await crypto.subtle.encrypt(
      // The algorithm is still AES-CBC. In addition, the
      // 128-bit initialization vector must be specified.
      {
        name: 'AES-CBC',
        iv
      },
      // The encryption key. This must be an AES-CBC key,
      // otherwise, this function will reject.
  
      key,
      
  
      // The plaintext to encrypt.
      message
    );
      
      return  message.toString();

}    

window.onload = function () {
    document.getElementById('submit').addEventListener("click", newUserRegister, myEncryptionFunc);
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
           
            var urlBase = "http://localhost:9001"
            window.location = urlBase + xhttp.responseText;
        }
    } 

    
     
    
    
    var userFirstName = document.querySelector("#firstname").value;
    var userLastName = document.querySelector("#lastname").value;
    var userName = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;    
    var userPassword = document.querySelector("#password").value;

    
    var userPasswordField = myEncryptionFunc();
    
    
       
    if (noEmptyFields(userFirstName,userLastName,userName,email) && passwordMatching(userPassword)) {

        
        console.log("hashed password: "+ userPasswordField);

        //no field is empty
        let newUserRegistration = {
            "firstName" : userFirstName,
            "lastName" : userLastName,
            "username" : userName,
            "userEmail" : email,
            "password" : userPasswordField
    
        }
        
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
        // console.log("hooray passwords match");
        if(userPassword.length < 8) {
            document.getElementById('texto').innerHTML = "Password must be at least 8 characters long";
            return false;
        }
        console.log("hooray passwords match");
        return true;        
    } else /* if ((userPassword != "" & retypePassword != "")  & (userPassword != retypePassword)) */ {
        // console.log("passwords don't match");
        document.getElementById('texto').innerHTML = "passwords don't match";
        return false;
    } 
}



    

    


    