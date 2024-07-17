
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); // locomotive

function videoAnimation() {
  const vid_conatiner = document.querySelector("#vid_container");
  const playBtn = document.querySelector("#play");
  vid_conatiner.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  vid_conatiner.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  vid_conatiner.addEventListener("mousemove", (details) => {
    gsap.to(playBtn, {
      left: details.x-[100],
      top: details.y-[100]
    });
  });
}
videoAnimation();

function loadingTextAnimation() {
  gsap.from("#page_1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.2,
  });
  gsap.from("#page_1 #vid_container", {
    y: 100,
    opacity: 0,
    delay: 1,
    duration: 0.9,
  });
}
loadingTextAnimation();

// document.addEventListener("mousemove", (details)=>{
//     gsap.to("#cursor",{
//         left: details.x,
//         top: details.y
//     })
// })
