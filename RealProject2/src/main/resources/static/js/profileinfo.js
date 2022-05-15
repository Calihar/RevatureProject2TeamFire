window.onload = function () {
    startUp();

    document.getElementById("emailBtn").addEventListener('click', changeEmailFunction);
    document.getElementById("changeBirthDayBtn").addEventListener('click', changeBirthDayFunction);
    document.getElementById("firstNameParentBtn").addEventListener('click', changeFirstNameFunction);
    document.getElementById("lastNameParentBtn").addEventListener('click', changeLastNameFunction);
    document.getElementById("modalUpdateBtn").addEventListener('click', updateUserInfo);
}

function changeEmailFunction() {
    console.log("In Change Email Function");
    let emailParent = document.querySelector("#emailParent");
    let emailChild = document.querySelector("#emailChild");
    emailChild.remove();
    emailChild = document.createElement("input");
    emailChild.setAttribute("id", "emailChild");
    emailChild.setAttribute("type", "email");
    emailChild.setAttribute("placeholder", "New Email Address");
    emailChild.setAttribute("name", "childEmailValue");
    emailChild.innerText = "(Filled From DB)";
    emailParent.appendChild(emailChild);
}

function changeBirthDayFunction() {
    console.log("In Change Birthday Function");
    let birthDayParent = document.querySelector("#birthDayParent");
    let birthDayChild = document.querySelector("#birthDayChild");
    birthDayChild.remove();
    birthDayChild = document.createElement("input");
    birthDayChild.setAttribute("id", "birthDayChild");
    birthDayChild.setAttribute("type", "date");
    birthDayChild.setAttribute("placeholder", "New Birthdate");
    birthDayChild.setAttribute("name", "birthDayValue");
    birthDayChild.innerText = "(Filled From DB)";
    birthDayParent.appendChild(birthDayChild);
}

function changeFirstNameFunction() {
    console.log("In Change First Name Function");
    let firstNameParent = document.querySelector("#firstNameParent");
    let firstNameChild = document.querySelector("#firstNameChild");
    firstNameChild.remove();
    firstNameChild = document.createElement("input");
    firstNameChild.setAttribute("id", "firstNameChild");
    firstNameChild.setAttribute("type", "text");
    firstNameChild.setAttribute("placeholder", "New First Name");
    firstNameChild.setAttribute("name", "firstNameValue");
    firstNameChild.innerText = "(Filled From DB)";
    firstNameParent.appendChild(firstNameChild);
}

function changeLastNameFunction() {
    console.log("In Change Last Name Function");
    let lastNameParent = document.querySelector("#lastNameParent");
    let lastNameChild = document.querySelector("#lastNameChild");
    lastNameChild.remove();
    lastNameChild = document.createElement("input");
    lastNameChild.setAttribute("id", "lastNameChild");
    lastNameChild.setAttribute("type", "text");
    lastNameChild.setAttribute("placeholder", "New Last Name");
    lastNameChild.setAttribute("name", "lastNameValue");
    lastNameChild.innerText = "(Filled From DB)";
    lastNameParent.appendChild(lastNameChild);
}

function updateUserInfo() {
    console.log("In update User info function");
    let childEmailValue = document.querySelector("#emailChild").value;
    let firstNameValue = document.querySelector("#firstNameChild").value;
    let lastNameValue = document.querySelector("#lastNameChild").value;
    let userBirthday = document.querySelector("#birthDayChild").value;
    let userBiographyTextAreaValue = document.querySelector("#userBiographyTextArea").value;

    let userObject={ 
        "userEmail": childEmailValue,
        "firstName": firstNameValue,
        "lastName":lastNameValue,
        "userBirthday":userBirthday,
        "userBio":userBiographyTextAreaValue
    };
    console.log(userObject);
    
    
    let xhttp = new XMLHttpRequest();
    
    
    
    xhttp.onreadystatechange = function () {
        console.log("readyState is changing: ", xhttp.readyState);

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("readyState is 4!!! AND status is 200!!!");
        }
    }




    xhttp.open('POST', `http://localhost:9001/profile/update`);
    
    xhttp.setRequestHeader("content-type", "application/json");
    
    //xhttp.send(JSON.stringify(userObject));
    
}

function setUserInfo(respObj) {
    console.log("In get user info function");

    let emailParent = document.querySelector("#emailParent");
    let emailChild = document.querySelector("#emailChild");
    emailChild.remove();
    emailChild = document.createElement("p");
    emailChild.setAttribute("id", "emailChild");
    emailChild.setAttribute("type", "email");
    emailChild.setAttribute("placeholder", "New Email Address");
    emailChild.setAttribute("value", respObj.userEmail)
    emailChild.setAttribute("name", "childEmailValue");
    emailChild.innerText = "(Filled From DB)";
    emailParent.appendChild(emailChild);

    let birthDayParent = document.querySelector("#birthDayParent");
    let birthDayChild = document.querySelector("#birthDayChild");
    birthDayChild.remove();
    birthDayChild = document.createElement("p");
    birthDayChild.setAttribute("id", "birthDayChild");
    birthDayChild.setAttribute("type", "date");
    birthDayChild.setAttribute("value", "New Birthdate");
    birthDayChild.setAttribute("name", "BirthDayValue");
    birthDayChild.innerText = "(Filled From DB)";
    birthDayParent.appendChild(birthDayChild);

    let firstNameParent = document.querySelector("#firstNameParent");
    let firstNameChild = document.querySelector("#firstNameChild");
    firstNameChild.remove();
    firstNameChild = document.createElement("p");
    firstNameChild.setAttribute("id", "firstNameChild");
    firstNameChild.setAttribute("type", "text");
    firstNameChild.setAttribute("value", "New First Name");
    firstNameChild.setAttribute("name", "firstNameValue");
    firstNameChild.innerText = "(Filled From DB)";
    firstNameParent.appendChild(firstNameChild);

    let lastNameParent = document.querySelector("#lastNameParent");
    let lastNameChild = document.querySelector("#lastNameChild");
    lastNameChild.remove();
    lastNameChild = document.createElement("p");
    lastNameChild.setAttribute("id", "lastNameChild");
    lastNameChild.setAttribute("type", "text");
    lastNameChild.setAttribute("value", "New Last Name");
    lastNameChild.setAttribute("name", "lastNameValue");
    lastNameChild.innerText = "(Filled From DB)";
    lastNameParent.appendChild(lastNameChild);
}


function startUp() {
    console.log("In startup Function");

  

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log("readyState is changing: ", xhttp.readyState);

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("readyState is 4!!! AND status is 200!!!");


            console.log(xhttp.responseText);
            let respObj = JSON.parse(xhttp.responseText);
            console.log(respObj);

            setUserInfo(respObj);
            setUpPage(respObj);
        }
    }




    xhttp.open('GET', `http://localhost:9001/profile/` + "Hiro");
    xhttp.send();


}

function setUpPage(respObj) {

}

