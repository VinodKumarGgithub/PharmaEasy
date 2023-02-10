var arr=JSON.parse(localStorage("product_view"))||[];
var details=document.getElementById("addToCart");
details.addEventListener("click",display);
function display(){

    // document.getElementById("prdct_img").setAttribute("src",`${arr[0].image_url}`);
    document.getElementById("heading").innerText=arr[0].title;
    document.getElementById("offRate").innerText="₹ "+arr[0].offRate;
    document.getElementById("mrp").innerText="₹ "+arr[0].mrp;
    document.getElementById("offer").innerText=arr[0].offer+"% OFF"

}

var cart=document.getElementById("viewCart");
cart.addEventListener("click",moveToCartPage);
function moveToCartPage(){
    window.location.href="navbar_footer\navbar_footer\Index-page\index.html";
}