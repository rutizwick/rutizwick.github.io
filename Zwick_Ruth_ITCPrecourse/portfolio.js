//home page 

//name and photo

const GITHUB_URL = "https://api.github.com/users/rutizwick";

const myName = document.getElementById("my-name");
let nameText = document.getElementById('my-name').innerText;
const profileImage = document.getElementById("profile-image");

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    profileImage.src = data.avatar_url;
    myName.innerText = data.name;
  });

//animations 
const card = document.getElementById('home-card');

function spin() {
  profileImage.classList.add('spin');
}

function lsd() {
  card.classList.add('lsd');
}

function lsdEnd() {
  card.classList.remove('lsd');
}

function spinEnd() {
  profileImage.classList.remove('spin');
}

function init() {

  card.addEventListener("click", function () {
    spin();
  });

  card.addEventListener("mouseenter", function () {
    lsd();
  });
  card.addEventListener("mouseleave", function () {
    lsdEnd();
    spinEnd();
  });
}

init();


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

//footer 

const languages = [
  "HTML,",
  "CSS,",
  "and",
  "JavaScript",
]

const langFoot = document.getElementById('lang-footer');

for (i = 0; i < languages.length; ++i) {

  listItem = document.createElement('li');

  listItem.innerHTML = languages[i];

  langFoot.appendChild(listItem);
};

