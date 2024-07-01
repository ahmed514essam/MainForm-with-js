let Clint = document.getElementById("nameClint");
let NamePlane = document.querySelector(".hthreePlane");
let PricePlane = document.querySelector(".hThreePrice");
let NamePri = document.querySelector("confirmPriceName");
let ValPri = document.querySelector("confirmPriceVal");
if (localStorage.getItem("clint")) {
Clint.innerHTML = localStorage.getItem("clint") ;
}else {
   Clint.innerHTML = " Not Found" ;
}


if (localStorage.getItem("price") == "mo") {
    if ( localStorage.getItem("nameAcMo")) {
        NamePlane.innerHTML = localStorage.getItem("nameAcMo") ;
        if (localStorage.getItem("AcredeMonthly")) {
        PricePlane.innerHTML = localStorage.getItem("AcredeMonthly") + "mo";
        }else if (localStorage.getItem("AcredeYearly")) {
            localStorage.getItem("AcredeYearly") ;
        }
        }else if (localStorage.getItem("nameAdMo")){
            NamePlane.innerHTML = localStorage.getItem("nameAdMo") ;
            if (localStorage.getItem("AdvancedMonthly")) {
                PricePlane.innerHTML = localStorage.getItem("AdvancedMonthly") + "mo" ;
                }else if (localStorage.getItem("AdvancedYearly")) {
                    localStorage.getItem("AdvancedYearly") ;
                }
        }else if (localStorage.getItem("namePrMo")) {
            NamePlane.innerHTML = localStorage.getItem("namePrMo") ;
            if (localStorage.getItem("ProoMonthly")) {
                PricePlane.innerHTML = localStorage.getItem("ProoMonthly") + "mo";
                }else if (localStorage.getItem("ProoYearly")) {
                    localStorage.getItem("ProoYearly") ;
                }
        } 
}else {

    if ( localStorage.getItem("nameAcMo")) {
        NamePlane.innerHTML = localStorage.getItem("nameAcMo") ;
        if (localStorage.getItem("AcredeMonthly")) {
        PricePlane.innerHTML = localStorage.getItem("AcredeMonthly") + "yr";
        }else if (localStorage.getItem("AcredeYearly")) {
            localStorage.getItem("AcredeYearly") ;
        }
        }else if (localStorage.getItem("nameAdMo")){
            NamePlane.innerHTML = localStorage.getItem("nameAdMo") ;
            if (localStorage.getItem("AdvancedMonthly")) {
                PricePlane.innerHTML = localStorage.getItem("AdvancedMonthly") + "yr" ;
                }else if (localStorage.getItem("AdvancedYearly")) {
                    localStorage.getItem("AdvancedYearly") ;
                }
        }else if (localStorage.getItem("namePrMo")) {
            NamePlane.innerHTML = localStorage.getItem("namePrMo") ;
            if (localStorage.getItem("ProoMonthly")) {
                PricePlane.innerHTML = localStorage.getItem("ProoMonthly") + "yr";
                }else if (localStorage.getItem("ProoYearly")) {
                    localStorage.getItem("ProoYearly") ;
                }
        } 

}


if (localStorage.getItem("price") == "mo"){

if (sessionStorage.getItem("sName")) {
NamePri.innerHTML = sessionStorage.getItem("sName");
if (sessionStorage.getItem("lastname")){
ValPri.innerHTML = sessionStorage.getItem("lastname") + "mo";
}else{
    ValPri.innerHTML = "No Resut";
}
}else{
    NamePri.innerHTML = "No Resut";
}



}else {


    if (sessionStorage.getItem("sName")) {
        NamePri.innerHTML = sessionStorage.getItem("sName");
        if (sessionStorage.getItem("lastname")){
        ValPri.innerHTML = sessionStorage.getItem("lastname") + "yr";
        }else{
            ValPri.innerHTML = "No Resut";
        }
        }else{
            NamePri.innerHTML = "No Resut";
        }
        
}