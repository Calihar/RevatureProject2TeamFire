window.onload = function () {
    document.getElementById('logout').addEventListener("click", redirectToLoginPage);
    document.getElementById('submit').addEventListener("click", createPostDOM);

}
window.onunload = function () {
    window.localStorage.clear();
    null;

}

function preventBack() {
    window.history.forward();
  }
  
  setTimeout("preventBack()", 0);

function redirectToLoginPage(){
    
    window.location.replace("../landing.html");
}

function createPost(){
 
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){ // This step is second last. We are only setting up here before calling it later.

        if(xhttp.readyState==4 && xhttp.status ==200){
            let query = JSON.parse(xhttp.responseText);
            // myDOM(query);
        }
    }
    xhttp.open('Post', 'http://54.147.157.227:9001/post/post');

    xhttp.send();
}

function createPostDOM(){
    
    // Create Variables
     let newPostDiv = document.createElement("div"); // Container
    newPostDiv.classList.add("container-sm", "row", "border", "rounded", "mx-auto", "py-3", "my-3"); //div creation
    
    let newRatingDiv = document.createElement("div"); // Rating Div
    newRatingDiv.classList.add("col-auto");

    let newCard = document.createElement("div"); // Card Div
    newCard.classList.add("card");
    newCard.style = "width: 15rem;";

    let newPoster = document.createElement("img"); // img div
    newPoster.classList.add("card-img-top");
    newPoster.setAttribute("alt", "poster");
    newPoster.setAttribute("src", "photo.png"); // The DOM for the Poster goes here.

    let newCardBody = document.createElement("div"); // Container
    newCardBody.classList.add("card-body");

    let newh5 = document.createElement("h5");
    newPoster.classList.add("card-title")
    // newh5 = document.textContent : "Hello Za Warudo"

    // Appending
   // newPostDiv.appendChild(newContent);





    // Appending to Document Body
    newCard.appendChild(newPoster);
    newRatingDiv.appendChild(newCard);
    newPostDiv.appendChild(newRatingDiv);
    
    
    let newSelection = document.querySelector("#myBody")

    newSelection.appendChild(newPostDiv);
}