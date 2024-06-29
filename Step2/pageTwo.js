let Toggle = document.querySelector(".toggle");
let Text = document.querySelector(".text");
let AmountAdvanced = document.querySelector(".paraPriceA");
let AmountAcrade = document.querySelector(".paraPricR");
let AmountPro = document.querySelector(".paraPriceO");

let Acrede = document.getElementById("one");
let Advanc = document.getElementById("two");
let Proo = document.getElementById("three");
let Pro = 150;
let Advanced = 120;
let Acrade = 90;

let moAdv = Advanced / 10 + "mo";
let moAcr = Acrade / 10 + "mo";
let moPr = Pro / 10 + "mo";

function animationToggle() {
  Toggle.classList.toggle("active");

  if (Toggle.classList.contains("active")) {
    document.getElementById("texxt").innerHTML = "Monthly";
    AmountAdvanced.innerHTML = moAdv;
    AmountAcrade.innerHTML = moAcr;
    AmountPro.innerHTML = moPr;
  } else {
    document.getElementById("texxt").innerHTML = "Yearly";
    AmountAdvanced.innerHTML = Advanced + "yr";
    AmountAcrade.innerHTML = Acrade + "yr";
    AmountPro.innerHTML = Pro + "yr";
  }
}

function onec() {
  Acrede.classList.toggle("blu");
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("AcredeMonthly", moAcr);
  } else {
    localStorage.setItem("AcredeYearly", Acrade);
  }
}
function twoc() {
  Advanc.classList.toggle("blu");
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("AdvancedMonthly", moAdv);
  } else {
    localStorage.setItem("AdvancedYearly", Advanced);
  }
}
function threec() {
  Proo.classList.toggle("blu");
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("ProoMonthly", moPr);
  } else {
    localStorage.setItem("ProoYearly", Pro);
  }
}
