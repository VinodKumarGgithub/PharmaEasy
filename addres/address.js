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

function showpopUp(){ 
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}