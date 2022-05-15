

console.log(passwordMatching());
function passwordMatching() {
    let userPassword = "aaa";
    let retypePassword = "aaa";
    console.log(userPassword);
    console.log(retypePassword);
    if ((userPassword !== "" & retypePassword !== "")  & (userPassword === retypePassword)) {
        console.log("hooray passwords match");
        return true;        
    } else if ((userPassword !== "" & retypePassword !== "")  & (userPassword !== retypePassword)) {
        console.log("passwords don't match");
        return false;
    } else {
        return false;
    }
}