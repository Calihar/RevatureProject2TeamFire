

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

console.log(noEmptyFields());
function noEmptyFields() {
    let userFirstName = "Eric";
    let userLastName = "Mateo";
    let userName = "mateoer";
    let email = "revature@laland.com";

    if (userFirstName !== "" & userLastName !== "" & userName !== "" & email !== "") {
        console.log("first name: " + userFirstName +"\nlast name: "+ userLastName+
        "\nusername: "+userName +"\nemail: "+email);
        return true;        
    } else {
        // document.getElementById('texto').innerHTML = "all fields must be filled";
        console.log("all fields must be filled");
        return false;
    }
}