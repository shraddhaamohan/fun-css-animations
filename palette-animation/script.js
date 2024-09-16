const gallery = document.getElementById("gallery");
console.log("gallery", gallery)
window.onmousemove = e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
        console.log("mouseX", mouseX)
        console.log("mouseY", mouseY)
        // gets you %x, %y
  const xDecimal = mouseX / window.innerWidth;
  const yDecimal = mouseY / window.innerHeight;
  
  console.log("x", xDecimal);
  console.log("y", yDecimal);
 // you are zoomed in on the center of the frame!
//  
//  (0, 0)                    900   1350
//  _________________________________
//  |                               |
//  |    ______________________     |
//  |    |                     |    |
//  |    |       *You*         |    |
//  |    |_____________________|    |
//  |                               |
//  |_______________________________|


  const maxX = gallery.offsetWidth - window.innerWidth;
  const maxY = gallery.offsetHeight - window.innerHeight;
  
  console.log("maxX", maxX);
  console.log("maxY", maxY);
  const panX = maxX * xDecimal * -1;
  const panY = maxY * yDecimal * -1;

  console.log("panX", panX, "panY", panY);
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  },
  {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}