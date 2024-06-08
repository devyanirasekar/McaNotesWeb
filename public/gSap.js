gsap.from(".text_logo , .listno",{
    y:-15,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
// gsap.from(".list",{
//     y:-15,
//     duration:1,
//     delay:0.4,
//     opacity:0,
// })
gsap.from(".description",{
    x:-15,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
gsap.from(".cartoon",{
    y:20,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.5
})

gsap.from(".container2",{
    y:20,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.5,
})

// scroll trigger 

gsap.from(".card",{
    y:-250,
    duration:1,
    opacity:0,
    stagger:0.6,
    scrollTrigger:{
        start:"top 60%",
        trigger:".container2",
        scroller:"body",
        // markers:true       // ( scrolling trigger for checking points remove comments to check in website)
    },
})


gsap.from(".row",{
    x:-250,
    duration:1,
    opacity:0,
    stagger:0.6,
    scrollTrigger:{
        start:"top 60%",
        trigger:".footer",
        scroller:"body",
        // markers:true,         // ( scrolling trigger for checking points , remove comments to check in website)
    },
})