'use strict';

let popup = document.getElementById("popupC");
let pppBTNS=document.getElementById("popupB");
let h1text=document.getElementById("h1text");
let icon= document.getElementById("headerIcon");

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
        let mainImage=document.getElementById("home_main_image");
        mainImage.src="images/christmasCat.jpg";
        let subIMG1=document.getElementById("subimage1");
        let subIMG2=document.getElementById("subimage2");
        let subIMG3=document.getElementById("subimage3");
        subIMG1.src="images/christmasCat.jpg";
        subIMG2.src="images/christmasCat.jpg";
        subIMG3.src="images/christmasCat.jpg";
                
    };
    
    function selectDogs(){
        console.log("dog btn clicked");
       // let popup = document.getElementById("popupC");
        popup.style.display="none";
        let dogIcon= document.getElementById("headerIcon");
        dogIcon.src="images/dogicon.png";
        console.log(h1text);
        h1text.innerHTML=" Pet Adoptions DOOOOOGS!";
        let mainImage=document.getElementById("home_main_image");
        mainImage.src="images/fourDogsOnChairs.jpg";
        let subIMG1=document.getElementById("subimage1");
        let subIMG2=document.getElementById("subimage2");
        let subIMG3=document.getElementById("subimage3");
        subIMG1.src="images/fourDogsOnChairs.jpg";
        subIMG2.src="images/fourDogsOnChairs.jpg";
        subIMG3.src="images/fourDogsOnChairs.jpg";
    };


function iconSpin() {

 icon.style.transform = "rotateY(180deg)";
 icon.style.transform = 'rotate(180deg)';
    // if (deg=="180deg")
    // {
    //         deg="360deg";
    // }
    // else if (deg=="360deg")
    // {
    //          deg="180deg";
    // }
    

 console.log("ICOn SPIN!");
}