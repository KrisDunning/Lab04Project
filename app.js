'use strict';

let popup = document.getElementById("popupC");
let pppBTNS=document.getElementById("popupB");
let h1text=document.getElementById("h1text");
let icon= document.getElementById("headerIcon");
let catBTN = document.getElementById("catsButton");
let dogBTN = document.getElementById("dogsButton");
let ratePopup=document.getElementById("ratePopup");
let rateRadios=document.getElementsByName("Stars");

window.onload = function runscript()
{
    popup.style.display="block";
    catBTN.addEventListener("click",selectCats);
    dogBTN.addEventListener("click",selectDogs);
    //console.log("runscript loaded");
}

function selectCats()
{
    //console.log("cat btn clicked");
    popup.style.display="none";
    let catIcon= document.getElementById("headerIcon");
    catIcon.src="images/caticon.png";   
    // console.log(h1text);
   // h1text.innerHTML=" Pet Adoptions CAAAAATS!";
    let mainImage=document.getElementById("home_main_image");
    mainImage.src="images/christmasCat.jpg";
    let subIMG1=document.getElementById("subimage1");
    let subIMG2=document.getElementById("subimage2");
    let subIMG3=document.getElementById("subimage3");
    subIMG1.src="images/christmasCat.jpg";
    subIMG2.src="images/christmasCat.jpg";
    subIMG3.src="images/christmasCat.jpg";
                
 };
    
function selectDogs()
{
    //console.log("dog btn clicked");
    popup.style.display="none";
    let dogIcon= document.getElementById("headerIcon");
    dogIcon.src="images/dogicon.png";
    //console.log(h1text);
    //h1text.innerHTML=" Pet Adoptions DOOOOOGS!";
    let mainImage=document.getElementById("home_main_image");
    mainImage.src="images/fourDogsOnChairs.jpg";
    let subIMG1=document.getElementById("subimage1");
    let subIMG2=document.getElementById("subimage2");
    let subIMG3=document.getElementById("subimage3");
    subIMG1.src="images/fourDogsOnChairs.jpg";
    subIMG2.src="images/fourDogsOnChairs.jpg";
    subIMG3.src="images/fourDogsOnChairs.jpg";
};


function iconSpin()
{
     if (icon.src.includes("cat"))
        { 
        h1text.innerHTML=" CAAAAATS!"
        }
     else if (icon.src.includes("dog"))
     {
         h1text.innerHTML=" DOOOOOGS!";
     };

    icon.style.transform = "rotateY(180deg)";
    icon.style.transform = 'rotate(180deg)';
    //console.log("ICOn SPIN!");
}

function showRating()
{
    ratePopup.style.display="flex";
}

function rateMe()
{

    for (let i= 0; i < rateRadios.length; i++)
    {
        if(rateRadios[i].checked)
        {
        if (rateRadios[i].value>4)
        {
            console.log("Yay! Thank you!");
            alert("THANK YOU SO MUCH KIND STRANGER!");
            ratePopup.style.display="none";
            rateRadios[i].checked=false;
        }    
        else
        {
            alert("Sorry please rate 5 stars");
            
        }
        }
    }
}