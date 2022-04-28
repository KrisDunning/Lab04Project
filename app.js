'use strict';

let popup = document.getElementById("popupC");
let pppBTNS=document.getElementById("popupB");
let h1text=document.getElementById("h1text");

window.onload = function runscript(){
//window.addEventListener("load", () => {

    // console.log("window event listener activated");
        popup.style.display="block";
       // pppBTNS.style.display="block";
        // popup.setAttribute("display", "block");    
        // pppBTNS.setAttribute("display", "block");
    

        let catBTN = document.getElementById("catsButton");
        let dogBTN = document.getElementById("dogsButton");
        // let ppp = document.getElementById("pppp");
        // ppp.setAttribute("display", "block");
        catBTN.addEventListener("click",selectCats);
        dogBTN.addEventListener("click",selectDogs);
   // });

console.log("runscript loaded");
}


//window.addEventListener("load", "openPopup")
    function selectCats(){
        console.log("cat btn clicked");
       // let popup = document.getElementById("popupC");
        popup.style.display="none";
        let catIcon= document.getElementById("headerIcon");
        catIcon.src="images/caticon.png";   
        //let h1text=document.getElementById("h1text");
        console.log(h1text);
        h1text.innerHTML=" Pet Adoptions CAAAAATS!";

                
    };
    
    function selectDogs(){
        console.log("dog btn clicked");
       // let popup = document.getElementById("popupC");
        popup.style.display="none";
        let dogIcon= document.getElementById("headerIcon");
        dogIcon.src="images/dogicon.png";
        console.log(h1text);
        h1text.innerHTML=" Pet Adoptions DOOOOOGS!";
    };