const hambMenuBtn = document.getElementById("hamb-menu-btn");
const linksContainer = document.getElementsByClassName("links-container")[0];
const fixedImage = document.querySelector(".fixed_image");

let isClose = true;
if (hambMenuBtn) {
  // בודקים שהכפתור נמצא לפני שמוסיפים אירוע
  hambMenuBtn.addEventListener("click", (event) => {
    if (isClose) {
      hambMenuBtn.innerHTML =
        '<img class="close-menu" src="./assets/images/close_menu.png"/>';
      isClose = false;
      linksContainer.classList.add("see-links");
    } else {
      hambMenuBtn.innerHTML =
        '<img class="hamb-menu" src="./assets/images/hamb_menu.png" alt="" />';
      isClose = true;
      linksContainer.classList.remove("see-links");
    }
  });
}


$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,               // לולאה אינסופית
    margin: 10,               // רווחים בין התמונות
    nav: true,                // כפתורי ניווט
    autoplay: true,           // הפעלה אוטומטית
    autoplayTimeout: 3000,    // כל 3 שניות מעבר
    autoplayHoverPause: true, // עצירה כשהעכבר מעל
    dots: true,               // נקודות ניווט
    mouseDrag: true,          // גרירה
    pullDrag: true,           // משיכה

    // רספונסיביות
    responsive: {
      0: { items: 1 },        // מסך קטן
      769: { items: 2 },      // מסך בינוני
      1500: { items: 3 } ,     // מסך גדול

      2000: { items: 4 }      // מסך גדול
    }
  });
});

