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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav garbo

const services = document.querySelector('a:nth-of-type(1)');
services.textContent = 'Services';
const Product = document.querySelector('a:nth-of-type(2)');
Product.textContent = 'Product';
const Vision = document.querySelector('a:nth-of-type(3)');
Vision.textContent = 'Vision';
const Features = document.querySelector('a:nth-of-type(4)');
Features.textContent = 'Features';
const About = document.querySelector('a:nth-of-type(5)');
About.textContent = 'About';
const Contact = document.querySelector('a:nth-of-type(6)');
Contact.textContent = 'Contact';

//cta garbo 
const header = document.querySelector('h1');
header.textContent = (siteContent['cta']['h1'])
const buttonTxt = document.querySelector('button');
buttonTxt.textContent = (siteContent['cta']['button'])
const codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);

//main content garbo 
const topContent = document.querySelector('.top-content');
const features = topContent.querySelector('.text-content');
const featH4 = features.querySelector('h4');
featH4.textContent = (siteContent['main-content']['features-h4']);
const featConP = features.querySelector('p');
featConP.textContent = (siteContent['main-content']['features-content']);
//main content 2

const features2 = features.nextElementSibling;
const aboutH4 = features2.querySelector('h4');
console.log('about',aboutH4);
aboutH4.textContent = (siteContent['main-content']['about-h4']);
const featConP2 = features2.querySelector('p');
featConP2.textContent = (siteContent['main-content']['about-content']);
//main content img
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content garbo
const botContent = document.querySelector('.bottom-content');
//services
const botTxt1 = botContent.querySelector('.text-content')
const services2 = botTxt1.querySelector('h4');
services2.textContent = (siteContent['main-content']['services-h4']);
const servicesP = botTxt1.querySelector('p');
servicesP.textContent = (siteContent['main-content']['services-content']);
//product
const product2 = botTxt1.nextElementSibling;
const productH = product2.querySelector('h4');
productH.textContent = (siteContent['main-content']['product-h4']);
const productP = product2.querySelector('p');
productP.textContent = (siteContent['main-content']['product-content']);
//vision
const vision2 = product2.nextElementSibling;
const visionH = vision2.querySelector('h4');
visionH.textContent = (siteContent['main-content']['vision-h4']);
const visionP = vision2.querySelector('p');
visionP.textContent = (siteContent['main-content']['vision-content']);

//contact section

const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
contactHeader.textContent = (siteContent['contact']['contact-h4']);
const contactP1 = contact.querySelector('p:nth-of-type(1)')
contactP1.textContent = (siteContent['contact']['address'])
const contactP2 = contact.querySelector('p:nth-of-type(2)')
contactP2.textContent = (siteContent['contact']['phone'])
const contactP3 = contact.querySelector('p:nth-of-type(3)')
contactP3.textContent = (siteContent['contact']['email'])

//footer
const footer = document.querySelector('footer');
footer.textContent =(siteContent['footer']['copyright'])