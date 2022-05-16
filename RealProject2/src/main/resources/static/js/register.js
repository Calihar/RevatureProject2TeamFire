

window.onload = function () {
  document
    .getElementById("submit")
    .addEventListener("click", newUserRegister);
  document
    .getElementById("cancel")
    .addEventListener("click", redirectToLoginPage);
};

function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = () => {
  window.localStorage.clear();
  null;
};

function redirectToLoginPage() {
  ///this the line of the GODs!!!!!!
  window.localStorage.clear();

  window.location.replace("../html/login.html");
}

function isValidCharacters(str) {
  for (let a of str) {
    const letters = /[a-z]/i;
    // const nonletters = /(!$*_-&^)/;
    const numbers = /[0-9]/;

    if (!letters.test(a) && /* !nonletters.test(a) && */ !numbers.test(a))
      return false;
  }
  return true;
}

function newUserRegister() {

  let xhttp = new XMLHttpRequest();

  xhttp.open("POST", `http://localhost:9001/r-authentication`);
  xhttp.setRequestHeader("content-type", "application/json");

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var urlBase = "http://localhost:9001";
      window.location = urlBase + xhttp.responseText;
    }
  };


  var userFirstName = document.querySelector("#firstname").value;
  var userLastName = document.querySelector("#lastname").value;
  var userName = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;


  //encryption stuff  
  var userPassword = document.querySelector("#password").value;
  var encryptedPassword = CryptoJS.AES.encrypt(userPassword, "Secret Passphrase");
  var encryptedPasswordString = encryptedPassword.toString();
  

  if (
    noEmptyFields(userFirstName, userLastName, userName, email) &&
    passwordMatching(userPassword) &&
    isValidCharacters(userName) &&
    isValidCharacters(userPassword)
  ) {
    // console.log("name: " + userFirstName);
    // console.log("last name: " + userLastName);
    // console.log("username: " + userName);
    // console.log("email: " + email);
    // console.log("password: " + userPassword);

    if (
      noEmptyFields(userFirstName, userLastName, userName, email) &&
      passwordMatching(userPassword)
    ) {
      

      //no field is empty
      let newUserRegistration = {
        firstName: userFirstName,
        lastName: userLastName,
        username: userName,
        userEmail: email,
        password: encryptedPasswordString,
      };

      console.log(newUserRegistration);
      xhttp.send(JSON.stringify(newUserRegistration));
    }
  }
}

function noEmptyFields(userFirstName, userLastName, userName, email) {
  if (
    (userFirstName != "") &
    (userLastName != "") &
    (userName != "") &
    (email != "")
  ) {
    return true;
  } else {
    document.getElementById("texto").innerHTML = "all fields must be filled";
    return false;
  }
}

function passwordMatching(userPassword) {
  var retypePassword = document.querySelector("#repass").value;
  if (
    (userPassword != "") &
    (retypePassword != "") &
    (userPassword === retypePassword)
  ) {
    if (userPassword.length < 8 || userPassword.length > 20) {
      document.getElementById("texto").innerHTML =
        "Password must be at least 8 characters long";
      return false;
    }

    return true;
  } /* if ((userPassword != "" & retypePassword != "")  & (userPassword != retypePassword)) */ else {
    // console.log("passwords don't match");
    document.getElementById("texto").innerHTML = "passwords don't match";
    return false;
  }

}
