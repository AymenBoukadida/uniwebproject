let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");
let bell = document.getElementById("bell");
let tele = document.getElementById("tele");
bell.onclick = () => {
  alert("no notifications Yet ");
};
tele.onclick = () => {
  let gameName = "";
  let email = "";
  gameName = prompt("Donner Nom de jeux à telecharger?");
  price = prompt("payer ce que tu veux  ");
  email = prompt("Donner votre email");
  if (email && gameName && price)
    alert(
      `Ton Jeux  ${gameName} a été téléchargée avec succès ! Voir ton E-mail !`
    );
  else {
    alert(`téléchargement annulé pas de gameName ou email`);
  }
};
menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
};

function search() {
  let textToSearch = document.getElementById("text-to-search").value;
  let paragraph = document.getElementById("paragraph");
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new RegExp(`${textToSearch}`, "gi");

  if (paragraph.textContent.match(pattern)) {
    alert(`Le jeu ${textToSearch} existe`);
  } else {
    alert(`Le jeu ${textToSearch} n’existe pas.`);
  }
}

var swiper = new Swiper(".trending-content", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
