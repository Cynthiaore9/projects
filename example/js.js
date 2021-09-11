let tname = document.getElementById("fname");
let mail = document.getElementById("email");
let address = document.getElementById("adr");
let ci = document.getElementById("city");
let oyo = document.getElementById("state");
let pox =  document.getElementById("zip");
let oncard = document.getElementById("cname");
let ccno = document.getElementById("expmonth");
let button = document.getElementById("btn");
button.addEventListener("click", validation);
function validation(){
    fname= tname.value;
    email = mail.value;
    adr = address.value;
    city = ci.value;
    state = oyo.value;
    zip = pox.value;
    cname = oncard.value;
    expmonth = ccno.value;
    if(fname == ""){
        alert("Fullname Can not be empty!!!")
    }
    else if (email == ""){
        alert("Email can not be empty!!!")
    }
    else if (adr == ""){
        alert("ADDRESS can not be empty!!!")
    }
    if (expmonth.length < 10){
        alert("Card Number Can not be less than 10")
    }
    else if (expmonth.length > 10){
        alert("Card Number Can not be more than 10")
    }
    localStorage.setItem("user-name", JSON.stringify({fname:tname.value,email:mail.value,adr:address.value,city:ci.value,state:oyo.value,cname:oncard.value,expmonth:ccno.value,zip:pox.value}));
    location.replace("examplecss/history.html")
}