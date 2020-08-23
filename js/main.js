new WOW().init();

var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet-active",
    clickable: true,
  },
});

let name = document.getElementById("input-name");
let phone = document.getElementById("input-phone");
let popup = document.getElementById("popup");
let description = document.getElementById("popup-description");
let close = document.getElementById("close-popup");
let hide = document.getElementById("hide");

function name_save() {
  let nameSave = name.value;
  localStorage.setItem("name", nameSave);
}

function request(event) {
  event.preventDefault();
  if (name.value == "" || phone.value == "") {
    alert("Все поля обязательны для заполнения");
  } else {
    name_save();
    let nameSaved = localStorage.getItem("name");
    name.value = "";
    phone.value = "";
    description.innerHTML = nameSaved + ", Ваша заявка принята. Я свяжусь с Вами в ближайшее время!";
    popup.style.display = "block";
  }
}

close.onclick = function () {
  popup.style.display = "none";
};

hide.onclick = function () {
  popup.style.display = "none";
};
