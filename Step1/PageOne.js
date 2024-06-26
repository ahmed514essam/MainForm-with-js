let Name = document.querySelector(".name") ;
let Email = document.querySelector(".email") ;
let Phone = document.querySelector(".phone") ;
let Form = document.querySelector("form")

Form.onsubmit = function () {
    let nameValue = Name.value ;
    let emailValue = Email.value ;
    let phoneValue = Phone.value ;

let nameRe = /[a-zA-Z]/ig ;
let emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let phoneRe = /\d{11}/ig ;

let validName = nameRe.test(nameValue) ;
let validEmail = emailRe.test(emailValue) ;
let validPhone = phoneRe.test(phoneValue) ;


 if (validName === false) {
    Name.classList.add("err")
return false ;
}
else if (validEmail === false) {
    Email.classList.add("err")
    return false ;
}
else if (validPhone === false) {
    Phone.classList.add("err")
    return false ;
}  else {
    console.log(validName)
    console.log(validEmail)
    console.log(validPhone)
    Name.classList.remove("err");
    Email.classList.remove("err");
    Phone.classList.remove("err");
    return false ; 
}





}

