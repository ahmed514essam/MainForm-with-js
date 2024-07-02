let priceOnline  = document.getElementById("priOnline") ;
let priceLarg  = document.getElementById("priLArges") ;
let priceCustom  = document.getElementById("priCustoms") ;
let divOnline  = document.getElementById("onlineID") ;
let divLarge  = document.getElementById("largeID") ;
let divCustom  = document.getElementById("customId") ;
let inpcheck = document.getElementById("inpcheck");
let paraOnline = document.querySelector(".pprio");
let paraLarge = document.querySelector(".pprit");
let paraCustom = document.querySelector(".pprih");

let onlineMo = 1;
let largeMo = 2;
let customMo = 2;

let onlineY = 10;
let largeY = 20;
let customY = 20;

let Pag =  document.getElementById("onebttn")

if (document.title === "Pick add-Ons") {
Pag.classList.add("selectPage");
}else {

}

let pprie = localStorage.getItem("price");

if (pprie === "mo"){
    paraOnline.innerHTML = onlineMo + "mo" ;
    paraLarge.innerHTML = largeMo + "mo" ;
paraCustom.innerHTML = customMo + "mo" ;

    }else{
    
        paraOnline.innerHTML = onlineY + "yr" ;
        paraLarge.innerHTML = largeY + "yr" ;
    paraCustom.innerHTML = customY + "yr" ;

    }





function openOnline() {
divOnline.classList.toggle("act")
sessionStorage.clear() ;
if (pprie === "mo") {
    sessionStorage.setItem("onlineMo", onlineMo);
    sessionStorage.setItem("onlineName", "Online Service");
}else {
    sessionStorage.setItem("onlineYr", onlineY);
    sessionStorage.setItem("onlineName", "Online Service");
}
}

function openLarg() {
    divLarge.classList.toggle("act")
    sessionStorage.clear() ;
    if (pprie === "mo") {
        sessionStorage.setItem("largeMo", largeMo);
        sessionStorage.setItem("largName", "Larger Storger");
        
    }else {
        sessionStorage.setItem("LargeYr", largeY);
        
        sessionStorage.setItem("largName", "Larger Storger");
    }


}





function openCustom() {
    divCustom.classList.toggle("act")
    sessionStorage.clear() ;
    if (pprie === "mo") {
        sessionStorage.setItem("customerMo", customMo);
        sessionStorage.setItem("custName", "Customizable Profile");
    }else {
        sessionStorage.setItem("customerYr", customY);
        sessionStorage.setItem("custName", "Customizable Profile");
    }
}








let btne = document.querySelector(".bbtt");

btne.addEventListener("click", hrefToNext);

function hrefToNext() {
  let selectedCount = 0;
  if (divOnline.classList.contains("act")) {
    selectedCount++;
  }
  if (divLarge.classList.contains("act")) {
    selectedCount++;
  }
  if (divCustom.classList.contains("act")) {
    selectedCount++;
  }
  if (selectedCount > 1) {
    alert("You can choose only one option!");
  } else if (selectedCount === 1) {
    window.location.href = "../Step4/pageFour.html";
  } else {
    alert("You must choose one option!");
  }
}