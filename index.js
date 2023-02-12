var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    // sliderPerGroup: 1,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      150: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 2.5,
      },
      450: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2.5,
      },
    },
  });
var newLaunches=[
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/R78914/fash-x-gel-face-wash-200ml-2-1670827713.jpg?dim=1280x0",
        title:"New Fash X Gel Face Wash 200ml",
        mrp:"475.00",
        offRate:"361.00",
        offer:"24% OFF",
        Q:1,
        company: "By Micro Labs",
        
    },
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/H98890/liveasy-essentials-paper-cotton-buds-100s-2-1675416986.jpg?dim=1280x0",
        title:"Liveasy Essentials Paper Cotton Buds 100s",
        mrp:"65.00",
        offRate:"44.05",
        offer:"10% OFF",
        Q:1,
        company: "By Micro Labs",

    },
    
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/G72534/whisper-ultra-soft-air-fresh-xl-plus-sanitary-pads-15-nos-2-1671258850.jpg?dim=1280x0",
        title:"Whisper Ultra Soft Air Fresh Xl Plus Sanitary Pads 15 No's",
        mrp:"180.00",
        offRate:"171.00",
        offer:"5% OFF",
        Q:1,
        company: "By Micro Labs",
    },
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/E63231/liveasy-herbals-amla-tablets-250mg-2-1645616805.jpg?dim=1280x0",
        title:"Liveasy Herbals Amla Tablets (250mg)",
        mrp:"165.00",
        offRate:"160.00",
        offer:"5% OFF",
        Q:1,
        company: "By Micro Labs",
    },
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/Z08870/pharmeasy-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1672661091.jpg?dim=1280x0",
        title:"Pharmeasy Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
        mrp:"799.00",
        offRate:"439.45",
        offer:"45% OFF",
        Q:1,
        company: "By Micro Labs",
    },
    {
        image:"https://cdn01.pharmeasy.in/dam/products_otc/P20145/desquamar-soap-free-face-cleanser-ph-5-6-for-all-skin-types-100ml-2-1671258700.jpg?dim=1280x0",
        title:"Desquamar Soap-free Face Cleanser Ph 5-6 For All Skin Types - 100ml",
        mrp:"310.00",
        offRate:"288.30",
        offer:"7% OFF",
        Q:1,
        company: "By Micro Labs",
    },
    // {
    //     image:"https://cdn01.pharmeasy.in/dam/products_otc/F80687/nicotex-2mg-mint-plus-gums-sugar-free-strip-of-9-pack-of-4-2-1671745141.jpg?dim=1280x0",
    //     title:"Nicotex 2mg Mint Plus Gums Sugar Free Strip Of 9 (pack Of 4)",
    //     mrp:"404.00",
    //     offRate:"343.40",
    //     offer:"15% OFF",
    //     Q:1,
    //     company: "By Micro Labs",
    // },
    // {
    //     image:"https://cdn01.pharmeasy.in/dam/products_otc/P03437/charmis-moisturising-cold-cream-58-ml-2-1671742979.jpg?dim=1280x0",
    //     title:"Charmis Moisturising Cold Cream- 58 Ml",
    //     mrp:"95.00",
    //     offRate:"92.15",
    //     offer:"3% OFF",
    //     Q:1,
    //     company: "By Micro Labs",
    // }
    
]

var cardNewLaunches = "";
newLaunches.map(function (ele) {
cardNewLaunches += `
<a href="./Products.html">
  <div >
    <div >
      <img src=${ele.image} style="height:92px"  alt="">
    </div>
     <div ></a> 
         <div>  ${ele.title}</div>
         <div>MRP ₹${ele.mrp}</div>
         <div>₹${ele.offRate} <span>${ele.offer}</span></div>
     </div>
   </div>
  `
  document.querySelector("#newLanchCard").innerHTML = cardNewLaunches;
  
});



//profile update
if(localStorage.getItem("status")){
  let temo_name=localStorage.getItem("login-data")
  var userdata=JSON.parse(localStorage.getItem("user-data")) || [];
  var user =userdata.map(function(elm,index){
      if(elm.ph==temo_name ){
       document.getElementById("name-display").textContent = elm.name;
        document.getElementById("profile-page").setAttribute("href","./profile.html")
      }
    })


}else{
 
  localStorage.setItem("login-data","")
}