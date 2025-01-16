var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrBlur.style.left = dets.x -175 + "px"
    crsrBlur.style.top = dets.y -175+ "px"

})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "120px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img , #about-us-in",{
    y:30,
    duration : 1,
    opacity: 0,
    // stagger:0.2,
    scrollTrigger: {
        trigger:"#about-us",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end: "top 57%",
        scrub:3
    }

})


gsap.from(".card",{
    
    scale:0.8,
    duration : 1,
    opacity: 0,
    scrollTrigger: {
        trigger:".card",
        scroller: "body",
        // markers:true,
        start:"top 90%",
        end: "top 10%",
        scrub:3
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 42%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 42%",
        scrub:4
    }
})

var navHeading = document.querySelectorAll("#nav h4")
navHeading.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border= "1px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95C11E"
    })
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
