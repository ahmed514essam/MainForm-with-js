let Toggle = document.querySelector(".toggle");
let Text = document.querySelector(".text");
function animationToggle() {
    Toggle.classList.toggle("active")



    if (Toggle.classList.contains("active")){
       
       
        document.getElementById("texxt").innerHTML = "Monthly";


    }else{
        document.getElementById("texxt").innerHTML = "Yearly";
    }
}

console.log(Toggle.classList.contains("active"))
console.log(Text.innerHtml = "ON")


