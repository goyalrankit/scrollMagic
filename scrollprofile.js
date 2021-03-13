const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector('h1');


// Scroll Magic

const controller = new ScrollMagic.Controller();

// Scenes
let scene  = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook : 0
    }
)
// Un comment indicator to see the debug option
//.addIndicators()
.setPin(intro)
.addTo(controller);

// Video Animations
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on("update", e =>{
    scrollPosition = e.scrollPos/1000
})

setInterval(() =>{
    delay += (scrollPosition -delay) * accelAmount;
    video.currentTime = scrollPosition;
},30);





