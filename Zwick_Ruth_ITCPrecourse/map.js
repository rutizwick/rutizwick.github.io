// nav 

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// map

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let el = document.getElementById('mapifrm');

let url = [
  //NZ
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817223.2198757975!2d174.32385315159345!3d-36.859759221649874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sil!4v1600946247284!5m2!1sen!2sil",
  //hong kong
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.45599478766!2d114.26327681494719!3d22.336404747227814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046bc19c7e15%3A0x2bedd58f9cf841be!2sHong%20Kong%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sil!4v1600946592206!5m2!1sen!2sil",
  //maui 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954400.0111344836!2d-157.20714036573824!3d20.867009602612963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79552b4acc4c61dd%3A0xcc43e741dc113e7f!2sMaui!5e0!3m2!1sen!2sil!4v1600946670213!5m2!1sen!2sil",
  //riverside
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628130164!2d-117.46956818130664!3d33.94613812758652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sil!4v1600946708671!5m2!1sen!2sil",
  //DC
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6210.331521806488!2d-77.05283767376585!3d38.8973245682566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b10e3c7aa5%3A0xda7bf41bdc27a808!2sThe%20George%20Washington%20University!5e0!3m2!1sen!2sil!4v1600946749796!5m2!1sen!2sil",
  //Tel Aviv
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093180764!2d34.72720577553403!3d32.088057674793326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1600946784019!5m2!1sen!2sil",
];

let currentLocation = 0;

prevBtn.classList.add("hidden");

function next() {
  prevBtn.classList.remove("hidden");
  currentLocation++
  const currentUrl = url[currentLocation]
  el.src = currentUrl

  if (currentLocation === 5) {
    nextBtn.classList.add("hidden");
  }
};

function prev() {
  currentLocation--
  const currentUrl = url[currentLocation]
  el.src = currentUrl
  nextBtn.classList.remove("hidden");

  if (currentLocation === 0) {
    prevBtn.classList.add("hidden");
  }
};

function init() {
  prevBtn.addEventListener("click", function () {
    prev();
  });
  nextBtn.addEventListener("click", function (e) {
    next();
  });
}
init();

//footer 

const languages = [
  "HTML,",
  "CSS,",
  "and JavaScript",
]

const langFoot = document.getElementById('lang-footer');

for (i = 0; i < languages.length; ++i) {

  listItem = document.createElement('li');

  listItem.innerHTML = languages[i];

  langFoot.appendChild(listItem);
};