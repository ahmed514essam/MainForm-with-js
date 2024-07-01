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
let moAdv = 12;
let moAcr = 9;
let moPr = 15;


function animationToggle() {
  Toggle.classList.toggle("active");
  if (Toggle.classList.contains("active")) {
    document.getElementById("texxt").innerHTML = "Monthly";
    AmountAdvanced.innerHTML = moAdv + "mo";
    AmountAcrade.innerHTML = moAcr + "mo";
    AmountPro.innerHTML = moPr + "mo";
  } else {
    document.getElementById("texxt").innerHTML = "Yearly";
    AmountAdvanced.innerHTML = Advanced + "yr";
    AmountAcrade.innerHTML = Acrade + "yr";
    AmountPro.innerHTML = Pro + "yr";
  }
}
function onec() {
  Acrede.classList.toggle("blu");
localStorage.clear()
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("AcredeMonthly", moAcr);
    localStorage.setItem("nameAcMo", "Arcade");
    localStorage.setItem("price", "mo");
  } else {
    localStorage.setItem("AcredeYearly", Acrade);
    localStorage.setItem("nameAcMo", "Arcade");
    localStorage.setItem("price", "yr");
  }
}




function twoc() {
  Advanc.classList.toggle("blu");
  localStorage.clear()
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("AdvancedMonthly", moAdv);
    localStorage.setItem("nameAdMo", "Advanced");
    localStorage.setItem("price", "mo");
  } else {
    localStorage.setItem("AdvancedYearly", Advanced);
    localStorage.setItem("nameAdMo", "Advanced");
    localStorage.setItem("price", "yr");
  }
}
function threec() {
  Proo.classList.toggle("blu");
  localStorage.clear()
  if (Toggle.classList.contains("active")) {
    localStorage.setItem("ProoMonthly", moPr);
    localStorage.setItem("namePrMo", "moPr");
    localStorage.setItem("price", "mo");
  } else {
    localStorage.setItem("ProoYearly", Pro);
    localStorage.setItem("namePrMo", "moPr");
    localStorage.setItem("price", "yr");
  }
}
let btn = document.querySelector(".btnNext");
btn.addEventListener("click", hrefToNext);
function hrefToNext() {
  let selectedCount = 0;
  if (Proo.classList.contains("blu")) {
    selectedCount++;
  }
  if (Advanc.classList.contains("blu")) {
    selectedCount++;
  }
  if (Acrede.classList.contains("blu")) {
    selectedCount++;
  }
  if (selectedCount > 1) {
    alert("You can choose only one option!");
  } else if (selectedCount === 1) {
    window.location.href = "../Step3/pageThree.html";
  } else {
    alert("You must choose one option!");
  }
}
