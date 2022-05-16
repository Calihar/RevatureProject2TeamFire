window.onload = function () {
    document.getElementById('confirmBtn').addEventListener('click', resetPasswordConfirm);

}

window.onunload = () => {
    window.localStorage.clear();
}


function resetPasswordConfirm() {
    console.log('resetting')
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let rPassword = document.querySelector('#rPassword').value;
    if (passwordsMatch(password, rPassword)) {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                if(JSON.parse(xhttp.responseText)){
                    let text = document.querySelector('#texto');
                    text.innerText = "Password Reset Successfully"
                    window.location = "http://localhost:9001/login"
                }

            }
        }

        xhttp.open('POST', "http://localhost:9001/profile/passwordreset")

        let reqObj = {
            "username" : username,
            "password": password
        }
        xhttp.setRequestHeader("content-type", "application/json");

        xhttp.send(JSON.stringify(reqObj));

    }


}



function passwordsMatch(password, rPassword) {
    let text = document.querySelector('#texto');
    if (password.length < 8) {
        text.innerHTML = "Password is not long enough";
        return false;
    }
    if (password != rPassword) {
        text.innerHTML = "Passwords do no match";
        return false;
    }
    return true;
}
