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

//submit 

let required = document.getElementsByClassName('required');

const subButt = document.getElementById('submitbutton');


for (let i = 0; i < required.length; i++) {
  required[i].addEventListener("change", () => {
    if (required[0].value.length > 1
      && required[1].value.length > 1
      && required[2].value.length > 1
      && required[3].value != 0
    ) {
      subButt.disabled = false;
    }
  })
}

const lastName = document.getElementById('lname');

subButt.addEventListener("click", function () {
  console.log("First Name:", required[0].value);
  console.log("Last Name:", lastName.value);
  console.log("Email:", required[1].value);
  console.log("Comment:", required[2].value);
  console.log("You are on Ruti's page because:", required[3].value);
});


//footer 

const languages = [
  "HTML,",
  "CSS,",
  "and",
  "JavaScript"
]



const langFoot = document.getElementById('lang-footer');

for (i = 0; i < languages.length; ++i) {

  listItem = document.createElement('li');

  listItem.innerHTML = languages[i];

  langFoot.appendChild(listItem);
};
