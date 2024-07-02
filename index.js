let Name = document.querySelector(".name");
let Email = document.querySelector(".email");
let Phone = document.querySelector(".phone");
let Form = document.querySelector("form");
let Pag =  document.getElementById("onebttn")

if (document.title === "Personal Info") {
Pag.classList.add("selectPage");
}else {

}




Form.onsubmit = function () {
  let nameValue = Name.value;
  let emailValue = Email.value;
  let phoneValue = Phone.value;

  let nameRe = /[a-zA-Z]/gi;
  let emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let phoneRe = /\d{11}/gi;

  let validName = nameRe.test(nameValue);
  let validEmail = emailRe.test(emailValue);
  let validPhone = phoneRe.test(phoneValue);


  if (validName === false) {
    Name.classList.add("err");
    return false;
  } else if (validEmail === false) {
    Email.classList.add("err");
    return false;
  } else if (validPhone === false) {
    Phone.classList.add("err");
    return false;
  } else {
    Name.classList.remove("err");
    Email.classList.remove("err");
    Phone.classList.remove("err");
    window.location.href = "./Step2/pageTwo.html";
    
    return false;
    
  }
};
