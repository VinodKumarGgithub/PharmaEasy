document.getElementById("addToCart")
display()
function display(){
    var arr=JSON.parse(localStorage.getItem("product_view")) || [];
console.log(arr)
  let v_img=  document.getElementById("prdct_img").setAttribute("src",`${arr[0].image}`);
    document.getElementById("heading").innerText=arr[0].title;
    document.getElementById("offRate").innerText="₹ "+arr[0].offRate;
    document.getElementById("mrp").innerText="₹ "+arr[0].mrp;
    document.getElementById("offer").innerText=arr[0].offer

 var user_number = localStorage.getItem("login-data") || []
var userArr =JSON.parse(localStorage.getItem("user-data")) || []

userArr.map(function(ele,index){
console.log(ele)
if(ele.ph == user_number )
document.getElementById("name-display").textContent = ele.name;
let cart = JSON.parse(localStorage.getItem("cart-list")) || ""
if(cart.length!=0)
  document.getElementById("count-item").textContent= cart.length
  else
  document.getElementById("count-item").textContent= ""

})

}
// checkout to cart
document.getElementById("viewCart").addEventListener("click",moveToCartPage)

function moveToCartPage(){
    console.log("hii")
    window.location.href="./cart.html";
}

// move to cart

document.getElementById("addToCart").addEventListener("click",addto_Cart)

function addto_Cart(){
    console.log()
    // let status=localStorage.getItem("status") || false
    let status=localStorage.getItem("login-data") || ""
    console.log(status)
    if(status !=""){
        
    var cartArr = JSON.parse(localStorage.getItem("cart-list")) || []
    var item = JSON.parse(localStorage.getItem("product_view")) || []
    cartArr.push(item[0])
    localStorage.setItem("cart-list",JSON.stringify(cartArr))
    console.log(item[0])
    alert("Added successfully")
    }else{
        alert("Please Login for add to cart")
    }
}
