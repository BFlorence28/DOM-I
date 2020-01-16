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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// IMAGES

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaimage = document.getElementById("cta-img");
ctaimage.setAttribute('src', siteContent["cta"]["img-src"])

let middleimage = document.getElementById("middle-img");
middleimage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const links= document.querySelectorAll('a');

// NAV 

links.forEach((link, index) => {
 link.textContent = siteContent["nav"][`nav-item-${index + 1}`]
});

console.log(links)



// CTA TEXT AND BUTTON TEXT

const ctaText= document.querySelector('h1');

ctaText.textContent = siteContent['cta']['h1']

console.log(ctaText)


const buttonText= document.querySelector('button');

buttonText.textContent = siteContent['cta']['button']

console.log(buttonText)


// MAIN CONTENT Title-TEXT

const h4Tag= document.querySelectorAll('h4');

h4Tag[0].textContent = siteContent['main-content']['features-h4'];
h4Tag[1].textContent = siteContent['main-content']['about-h4'];
h4Tag[2].textContent = siteContent['main-content']['services-h4'];
h4Tag[3].textContent = siteContent['main-content']['product-h4'];
h4Tag[4].textContent = siteContent['main-content']['vision-h4'];
h4Tag[5].textContent = siteContent['contact']['contact-h4'];

console.log(h4Tag)

// P TAG 

const pTag= document.querySelectorAll('p');

pTag[0].textContent = siteContent['main-content']['features-content'];
pTag[1].textContent = siteContent['main-content']['about-content'];
pTag[2].textContent = siteContent['main-content']['services-content'];
pTag[3].textContent = siteContent['main-content']['product-content'];
pTag[4].textContent = siteContent['main-content']['vision-content'];

pTag[5].textContent = siteContent['contact']['address'];
pTag[6].textContent = siteContent['contact']['phone'];
pTag[7].textContent = siteContent['contact']['email'];

console.log(pTag)

// FOOTER

const footerText= document.querySelector('footer p');
footerText.textContent = siteContent["footer"]['copyright']

console.log(footerText)

// APPEND AND APPENDCHILD
// // 9a: Create element

// const newElement = document.createElement('footer')
// newElement.textContent = "Welcome to Emily's class!"

// // 9b: Add it to the DOM with prepend

// const parentElement = document.querySelector('body')
// console.log('parent', parentElement)
// // parentElement.prepend(newElement)

// const startNav = document.createElement('a');
// const navBar = document.querySelector('nav');

// startNav.textContent = "Start";
// navBar.prepend(startNav)

//===============================================

const navigation = document.querySelector('nav');
const prependLink = document.createElement('a');

prependLink.textContent = "Start"
prependLink.style.color = 'green';
navigation.prepend(prependLink)

// const appendLink = document.createElement('a');

// prependLink.textContent = "End2";
// prependLink.style.color = "red";
navigation.appendChild(prependLink)


// nav.appendChild(prependLink);

//==========================================
let nav = document.querySelector("nav");
let link = document.createElement("a");

link.textContent = "End";
link.style.color = "green";
nav.appendChild(link);

// console.log(nav)

// let link0 = document.createElement("a");
// link0.textContent = "Start";
// // link0.style.color = "green";
// nav.prepend(link0);

// console.log(nav)

//============================================
let navBar = document.querySelectorAll("nav a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];


// task 3 Turn Nav Green

// let green = navBar.forEach(item => item.style.color = "green")



//STRETCH

let topDiv = document.querySelector(".cta-text");
let crazyBtn = document.createElement("button");
crazyBtn.textContent="DO NOT PRESS!";
topDiv.appendChild(crazyBtn);

let body = document.querySelector("body");

crazyBtn.addEventListener("click", e => {
  e.preventDefault();
  function randomColor(){
    
    let red = "#F31414";
    let yellow = "#F3F614";
    let green = "#46F209";
    

    let colors = [red, yellow, green];

    body.style.backgroundColor = colors[Math.floor(Math.random() * 3)];

  }
  setInterval(function() {
    body.style.backgroundColor = randomColor();
    
  }, 420 );
});


// ///// Step 9: Create your own element that is NOT in HTML


// // 9a: Create element: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// const newElement = document.createElement('footer')
// newElement.textContent = "Welcome to Emily's class!"




// // 9b: Add it to the DOM with prepend
// // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
// const parentElement = document.querySelector('body')
// console.log('parent', parentElement)
// // parentElement.prepend(newElement)

// /* 9c: Add it to the DOM with append
// * https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
// * can append multiple items at one time, comma separated
// * can append string without a node (string does not require createElement // with append)

// Example from docs:
// let parent = document.createElement("div")
// let p = document.createElement("p")
// parent.append("Some text", p)

// console.log(parent.childNodes) // NodeList [ #text "Some text", <p> ]
// */

// // newElement is a node
// parentElement.append(newElement)


// /* appendChild() always requires a node, meaning you will always
// * have to use createElement to create a node to pass into appendChild
// * example from https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// var p = document.createElement("p");
// document.body.appendChild(p);
// */
