const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav anchors
const navAnchors = document.querySelectorAll("nav a");
navAnchors[0].textContent = siteContent["nav"]["nav-item-1"]
navAnchors[1].textContent = siteContent["nav"]["nav-item-2"]
navAnchors[2].textContent = siteContent["nav"]["nav-item-3"]
navAnchors[3].textContent = siteContent["nav"]["nav-item-4"]
navAnchors[4].textContent = siteContent["nav"]["nav-item-5"]
navAnchors[5].textContent = siteContent["nav"]["nav-item-6"]

//section header under nav
const headline = document.querySelector(".cta-text h1");
headline.innerHTML = siteContent.cta.h1
const btn = document.querySelector(".cta-text button ");
btn.textContent = siteContent.cta.button
const codeSnippet = document.querySelector("#cta-img");
codeSnippet.src = siteContent.cta["img-src"]


//.main-content paragraphs & headlines
  //.top-content
    //Headlines
const topH4 = document.querySelectorAll(".top-content h4");
topH4[0].textContent = siteContent["main-content"]["features-h4"]
topH4[1].textContent = siteContent["main-content"]["about-h4"]
    //Paragraphs
const topParagraphs = document.querySelectorAll(".top-content p");
topParagraphs[0].textContent = siteContent["main-content"]["features-content"]
topParagraphs[1].textContent = siteContent["main-content"]["about-content"]

//middle image
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]

  //.bottom-content
    //Headlines
const bottomH4 = document.querySelectorAll(".bottom-content h4");
bottomH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"]
    //Paragraphs
const bottomParagraphs = document.querySelectorAll(".bottom-content p");
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"]
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"]
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"]

//contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"]
const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].innerHTML = siteContent.contact["address"]
contactParagraphs[1].textContent = siteContent.contact["phone"]
contactParagraphs[2].textContent = siteContent.contact["email"]

//copyright
const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright

// Task 3
navAnchors.forEach( a => a.style.color = "green")
const nav = document.querySelector("header nav")
const home = document.createElement("a");
const github = document.createElement("a");

home.textContent = "Linkedin"
home.style.color = "lightskyblue"
home.href = "https://www.linkedin.com/in/patrick-rodrigues-5b179417a/"
nav.appendChild(home)

github.textContent = "Github"
github.style.color ="lightskyblue"
github.href = "https://github.com/rodpa715"
nav.prepend(github)

//stretch goals

const innerHeader = document.querySelector(".cta");
innerHeader.style.justifyContent = "space-around"
btn.style.width = "20rem"
btn.style.height = "3.5rem"
btn.style.borderRadius = "1rem"

// const btnHover = document.querySelector(".cta-text button:hover")
// btnHover[0].style.backgroundColor = "lightslategray" 

// This doesn't work since its inline style and it can't target pseudo classes 

btn.addEventListener("mouseenter", () => btn.style.backgroundColor = "lightslategray") //it doesnt update back since it changes the inline style even with "mouseover"
btn.addEventListener("mouseleave", () => btn.style.backgroundColor = "white") 

btn.addEventListener("click", updateContent)

function updateContent(){
  const navAnchorsAll = document.querySelectorAll("nav a"); // Twice the same querySelector so that created Elements who are created get reloaded.
  const allParagraphsMain = document.querySelectorAll(".text-content p")
  const allParagraphsH4 = document.querySelectorAll(".text-content h4")
  const body = document.querySelector("body")
  const updatedParagraph = "this content was updated automatically lorem ipsum something this is not automatically generated I'm to lazy to type in google some auto generated content since I have pretty fast fingers"

  body.style.backgroundColor = "antiquewhite"

  navAnchorsAll.forEach(a => a.style.color = "saddlebrown")
  navAnchorsAll.forEach(a => a.style.fontWeight = "900")
  allParagraphsMain.forEach(p => p.textContent = updatedParagraph)
  allParagraphsH4.forEach(h4 => h4.textContent = "Updated Headline")

  middleImg.src = "https://bit.ly/30fIzjp"
  
}