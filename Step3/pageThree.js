let priceOnline  = document.getElementById("priOnline") ;
let priceLarg  = document.getElementById("priLArges") ;
let priceCustom  = document.getElementById("priCustoms") ;
let divOnline  = document.getElementById("onlineID") ;
let divLarge  = document.getElementById("largeID") ;
let divCustom  = document.getElementById("customId") ;
let inpcheck = document.getElementById("inpcheck")
let onlineMo = 1;
let largeMo = 2;
let customMo = 2;

let onlineY = 10;
let largeY = 20;
let customY = 20;





if (localStorage.getItem("ProoMonthly") || localStorage.getItem("AdvancedMonthly") || localStorage.getItem("AcredeMonthly")) {

priceOnline.innerHTML = onlineMo ;
priceLarg.innerHTML = largeMo ;
priceOnline.innerHTML = customMo ;


}else if (localStorage.getItem("ProoYearly") || localStorage.getItem("AdvancedYearly") || localStorage.getItem("AcredeYearly")){
priceOnline.innerHTML = onlineY ;
priceLarg.innerHTML = largeY ;
priceCustom.innerHTML = customY ;
}else {

};
function openOnline() {
divOnline.classList.toggle("act")
sessionStorage.setItem("lastname", onlineMo);
}
function openLarg() {
    divLarge.classList.toggle("act")
}
function openCustom() {
    divCustom.classList.toggle("act")
}
