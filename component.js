function toast() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// // xmenu.addEventListener("click", function () {
// //   const maindiv = document.getElementById("hamburger");
// //   maindiv.style.display = "block";
// //   const xmenu = document.getElementById("xmenu");
// //   xmenu.style.display = "none";
// // });

// function myFunction() {
//   var x = document.getElementById("headermenu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
const tab = [
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5496.242457785468!2d69.27867082794702!3d41.312174054759836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1645873454220!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.531388545847!2d-0.14663597088036204!3d51.520983336943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bfb72777675%3A0xc57f618e7d274974!2sBiolab%20Medical%20Unit!5e0!3m2!1sen!2s!4v1648268710106!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34759.785744292545!2d76.94149281413691!3d43.32016836116443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836cfb557a58cb%3A0x36a4287139fa770!2sA-Motors%20Auto%20Nissan!5e0!3m2!1sen!2s!4v1648268941843!5m2!1sen!2s",
];
// let map = (document.getElementById("tabmap").src = tab[i]);
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  if (cityName == "Kazakstan") {
    document.getElementById("tabmap").src = tab[2];
  } else if (cityName == "Uzbekistan") {
    document.getElementById("tabmap").src = tab[0];
  } else if (cityName == "London") {
    document.getElementById("tabmap").src = tab[1];
  }
}
document.getElementById("defaultOpen").click();
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
