window.onload = function (){
    document.getElementById('goback').addEventListener("click", redirectToLoginPage);
}

function redirectToLoginPage(){
    window.location.replace("../html/login.html");
}