

// let userFirstName = document.getElementById("firstname").value;
// let userLastName = document.getElementById("lastname").value;
// let userName = document.getElementById("username").value;
// let email = document.getElementById("email").value;
// let userPassword = document.getElementById("password").value;
// let retypePassword = document.getElementById("repass").value;


let userFirstName = "Eric";
let userLastName = "Mateo";
let userName = "mateoer";
let email = "revature@lalala.com";
let userPassword = "123";
let retypePassword = "123";



function newUserRegister(userFirstName,userLastName,userName,email,userPassword) {   
    
    

        console.log("name: "+ userFirstName);
        console.log("last name: "+ userLastName);
        console.log("username: "+ userName);
        console.log("email: "+ email);
        console.log("password: "+ userPassword);

        
        let newUserRegistration = {
            "firstName" : userFirstName,
            "lastName" : userLastName,
            "username" : userName,
            "userEmail" : email,
            "password" : userPassword
    
        }
        console.log(newUserRegistration);
        

    
}



newUserRegister(userFirstName,userLastName,userName,email,userPassword);
























// console.log(passwordMatching());
// function passwordMatching() {
//     let userPassword = "aaa";
//     let retypePassword = "aaa";
//     console.log(userPassword);
//     console.log(retypePassword);
//     if ((userPassword !== "" & retypePassword !== "")  & (userPassword === retypePassword)) {
//         console.log("hooray passwords match");
//         return true;        
//     } else if ((userPassword !== "" & retypePassword !== "")  & (userPassword !== retypePassword)) {
//         console.log("passwords don't match");
//         return false;
//     } else {
//         return false;
//     }
// }

// console.log(noEmptyFields());
// function noEmptyFields() {
//     let userFirstName = "Eric";
//     let userLastName = "Mateo";
//     let userName = "mateoer";
//     let email = "revature@laland.com";

//     if (userFirstName !== "" & userLastName !== "" & userName !== "" & email !== "") {
//         console.log("first name: " + userFirstName +"\nlast name: "+ userLastName+
//         "\nusername: "+userName +"\nemail: "+email);
//         return true;        
//     } else {
//         // document.getElementById('texto').innerHTML = "all fields must be filled";
//         console.log("all fields must be filled");
//         return false;
//     }
// }