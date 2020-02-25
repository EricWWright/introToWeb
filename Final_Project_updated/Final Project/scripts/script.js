let image = document.getElementById("slideshow");
 
let imageArray = ["slideshow/professor.jpg","slideshow/traveling.jpg","slideshow/great scott.jpg","slideshow/wormhole.jpg","slideshow/past.jpg"];
 
let imageIndex = 0;
 
function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
 
   setInterval(changeImage,1200);
 
}