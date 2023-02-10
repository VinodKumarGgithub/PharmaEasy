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
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.5,
    },

  },
});

// offer crousal
var discoverOffer=[
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
      "title":"Medicine",
      "offer":"UPTO 20% OFF",
      "Q":1,
      "company": "By Micro Labs",
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
      "title":"Lab Tests",
      "offer":"UPTO 70% OFF",
      "Q":1,
      "company": "By Micro Labs",
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
      "title":"Healthcare",
      "offer":"UPTO 60% OFF",
      "Q":1,
      "company": "By Micro Labs",
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
      "title":"Surgeries",
      "offer":""
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
      "title":"Health Blogs",
      "offer":""
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
      "title":"PLUS",
      "offer":"Save 5% Extra"
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
      "title":"Offers",
      "offer":""
  },
  {
      "image":"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
      "title":"Value Store",
      "offer":"UPTO 50% OFF",
      "Q":1,
      "company": "By Micro Labs",
  }
]

// var offerHTML = "";
// for (var i = 0; i < discoverOffer.length; i++) {
//   offerHTML += `
//     <div class="card swiper-slide">
//       <div class="image-box">
//         <img src="${discoverOffer[i].image}" alt="" />
//       </div>
//     </div>
//   `;
  
// }
// document.querySelector("#offer").innerHTML = offerHTML;



var Topbanner=["https://cdn01.pharmeasy.in/dam/banner/banner/3365bdaaa74-STAR25.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/3b214f09ce6-bogo_2.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/048facc8065-634x274a.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/7854fe478a4-LivEasySlipperHP.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/0bac91892cd-devices.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/99c6897aa12-MotherHorlicks.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/3b27acda96f-health360.jpg",
"https://cdn01.pharmeasy.in/dam/banner/banner/88999dde917-final.jpg"];

var cardsHTML = "";
for (var i = 0; i < Topbanner.length; i++) {
  cardsHTML += `
    <div class="card swiper-slide">
      <div class="image-box">
        <img src="${Topbanner[i]}" alt="" />
      </div>
    </div>
  `;
}
document.querySelector("#Box1").innerHTML = cardsHTML;



var middleBanner=["https://cdn01.pharmeasy.in/dam/banner/banner/9b30be687f3-02.jpg?dim=1280x0","https://cdn01.pharmeasy.in/dam/banner/banner/a9ad640ce01-4.jpg?dim=1280x0","https://cdn01.pharmeasy.in/dam/banner/banner/93ef9d6df4f-SLIPPERS.jpg?dim=1280x0","https://cdn01.pharmeasy.in/dam/banner/banner/6e16a38ea89-ORTHO_PEDOC.jpg?dim=1280x0","https://cdn01.pharmeasy.in/dam/banner/banner/6e16a38ea89-ORTHO_PEDOC.jpg?dim=1280x0"]
var cardsHTML2 = "";
for (var i = 0; i < middleBanner.length; i++) {
  cardsHTML2 += `
    <div class="card swiper-slide">
      <div class="image-box">
        <img src="${middleBanner[i]}" alt="" />
      </div>
    </div>
  `;
}
document.querySelector("#Box2").innerHTML = cardsHTML2;



bottomBanner=["https://cdn01.pharmeasy.in/dam/banner/banner/1a3cb756f76-STOCK-CLEARANCE-SALE.jpg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/810889b6613-babycare-min.png?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/5e9dc201ab9-DevicesClearanceStore.jpg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/ed87375d79f-DiabeticCare-min.png?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/ee420d12d95-category_Sexual-wellnes.jpg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/ee420d12d95-category_Sexual-wellnes.jpg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/041c47e32a2-CB_Beauty.jpg?dim=1440x0","https://cdn01.pharmeasy.in/dam/banner/banner/9b42ab4d9ab-home-page-banner_nutrition-.jpg?dim=1280x0","https://cdn01.pharmeasy.in/dam/banner/banner/9452a363f7f-covid-19.jpg?dim=1280x0"];
var cardsHTML3 = "";
for (var i = 0; i < bottomBanner.length; i++) {
  cardsHTML3 += `
    <div class="card swiper-slide">
      <div class="image-box">
        <img src="${bottomBanner[i]}" alt="" />
      </div>
    </div>
  `;
}
document.querySelector("#Box3").innerHTML = cardsHTML3;

