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
window.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  if (scrollY >= window.innerHeight * 1 && scrollY < window.innerHeight * 4) {
    fixedImage.style.position = "fixed";
  } else {
    fixedImage.style.position = "static";
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById("images-container");

    if (!imageContainer) {
        console.error('לא נמצא אלמנט עם ID "images-container"');
        return;
    }

    // הגדרת משתנים
    const imageWidth = imageContainer.offsetWidth; // רוחב של התמונה
    let isMouseDown = false;

    imageContainer.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        imageContainer.style.cursor = 'grabbing'; // שינוי סמן לגרירה
    });

    imageContainer.addEventListener('mouseleave', () => {
        isMouseDown = false;
        imageContainer.style.cursor = 'grab'; // חזרה לסמן רגיל
    });

    imageContainer.addEventListener('mouseup', () => {
        isMouseDown = false;
        imageContainer.style.cursor = 'grab'; // חזרה לסמן רגיל
    });

    imageContainer.addEventListener('mousemove', (event) => {
        if (!isMouseDown) return;

        // עדכון גלילה כל פעם במרחק של רוחב התמונה
        if (event.movementX > 0) {
            imageContainer.scrollLeft += imageWidth;  // גלילה ימינה
        } else {
            imageContainer.scrollLeft -= imageWidth;  // גלילה שמאלה
        }
    });
});
