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

// Example: Update the img src for the logo

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

// const appendLink = document.createElement('a');
// const prependLink = document.createElement('a');
// const navigation = document.querySelector('nav');


// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"



// let navBoxOne = document.querySelector(".navBoxOne")
// let newElement = document.createElement("a");
// let newContent = document.createTextNode("This is a link!");

// newElement.append("More Stuff");
// newElement.appendChild(newContent);
// navBoxOne.appendChild(newElement);

let navBar = document.querySelectorAll("nav a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
// task 3 Turn Nav Green
let green = navBar.forEach(item => item.style.color = "green")