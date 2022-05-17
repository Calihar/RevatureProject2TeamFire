let currentUser = null;

window.onload = function () {
    startUp();
    document.getElementById('logout').addEventListener("click", redirectToLoginPage);
    document.getElementById('mySubmit').addEventListener("click", createPostDOM);

}
window.onunload = function () {
    window.localStorage.clear();
    null;

}

function redirectToLoginPage() {
    ///this the line of the GODs!!!!!!
    window.localStorage.clear();
    window.location.replace("../html/login.html");
  }

function preventBack() {
    window.history.forward();
  }
  
  setTimeout("preventBack()", 0);

function redirectToLoginPage(){
    
    window.location.replace("../landing.html");
}

function startUp(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){ // This step is second last. We are only setting up here before calling it later.

        if(xhttp.readyState==4 && xhttp.status ==200){
            let query = JSON.parse(xhttp.responseText);
            console.log(query);
            currentUser = query;
        }
    }
    
    xhttp.open('POST', 'http://localhost:9001/get/currentuser');
    xhttp.send();

}

function getPhoto(picName){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){ // This step is second last. We are only setting up here before calling it later.

        if(xhttp.readyState==4 && xhttp.status ==200){
            let query = xhttp.responseText;
            return query;

        }
    }
    let params = "?picName=" + picName;

    xhttp.open('Post', 'http://localhost:9001/photo' + params, false);
    xhttp.send();

}

function createPost(){
 
    
    let myTitle = document.querySelector("#myTitle").value;
    let myReview = document.querySelector("#floatingTextarea").value;
    let myPhoto  = document.querySelector("#formFile").files[0];
    let myFlames  = document.querySelector("#myTitle").value;
    let itemtype  = document.querySelector('input[name="enum"]:checked').value;
    let myPost = {
        "reviewItem" : myTitle,
        "postContent" : myReview,
        "postRating" : myFlames,
        "itemType": itemtype
    }
    let formData = new FormData();
    formData.append("post", myPost)
    if (myPhoto != null || myPhoto != undefined){
        formData.append("file", myPhoto);
    }
    let xhttp = new XMLHttpRequest();



    xhttp.onreadystatechange = function(){ // This step is second last. We are only setting up here before calling it later.

        if(xhttp.readyState==4 && xhttp.status ==200){
            let query = JSON.parse(xhttp.responseText);
            createPostDOM(query);
        }
    }
    if (myPhoto === null || myPhoto === undefined)
        xhttp.open('Post', 'http://localhost:9001/post');
    else
        xhttp.open('Post', 'http://localhost:9001/post/photo');
    xhttp.send(formData);
}

function createPostDOM(query){

    // Create Variables
    flameCount = query.flameCount;


    //Create Elements
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

    newPoster.classList.add("card-title");
    newh5.innerText = document.querySelector("#myTitle").value; // DOM for the Title goes here.


    let newFlamesDiv = document.createElement("div");
    newPoster.classList.add("text-center");
    
    let newStrong = document.createElement("strong")
    let newP = document.createElement("p");
    if (flameCount === 0){
        newP.innerText = "Dumpster Fire"; // DOM for the Flames Flavortest goes here
    }
    else if (flameCount === 1)
        newP.innerText = "Hot Garbage"; // DOM for the Flames Flavortest goes here
    else if (flameCount === 2)
        newP.innerText = "Wet Fire"; // DOM for the Flames Flavortest goes here
    else if (flameCount === 3)
        newP.innerText = "Kindling"; // DOM for the Flames Flavortest goes here
    else if (flameCount === 4)
        newP.innerText = "On Fire"; // DOM for the Flames Flavortest goes here
    else if (flameCount === 5)
        newP.innerText = "Ablaze"; // DOM for the Flames Flavortest goes here
    else
        newP.innerText = "Bad Number";
    
    let newPostContent = document.createElement("div");
    newPostContent.classList.add("col", "mx-3");
    
    let newPostReview = document.createElement("p");
    newPostReview.classList.add("mx-auto");
    newPostReview.innerText = "Hello."; // DOM for the text review itself

    let newProfileDiv = document.createElement("div");
    newProfileDiv.classList.add("img-thumbnail", "rounded", "float-end", "mx-2", "py-3", "px-3");

    let newProfileImg = document.createElement("img");
    newProfileImg.setAttribute("src", currentUser.picName); // DOM for profile pic
    newProfileImg.setAttribute("height", "100px");
    newProfileImg.setAttribute("width", "100px");
    newProfileImg.setAttribute("alt", "Profile Picture");

    let newStrong2 = document.createElement("strong")

    let newP2 = document.createElement("p");
    newP2.classList.add("pt-3", "text-center");
    newP2.innerText = document.querySelector("#floatingTextarea").value;

    // Appending
    newPostDiv.appendChild(newRatingDiv);
    
    newRatingDiv.appendChild(newCard);
    
    newCard.appendChild(newPoster);
    newCard.appendChild(newCardBody);
    
    newCardBody.appendChild(newh5);
    newCardBody.appendChild(newFlamesDiv);
    for(let i = 0; i < flameCount; i++){
        // Add Flames
        let imgFlames = document.createElement("img");
        imgFlames.setAttribute("src", "../favicon-32x32.png")
        newFlamesDiv.append(imgFlames);

    }
    
    newCardBody.appendChild(newStrong);
    
    newStrong.appendChild(newP);
    
    newPostDiv.appendChild(newPostContent);
    
    newPostContent.appendChild(newPostReview);
    newPostContent.appendChild(newProfileDiv);

    newProfileDiv.appendChild(newProfileImg);
    newProfileDiv.appendChild(newStrong2);
    newStrong2.appendChild(newP2);

    // Appending to Document Body
    let newSelection = document.querySelector("#myBody")
    newSelection.appendChild(newPostDiv);

}