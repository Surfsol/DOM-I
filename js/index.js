const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
logo.style.background = "red";

let container = document.querySelector(".container");

let header = document.querySelector("header");

let nav = document.querySelector("nav");

let navA = nav.querySelectorAll('a')
navA.forEach((anc, index) =>{
  anc.textContent = siteContent["nav"]["nav-item-" + [index + 1]];
  anc.style.color = 'green';
})
/*
let nav1 = document.querySelector(".nav-item-1");
nav1.textContent = siteContent["nav"]["nav-item-1"];
//nav1.style.color = "green";

let nav2 = document.querySelector(".nav-item-2");
nav2.textContent = siteContent["nav"]["nav-item-2"];
//nav2.style.color="green";

let nav3 = document.querySelector(".nav-item-3");
nav3.textContent = siteContent["nav"]["nav-item-3"];
//nav3.style.color="green";

let nav4 = document.querySelector(".nav-item-4");
nav4.textContent = siteContent["nav"]["nav-item-4"];
//nav4.style.color="green";

let nav5 = document.querySelector(".nav-item-5");
nav5.textContent = siteContent["nav"]["nav-item-5"];
//nav5.style.color="green";

let nav6 = document.querySelector(".nav-item-6");
nav6.textContent = siteContent["nav"]["nav-item-6"];
//nav6.style.color="green";
*/
const nav7 = document.createElement("a");
nav7.textContent = "Videos";
nav7.style.color = "green";
nav.appendChild(nav7);

const navFirst = document.createElement("a");
navFirst.textContent = "Home";
navFirst.style.color = "green";
nav.prepend(navFirst);

let cta = document.querySelector(".cta");

let ctaH = document.querySelector(".cta-text h1");
ctaH.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let mainContent = document.querySelector("main-content");

let topContent = document.querySelector("top-content");

let textContent1h = document.querySelector(".text-content1 h4");
textContent1h.textContent = siteContent["main-content"]["features-h4"];
textContent1h.addEventListener("mouseover", event => {
  event.target.style.background = "red";
});

textContent1h.addEventListener("mouseout", event => {
  event.target.style.background = "blue";
});

let textContent1P = document.querySelector(".text-content1 p");
textContent1P.textContent = siteContent["main-content"]["features-content"];

let textContent2h = document.querySelector(".text-content2 h4");
textContent1h.textContent = siteContent["main-content"]["about-h4"];

let textContent2P = document.querySelector(".text-content2 p");
textContent2P.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomContent = document.querySelector(".bottom-content");

let textContent3h = document.querySelector(".text-content3 h4");
textContent3h.textContent = siteContent["main-content"]["services-h4"];

let textContent3P = document.querySelector(".text-content3 p");
textContent3P.textContent = siteContent["main-content"]["services-content"];

let textContent4h = document.querySelector(".text-content4 h4");
textContent4h.textContent = siteContent["main-content"]["product-h4"];

let textContent4P = document.querySelector(".text-content4 p");
textContent4P.textContent = siteContent["main-content"]["product-content"];

let textContent5h = document.querySelector(".text-content5 h4");
textContent5h.textContent = siteContent["main-content"]["vision-h4"];

let textContent5P = document.querySelector(".text-content5 p");
textContent5P.textContent = siteContent["main-content"]["vision-content"];

let contacth = document.querySelector(".contact h4");
contacth.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelector(".contact address");
contactAddress.textContent = siteContent["contact"]["address"];

let contactPhone = document.querySelector(".contact phone");
contactPhone.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelector(".contact email");
contactEmail.textContent = siteContent["contact"]["email"];

let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
