window.onload = function () {
    document.getElementById("emailBtn").addEventListener('click', changeEmailFunction);
    document.getElementById("changeBirthDayBtn").addEventListener('click', changeBirthDayFunction)
    document.getElementById("firstNameParentBtn").addEventListener('click', changeFirstNameFunction);
    document.getElementById("lastNameParentBtn").addEventListener('click', changeLastNameFunction);


}

function changeEmailFunction() {
    let emailParent = document.querySelector("#emailParent");
    let emailChild = document.querySelector("#emailChild");
    emailChild.remove();
    emailChild = document.createElement("P");
    emailChild.setAttribute("id", "emailChild");
    emailChild.innerText = "(Filled From DB)"
    emailParent.appendChild(emailChild);
}

function changeBirthDayFunction() {
    let birthDayParent = document.querySelector("#birthDayParent");
    let birthDayChild = document.querySelector("#birthDayChild");
    birthDayChild.remove();
    birthDayChild = document.createElement("P");
    birthDayChild.setAttribute("id", "birthDayChild");
    birthDayChild.innerText = "(Filled From DB)"
    birthDayParent.appendChild(birthDayChild);
}

function changeFirstNameFunction() {
    let firstNameParent = document.querySelector("#firstNameParent");
    let firstNameChild = document.querySelector("#firstNameChild");
    firstNameChild.remove();
    firstNameChild = document.createElement("P");
    firstNameChild.setAttribute("id", "firstNameChild");
    firstNameChild.innerText = "(Filled From DB)"
    firstNameParent.appendChild(firstNameChild);
}

function changeLastNameFunction() {
    let lastNameParent = document.querySelector("#firstNameParent");
    let lastNameChild = document.querySelector("#firstNameChild");
    lastNameChild.remove();
    lastNameChild = document.createElement("P");
    lastNameChild.setAttribute("id", "lastNameChild");
    lastNameChild.innerText = "(Filled From DB)"
    lastNameParent.appendChild(lastNameChild);
}



    function startUp() {


        let xhttp = new XMLHttpRequest();





        xhttp.onreadystatechange = function () {
            // console.log("readyState is changing: ", xhttp.readyState);

            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log("readyState is 4!!! AND status is 200!!!");

                /*   // console.log(xhttp.responseText);
                  let foodObj = JSON.parse(xhttp.responseText);
                  console.log(foodObj);
      
                  ourDOMManipulation(foodObj);
              } */
            }




            /* xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${textField}`); */
            //for your project 1 you'll do something like this:
            //xhttp.open('POST', 'http://localhost:9001/my/api/uri'); <---PLS put the "http" otherwise you'll
            // likely get a "CORS" error


            /*
                STEP 4: send the request, providing any body object the request needs
                    (readState will go through the REST of the numbers here)
        
                (in our case we're using a GET method, and we aren't utilizing any data in the body of the request)
        
                xhttp.send(myRequestBodyObject);
            */
            /* xhttp.send(); */


        }





        function ourDOMManipulation(ourObjectFromJSON) {
            document.getElementById("pokeName").innerText = ourObjectFromJSON.name;
            document.getElementById("pokedexNumber").innerText = ourObjectFromJSON.id;
            document.getElementById("pokeImage").setAttribute('src', ourObjectFromJSON.sprites.front_default);

        }











    }
