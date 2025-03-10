const hambMenuBtn = document.getElementById("hamb-menu-btn"); 
const linksContainer=document.getElementsByClassName("links-container")[0];
const fixedImage = document.querySelector('.fixed_image');


if (window.innerWidth <= 768) {
    console.log("hello");
}
let isClose=true
if (hambMenuBtn) { // בודקים שהכפתור נמצא לפני שמוסיפים אירוע
    hambMenuBtn.addEventListener("click", (event) => {
        if(isClose){
            hambMenuBtn.innerHTML='<img class="close-menu" src="./assets/images/close_menu.png"/>'
            isClose=false
            linksContainer.classList.add("see-links")
            console.log(linksContainer.classList);

                }
          
        else{
          hambMenuBtn.innerHTML='<img class="hamb-menu" src="./assets/images/hamb_menu.png" alt="" />'
          isClose=true  
          linksContainer.classList.remove("see-links")
          console.log(linksContainer.classList);

        }
    });

}
window.addEventListener('scroll',event=>{
    const scrollY=window.scrollY;
    if(scrollY>=window.innerHeight*1&&scrollY<window.innerHeight*4){
        console.log("asdfghjk");
        
        fixedImage.style.position='fixed'}
        else{
            fixedImage.style.position="static"
            console.log(scrollY);
            
        }

})
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById("images-container");

    // אם לא נמצא אלמנט, נציג הודעת שגיאה ב-console
    if (!imageContainer) {
        console.error('לא נמצא אלמנט עם ID "images-container"');
        return;
    }

    let isDragging = false;
    let startX, scrollLeft;

    imageContainer.addEventListener('mousedown', (event) => {
        console.log("dfdf");
        
        isDragging = true;
        startX = event.pageX - imageContainer.offsetLeft;
        scrollLeft = imageContainer.scrollLeft;
        imageContainer.style.cursor = 'grabbing'; // שינוי סמן לגרירה
    });

    imageContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        imageContainer.style.cursor = 'grab'; // חזרה לסמן רגיל
    });

    imageContainer.addEventListener('mouseup', () => {
        isDragging = false;
        imageContainer.style.cursor = 'grab'; // חזרה לסמן רגיל
    });

    imageContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - imageContainer.offsetLeft;
        const walk = (x - startX) * 2; // גודל הגרירה
        imageContainer.scrollLeft = scrollLeft - walk;
    });
});
