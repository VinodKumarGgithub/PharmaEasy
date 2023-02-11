document.querySelector("form").addEventListener("submit",addreshData);
var addreshArr =JSON.parse(localStorage.getItem("addres-data")) || [];
function addreshData(){
    event.preventDefault();
    var obj={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        pin:document.getElementById("pinCode").value,
        addres:document.getElementById("addres").value,
        street:document.getElementById("strret").value,
    }
    addreshArr.push(obj)
    localStorage.setItem("addres-data",JSON.stringify(addreshArr));
    document.getElementById("name").value=""
    document.getElementById("number").value=""
    document.getElementById("pinCode").value=""
    document.getElementById("addres").value=""
    document.getElementById("strret").value=""
}
// document.getElementById("danger").addEventListener("click",closepopUp)

function showpopUp(){ 
    event.preventDefault();
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}

function showpopup(){
    event.preventDefault();
    document.querySelector(".success").classList.add("showSuccess");
}

function closepopup(){
    document.querySelector(".success").classList.remove("showSuccess");
var otp=JSON.parse(localStorage.getItem("otp"));
var Userotp=JSON.parse(localStorage.getItem("userOTP"));
console.log(otp,Userotp)
    if(otp==Userotp){
        // window.location.href = 'homepage.html';
    }
}

// document.getElementById("buttons").addEventListener("click",closes);
// function closes(){
//     var name=document.getElementById("name").value;
//     var number=document.getElementById("number").value;
//     var pin=document.getElementById("pinCode").value;
//     var addres=document.getElementById("addres").value;
//     var street=document.getElementById("strret").value;

//     if(name==""&&number==""&&pin==""&&addres==""&&street==""){
//         alert("Plase fill all the filed !")
//     }else{
//         closes(showpopup())
//     }
// }