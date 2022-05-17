window.onload = function () {
    startUp();

    document.getElementById("childProfilePictureModalPictureUpload").addEventListener('click', changeAvatarPictureFunction);
    document.getElementById("emailBtn").addEventListener('click', changeEmailFunction);
    document.getElementById("changeBirthDayBtn").addEventListener('click', changeBirthDayFunction);
    document.getElementById("firstNameParentBtn").addEventListener('click', changeFirstNameFunction);
    document.getElementById("lastNameParentBtn").addEventListener('click', changeLastNameFunction);
    document.getElementById("modalUpdateBtn").addEventListener('click', updateUserInfo);
}

function changeAvatarPictureFunction() {
    console.log("In Change Avatar Picture Function");

    let ParentProfilePictureModalPictureUpload = document.querySelector("#ParentProfilePictureModalPictureUpload");

    let childProfilePictureModalPictureUpload = document.querySelector("#childProfilePictureModalPictureUpload");
    childProfilePictureModalPictureUpload.remove();
    childProfilePictureModalPictureUpload.removeEventListener('click', changeAvatarPictureFunction);

    let childModalPictureDescrpt = document.createElement("p");
    childModalPictureDescrpt.innerText = "Please choose file to upload";
    ParentProfilePictureModalPictureUpload.appendChild(childModalPictureDescrpt);

    let childFileUpload = document.createElement("input")
    childFileUpload.setAttribute("id", "fileupload")
    childFileUpload.setAttribute("type", "file");
    childFileUpload.setAttribute("name", "fileupload");
    ParentProfilePictureModalPictureUpload.appendChild(childFileUpload);

    let childFileSubmitBtn = document.createElement("button");
    childFileSubmitBtn.setAttribute("id", "upload-button")
    childFileSubmitBtn.setAttribute("type", "submit");
    childFileSubmitBtn.innerText = "Upload";
    ParentProfilePictureModalPictureUpload.appendChild(childFileSubmitBtn);
    
    document.getElementById("upload-button").addEventListener('click', serverSendAndGetPhoto);

}

function serverSendAndGetPhoto() {
    let file = document.getElementById('fileupload').files[0];
    let formData = new FormData();
    formData.append("file", file);
    
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let respObj = xhttp.responseText;
            document.querySelector("#profilePictureMain").setAttribute("src", respObj);
            document.querySelector("#navBarPhoto").setAttribute("src", respObj);
        }
    }
    xhttp.open('POST', `http://localhost:9001/profile/picture`);
    xhttp.send();
    xhttp.open('POST', "http://localhost:9001/profile/picture")

    xhttp.send(formData);

}

function changeEmailFunction() {
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
    let childEmailValue = document.querySelector("#emailChild").value;
    let firstNameValue = document.querySelector("#firstNameChild").value;
    let lastNameValue = document.querySelector("#lastNameChild").value;
    let userBirthday = document.querySelector("#birthDayChild").value;
    let userBiographyTextAreaValue = document.querySelector("#userBiographyTextArea").value;

    let userObject = {
        "userEmail": childEmailValue,
        "firstName": firstNameValue,
        "lastName": lastNameValue,
        "userBirthday": userBirthday,
        "userBio": userBiographyTextAreaValue
    };

    let xhttp = new XMLHttpRequest();



    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("readyState is 4!!! AND status is 200!!!");
        }
    }

    xhttp.open('POST', `http://localhost:9001/profile/update`);

    xhttp.setRequestHeader("content-type", "application/json");


    xhttp.send(JSON.stringify(userObject));


}

function setUserInfo(respObj) {

    let emailChild = document.querySelector("#emailChild");
    emailChild.innerText = respObj.userEmail;

    let birthDayChild = document.querySelector("#birthDayChild");
    let tempDate = new Date(respObj.userBirthday).toLocaleDateString();
    birthDayChild.innerText = tempDate;

    let firstNameChild = document.querySelector("#firstNameChild");
    firstNameChild.innerText = respObj.firstName;

    let lastNameChild = document.querySelector("#lastNameChild");
    lastNameChild.innerText = respObj.lastName;

}

function startUp() {
    console.log("In startup Function");



    //When done with testing, delete
    //setUserInfo();
    ///////////////////////////////////


    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log("readyState is changing: ", xhttp.readyState);

        if (xhttp.readyState == 4 && xhttp.status == 200) {

            console.log("readyState is 4!!! AND status is 200!!!");



            console.log(xhttp.responseText);
            let respObj = JSON.parse(xhttp.responseText);
            console.log(respObj);

            setUserInfo(respObj);
            setProfilePage(respObj);


        }
    }

    let currentURLArray = window.location.href.split("/");
    let length = currentURLArray.length;
    let URLEnd = currentURLArray[length - 1];
    // let URLEnd = "Calihar";

    console.log(URLEnd);
    xhttp.open('POST', "http://localhost:9001/get/profile/" + URLEnd);
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send();
}

function setProfilePage(respObj) {
    console.log("In Set Profile Page Function");
    //username
    let usernameTitle = document.querySelector("#usernameTitle");
    usernameTitle.innerText = respObj.username;

    let usernameModal = document.querySelector("#usernameModal");
    usernameModal.innerText = respObj.username;

    //MODEL FROM PROFILE PAGE
    //email
    let userEmail = document.querySelector("#emailChild");
    userEmail.innerText = respObj.userEmail;

    //first
    let firstName = document.querySelector("#firstNameChild");
    firstName.innerText = respObj.firstName;

    //last
    let lastName = document.querySelector("#lastNameChild");
    lastName.innerText = respObj.lastName;


    //birthday
    let userBirthday = document.querySelector("#birthDayChild");
    let eventB = new Date(respObj.userBirthday).toLocaleDateString();
    userBirthday.innerText = eventB;

    //biography
    let userBio = document.querySelector("#userBiographyTextArea");
    userBio.innerText = respObj.userBio

    getProfilePhoto(respObj.profilePicName);
    

}

function getProfilePhoto(picName) {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log("readyState is changing: ", xhttp.readyState);

        if (xhttp.readyState == 4 && xhttp.status == 200) {

            let respObj = xhttp.responseText;
            document.querySelector("#profilePictureMain").setAttribute("src", respObj);
            document.querySelector("#navBarPhoto").setAttribute("src", respObj);
            document.querySelector("#childProfilePictureModalPictureUpload").setAttribute("src", respObj);
        }
    }

    let params = "?picName=" + picName;
    xhttp.open('POST', "http://localhost:9001/photo" + params);

    xhttp.send();

}