let Clint = document.getElementById("nameClint");
let NamePlane = document.querySelector(".hthreePlane");
let PricePlane = document.querySelector(".hThreePrice");
let NamePri = document.getElementById("confirmPriceNamee");
let ValPri = document.getElementById("confirmPriceVale");

let Pag =  document.getElementById("onebttn")

if (document.title === "Summary") {
Pag.classList.add("selectPage");
}else {

}


if (localStorage.getItem("price") == "mo") {
    if (localStorage.getItem("nameAcMo")){
        NamePlane.innerHTML = localStorage.getItem("nameAcMo") ;
        PricePlane.innerHTML = localStorage.getItem("AcredeMonthly") + "mo";
        let k =  localStorage.getItem("AcredeMonthly") ;
       localStorage.setItem("resultOne" , k );
    }else if (localStorage.getItem("nameAdMo")) {
        NamePlane.innerHTML = localStorage.getItem("nameAdMo") ;
        PricePlane.innerHTML = localStorage.getItem("AdvancedMonthly") + "mo";
        let k =  localStorage.getItem("AdvancedMonthly") ;
        localStorage.setItem("resultOne" , k ) ;
    }else if (localStorage.getItem("namePrMo")) {
        NamePlane.innerHTML = localStorage.getItem("namePrMo") ;
        PricePlane.innerHTML = localStorage.getItem("ProoMonthly") + "mo";
        let k =  localStorage.getItem("ProoMonthly") ;
        localStorage.setItem("resultOne" , k ) ;
    }else {
        NamePlane.innerHTML = "Not Found" ;
        PricePlane.innerHTML = "!!"
    }
} else {



    if (localStorage.getItem("nameAcMo")){
        NamePlane.innerHTML = localStorage.getItem("nameAcMo") ;
        PricePlane.innerHTML = localStorage.getItem("AcredeYearly") + "yr";
        let k =  localStorage.getItem("AcredeYearly") ;
        localStorage.setItem("resultOne" , k ) ;
    }else if (localStorage.getItem("nameAdMo")) {
        NamePlane.innerHTML = localStorage.getItem("nameAdMo") ;
        PricePlane.innerHTML = localStorage.getItem("AdvancedYearly") + "yr";
        let k =  localStorage.getItem("AdvancedYearly") ;
        localStorage.setItem("resultOne" , k ) ;
    }else if (localStorage.getItem("namePrMo")) {
        NamePlane.innerHTML = localStorage.getItem("namePrMo") ;
        PricePlane.innerHTML = localStorage.getItem("ProoYearly") + "yr" ;
        let k =  localStorage.getItem("ProoYearly") ;
        localStorage.setItem("resultOne" , k ) ;
    }else {
        NamePlane.innerHTML = "Not Found" ;
        PricePlane.innerHTML = "!!"
    }

}


// =====================================================================


if (localStorage.getItem("price") == "mo") {

if (sessionStorage.getItem("onlineName")){
    let VariableNameForOnlie = sessionStorage.getItem("onlineName") ;
    let VariableNameForOV = sessionStorage.getItem("onlineMo") ;
    NamePri.innerHTML = VariableNameForOnlie ; 
    ValPri.innerHTML = VariableNameForOV + "mo" ;
    let z =  sessionStorage.getItem("onlineMo") ;
    localStorage.setItem("resultTwo" , z ) ;
}else if (sessionStorage.getItem("largName")) {
    let VariableNameForOnliee = sessionStorage.getItem("largName") ;
    let VariableNameForOVv = sessionStorage.getItem("largeMo") ;
NamePri.innerHTML = VariableNameForOnliee ;
ValPri.innerHTML =  VariableNameForOVv + "mo";
let z =  sessionStorage.getItem("largeMo") ;
localStorage.setItem("resultTwo" , z ) ;
}else if (sessionStorage.getItem("custName")) {
    let VariableNameForOnliere = sessionStorage.getItem("custName") ;
    let VariableNameForOVvr = sessionStorage.getItem("customerMo") ;
    NamePri.innerHTML = VariableNameForOnliere ;
    ValPri.innerHTML = VariableNameForOVvr + "mo";
    let z =  sessionStorage.getItem("customerMo") ;
localStorage.setItem("resultTwo" , z ) ;
}else {
    NamePri.innerHTML = "Not Found" ;
    ValPri.innerHTML = "!!" ;
}
} else {
    if (sessionStorage.getItem("onlineName")){
        let VariableNameForOnlieren = sessionStorage.getItem("onlineName") ;
    let VariableNameForOVvrn = sessionStorage.getItem("onlineYr") ;
        NamePri.innerHTML = VariableNameForOnlieren ; 
        ValPri.innerHTML = VariableNameForOVvrn + "yr" ;
        let z =  sessionStorage.getItem("onlineYr") ;
        localStorage.setItem("resultTwo" , z ) ;
    }else if (sessionStorage.getItem("largName")) {
        let VariableNameForOnlierenl = sessionStorage.getItem("largName") ;
        let VariableNameForOVvrnl = sessionStorage.getItem("LargeYr") ;
    NamePri.innerHTML = VariableNameForOnlierenl ;
    ValPri.innerHTML = VariableNameForOVvrnl + "yr";
    let z =  sessionStorage.getItem("LargeYr") ;
    localStorage.setItem("resultTwo" , z ) ;
    }else if (sessionStorage.getItem("custName")) {
        let VariableNameF = sessionStorage.getItem("custName") ;
        let VariableName = sessionStorage.getItem("customerYr") ;
        NamePri.innerHTML = VariableNameF ;
        ValPri.innerHTML = VariableName + "yr";
        let z =  sessionStorage.getItem("customerYr") ;
        localStorage.setItem("resultTwo" , z ) ;
    }else {
        NamePri.innerHTML = "Not Found" ;
        ValPri.innerHTML = "!!" ;
    }
};
let TotallP = document.querySelector(".totalypri") ;
let Rtwo = localStorage.getItem("resultOne");
let Rone = localStorage.getItem("resultTwo");
let TotallyResult = parseInt(Rone) + parseInt(Rtwo) ;
if (localStorage.getItem("price") == "mo") {
    TotallP.innerHTML = TotallyResult + "/mo";
}else {
    TotallP.innerHTML = TotallyResult + "/yr" ;
}

function finalley() {
    window.location.href = "../stepFinish/finish.html";
}

