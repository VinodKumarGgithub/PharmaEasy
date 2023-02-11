document.querySelector("#addreshForm").addEventListener("submit",addreshData);
var userdata =JSON.parse(localStorage.getItem("user-data")) || [];
var ph_no = JSON.parse(localStorage.getItem("login-data")) || []
function addreshData(event){
    event.preventDefault();
    console.log("addres")
    var obj={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        pin:document.getElementById("pinCode").value,
        addres:document.getElementById("addres").value,
        street:document.getElementById("strret").value,
    }


    userdata.map(function(ele,index){
   if(ph_no==ele.ph){
   userdata[index].address = obj
   console.log(userdata[index].address)
   localStorage.setItem("user-data",JSON.stringify(userdata));
   }
    })



    




    document.getElementById("name").value=""
    document.getElementById("number").value=""
    document.getElementById("pinCode").value=""
    document.getElementById("addres").value=""
    document.getElementById("strret").value=""
}

function showpopUp(){ 
    event.preventDefault();
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}


// document.getElementById("buttons").addEventListener("click",closes);
// function closes(){
//     console.log("hii")
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